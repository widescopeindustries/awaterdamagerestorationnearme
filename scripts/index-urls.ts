
import { google } from 'googleapis';
import { ALL_LOCATIONS } from '../src/lib/locations';
import fs from 'fs';
import path from 'path';

const KEY_FILE = path.join(process.cwd(), 'service_account.json');

async function main() {
    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ service_account.json not found in project root.');
        console.log('Please place your Google Service Account JSON key as "service_account.json" in the root folder.');
        console.log('You can get this key from the Google Cloud Console (IAM & Admin > Service Accounts).');
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const indexing = google.indexing({ version: 'v3', auth });

    const siteUrl = 'https://www.awaterdamagerestorationnearme.com';
    // Include home page + all location pages
    const urls = [
        siteUrl,
        ...ALL_LOCATIONS.map(slug => `${siteUrl}/locations/${slug}`)
    ];

    console.log(`🚀 Starting indexing for ${urls.length} URLs...`);

    let successCount = 0;
    let errorCount = 0;

    for (const url of urls) {
        try {
            // console.log(`Sending: ${url}`);
            await indexing.urlNotifications.publish({
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED',
                },
            });
            process.stdout.write('✅ '); // Progress indicator
            successCount++;
        } catch (error: any) {
            process.stdout.write('❌ ');
            console.error(`\nError indexing ${url}:`, error.message);
            errorCount++;
        }

        // Rate limit friendly pause (Google Indexing API is generous but good practice)
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log(`\n\n🎉 Done! Success: ${successCount}, Errors: ${errorCount}`);
}

main().catch(console.error);
