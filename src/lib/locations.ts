
// California Cities
export const CA_LOCATIONS = [
    "los-angeles-ca", "san-diego-ca", "san-jose-ca", "san-francisco-ca",
    "fresno-ca", "sacramento-ca", "long-beach-ca", "oakland-ca",
    "bakersfield-ca", "anaheim-ca", "santa-ana-ca", "riverside-ca",
    "stockton-ca", "chula-vista-ca", "irvine-ca", "fremont-ca",
    "san-bernardino-ca", "modesto-ca", "fontana-ca", "santa-clarita-ca",
    "oxnard-ca", "moreno-valley-ca", "glendale-ca", "huntington-beach-ca",
    "redding-ca", "humboldt-county-ca", "shasta-county-ca", "chico-ca",
    "santa-rosa-ca", "oceanside-ca", "garden-grove-ca", "elk-grove-ca",
    "ontario-ca", "lancaster-ca", "palmdale-ca", "salinas-ca", "hayward-ca"
];

// Oregon Cities
export const OR_LOCATIONS = [
    "portland-or", "salem-or", "eugene-or", "gresham-or", "hillsboro-or",
    "beaverton-or", "bend-or", "medford-or", "springfield-or", "corvallis-or",
    "albany-or", "tigard-or", "lake-oswego-or", "keizer-or"
];

// Washington Cities
export const WA_LOCATIONS = [
    "seattle-wa", "spokane-wa", "tacoma-wa", "vancouver-wa", "bellevue-wa",
    "kent-wa", "everett-wa", "renton-wa", "spokane-valley-wa", "federal-way-wa",
    "yakima-wa", "kirkland-wa", "bellingham-wa", "kennewick-wa", "auburn-wa",
    "pasco-wa", "marysville-wa", "redmond-wa"
];

// Texas Cities
export const TX_LOCATIONS = [
    "houston-tx", "galveston-tx", "san-antonio-tx", "austin-tx",
    "dallas-tx", "fort-worth-tx", "corpus-christi-tx", "arlington-tx",
    "sugar-land-tx", "san-marcos-tx", "plano-tx", "irving-tx"
];

// Florida Cities
export const FL_LOCATIONS = [
    "miami-fl", "tampa-fl", "orlando-fl", "jacksonville-fl",
    "fort-lauderdale-fl", "st-petersburg-fl", "west-palm-beach-fl",
    "fort-myers-fl", "hialeah-fl", "naples-fl", "sarasota-fl", "tallahassee-fl"
];

// East Coast (NY, NJ, PA, MA)
export const EAST_LOCATIONS = [
    "new-york-ny", "buffalo-ny", "rochester-ny", "yonkers-ny", "albany-ny",
    "newark-nj", "jersey-city-nj", "paterson-nj", "elizabeth-nj",
    "philadelphia-pa", "pittsburgh-pa", "allentown-pa",
    "boston-ma", "worcester-ma", "springfield-ma", "cambridge-ma"
];

// Mid-Atlantic (VA, NC, SC, GA)
export const MID_ATLANTIC_LOCATIONS = [
    "virginia-beach-va", "norfolk-va", "richmond-va", "chesapeake-va",
    "charlotte-nc", "raleigh-nc", "greensboro-nc", "durham-nc",
    "charleston-sc", "columbia-sc", "north-charleston-sc", "mount-pleasant-sc",
    "atlanta-ga", "savannah-ga", "augusta-ga", "marietta-ga"
];

// Midwest (IL, OH, MI)
export const MIDWEST_LOCATIONS = [
    "chicago-il", "aurora-il", "naperville-il", "joliet-il",
    "columbus-oh", "cleveland-oh", "cincinnati-oh", "toledo-oh",
    "detroit-mi", "grand-rapids-mi", "warren-mi", "sterling-heights-mi"
];

// Southwest & Mountain (AZ, NV, CO)
export const SOUTHWEST_LOCATIONS = [
    "phoenix-az", "tucson-az", "mesa-az", "chandler-az", "scottsdale-az",
    "las-vegas-nv", "henderson-nv", "reno-nv",
    "denver-co", "colorado-springs-co", "aurora-co", "fort-collins-co"
];

export const ALL_LOCATIONS = [
    ...CA_LOCATIONS,
    ...OR_LOCATIONS,
    ...WA_LOCATIONS,
    ...TX_LOCATIONS,
    ...FL_LOCATIONS,
    ...EAST_LOCATIONS,
    ...MID_ATLANTIC_LOCATIONS,
    ...MIDWEST_LOCATIONS,
    ...SOUTHWEST_LOCATIONS
];
