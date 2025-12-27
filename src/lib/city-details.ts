
export interface CityDetail {
    landmarks: string[];
    neighborhoods: string[];
    waterBodies: string[];
    description: string;
}

export const CITY_DETAILS: Record<string, CityDetail> = {
    "los-angeles-ca": {
        landmarks: ["Hollywood Sign", "Griffith Observatory", "Santa Monica Pier", "Crypto.com Arena"],
        neighborhoods: ["Hollywood", "Venice", "Downtown LA", "Silver Lake", "Koreatown"],
        waterBodies: ["Los Angeles River", "Pacific Ocean"],
        description: "In the dense urban environment of Los Angeles, plumbing failures in high-rises and older Spanish-style homes are common. We navigate the 405 and I-10 corridors rapidly to reach homes from the hills to the coast."
    },
    "san-francisco-ca": {
        landmarks: ["Golden Gate Bridge", "Alcatraz", "Fisherman's Wharf", "Salesforce Tower"],
        neighborhoods: ["The Mission", "SoMa", "North Beach", "Pacific Heights", "The Castro"],
        waterBodies: ["San Francisco Bay", "Pacific Ocean"],
        description: "San Francisco's historic Victorian homes often face unique plumbing challenges. Our team is equipped to handle water damage in multi-story townhomes and understands the complexities of navigating steep grades and narrow streets."
    },
    "miami-fl": {
        landmarks: ["Art Deco Historic District", "Vizcaya Museum", "Bayside Marketplace", "Hard Rock Stadium"],
        neighborhoods: ["South Beach", "Wynwood", "Little Havana", "Coconut Grove", "Brickell"],
        waterBodies: ["Biscayne Bay", "Atlantic Ocean"],
        description: "Miami's high water table and tropical storms create immediate risks for properties. We specialize in rapid salt-water extraction and humidity control to prevent mold growth in this tropical climate."
    },
    "houston-tx": {
        landmarks: ["Space Center Houston", "Minute Maid Park", "The Galleria", "Houston Zoo"],
        neighborhoods: ["The Heights", "Montrose", "River Oaks", "Midtown", "Museum District"],
        waterBodies: ["Buffalo Bayou", "Galveston Bay"],
        description: "Houston's flat terrain and severe thunderstorms make it prone to flash flooding. Our fleet is staged near I-610 and Beltway 8 to bypass traffic and reach flooded homes in Harris County immediately."
    },
    "new-york-ny": {
        landmarks: ["Empire State Building", "Central Park", "Statue of Liberty", "Times Square"],
        neighborhoods: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
        waterBodies: ["Hudson River", "East River"],
        description: "From brownstones in Brooklyn to high-rises in Manhattan, we handle New York's specific water damage needs. We specialize in vertical extraction for leaking apartments and frozen pipe bursts in classic radiators."
    },
    "chicago-il": {
        landmarks: ["Willis Tower", "Millennium Park", "Navy Pier", "Wrigley Field"],
        neighborhoods: ["Lincoln Park", "Wicker Park", "The Loop", "Hyde Park", "Logan Square"],
        waterBodies: ["Lake Michigan", "Chicago River"],
        description: "Chicago winters are brutal on plumbing. We are the local experts in frozen pipe burst restoration and basement flooding from spring thaws, serving the entire Chicagoland area."
    },
    "seattle-wa": {
        landmarks: ["Space Needle", "Pike Place Market", "Museum of Pop Culture", "Amazon Spheres"],
        neighborhoods: ["Capitol Hill", "Ballard", "Queen Anne", "Fremont", "Belltown"],
        waterBodies: ["Puget Sound", "Lake Union", "Lake Washington"],
        description: "The persistent rain in Seattle tests every roof and foundation. We focus on crawl space drying and sump pump failure restoration, ensuring homes in the Emerald City stay dry year-round."
    },
    "austin-tx": {
        landmarks: ["Texas Capitol", "Zilker Park", "Lady Bird Lake", "6th Street"],
        neighborhoods: ["Downtown", "South Congress", "East Austin", "Hyde Park", "Mueller"],
        waterBodies: ["Colorado River", "Lady Bird Lake", "Lake Travis"],
        description: "Flash flooding in Hill Country and sudden storms can catch Austin homeowners off guard. We provide rapid response to water emergencies from the Domain to South Austin."
    },
    "las-vegas-nv": {
        landmarks: ["The Strip", "Fremont Street", "Bellagio Fountains", "Red Rock Canyon"],
        neighborhoods: ["Summerlin", "Henderson", "Spring Valley", "Downtown Las Vegas", "Paradise"],
        waterBodies: ["Lake Mead"],
        description: "In the desert heat of Las Vegas, a water leak is an emergency. Dry air doesn't mean immunity; plumbing failures in slab foundations (slab leaks) are common and require specialized detection equipment."
    },
    "denver-co": {
        landmarks: ["Red Rocks Amphitheatre", "Union Station", "Denver Art Museum", "Coors Field"],
        neighborhoods: ["LoDo", "Capitol Hill", "Highlands", "Cherry Creek", "RiNo"],
        waterBodies: ["South Platte River", "Cherry Creek"],
        description: "Denver's freeze-thaw cycles put immense stress on pipes. We specialize in bursting pipe cleanup and basement waterproofing for homes across the Mile High City."
    }
    // Add more as needed over time
};
