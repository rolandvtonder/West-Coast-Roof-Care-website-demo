/**
 * All copy, contact details and SEO text live here, so the business can be
 * updated without touching layout code. Facts come from the old
 * wcroofcare.co.za site; nothing here is invented (no years-in-business,
 * warranty lengths or ratings that the business has not published).
 */
import type {ImageMetadata} from 'astro';

const photos = import.meta.glob<{default: ImageMetadata}>('../assets/photos/*.jpg', {eager: true});

/** Look up a photo by its file name (without .jpg). Fails the build if missing. */
export function photo(name: string): ImageMetadata {
  const hit = photos[`../assets/photos/${name}.jpg`];
  if (!hit) throw new Error(`Missing photo: ${name}`);
  return hit.default;
}

export const business = {
  name: 'West Coast Roof Care',
  legalName: 'West Coast Roof Care (Pty) Ltd',
  short: 'WC Roof Care',
  url: 'https://wcroofcare.co.za',
  phone: '084 557 7750',
  phoneIntl: '+27845577750',
  contact: 'Wimpie',
  whatsapp: 'https://wa.me/27845577750',
  email: 'info@wcroofcare.co.za',
  town: 'Vredenburg',
  region: 'Western Cape',
  postcode: '7380',
  country: 'ZA',
  geo: {lat: -32.9065, lng: 17.9906},
  hours: 'Mon – Fri: 8am – 5pm',
  certificate: 'https://wcroofcare.co.za/wp-content/uploads/2024/03/WCRC_CERTIFICATE.pdf',
  googleReview: 'https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJwzaCmV6hNBwRrcQwc8iJkrE',
  socials: [
    {name: 'Facebook', href: 'https://www.facebook.com/wcroofcare'},
    {name: 'Instagram', href: 'https://www.instagram.com/west_coast_roof_care/'},
    {name: 'TikTok', href: 'https://www.tiktok.com/@westcoastroofcare'},
  ],
};

export const areas = [
  'Vredenburg',
  'Saldanha',
  'Langebaan',
  'St Helena Bay',
  'Malmesbury',
];

/**
 * Town landing pages for local search. Each has its own copy (not a template
 * with the name swapped), so Google treats them as real pages, not duplicates.
 * Only general, well-known facts about each town; no claimed local jobs.
 */
export type Town = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  hero: string;
  intro: string[];
  challenges: string[];
  focus: string[]; // service slugs most relevant here, in order
  faqs: {q: string; a: string}[];
};

export const towns: Town[] = [
  {
    slug: 'vredenburg',
    name: 'Vredenburg',
    seoTitle: 'Roofing & Waterproofing Vredenburg | West Coast Roof Care',
    seoDescription:
      'Vredenburg roofer and waterproofer: waterproofing, roof coating, roof replacement and asbestos encapsulation. Our head office is in town. Free inspections.',
    hero: 'roof-replacement-complete',
    intro: [
      'Vredenburg is our home base. Our head office is here, so homeowners and businesses in town get the quickest inspections, the shortest travel times and a team that is never far away for follow-ups.',
      'From family homes and townhouses to shops, workshops and industrial buildings, we waterproof, coat, repaint and replace roofs throughout Vredenburg and the surrounding farms and suburbs.',
    ],
    challenges: [
      'Strong summer south-easters that lift loose sheeting, ridges and flashings',
      'Salt-laden air from the nearby coast that rusts metal roofs and screws',
      'Heavy winter fronts that expose cracked membranes and blocked gutters',
      'Older buildings with asbestos-cement roof sheets that need safe handling',
    ],
    focus: ['waterproofing', 'roof-replacement', 'roof-coating', 'asbestos-removal'],
    faqs: [
      {q: 'Do you charge to inspect a roof in Vredenburg?', a: 'No. Site inspections and quotations are free and without obligation. Because our head office is in Vredenburg, we can usually visit quickly.'},
      {q: 'Can you help with asbestos roofs in Vredenburg?', a: 'Yes. We are a registered asbestos contractor approved for Type 2 work under the Asbestos Abatement Regulations 2020, and we offer both encapsulation and removal.'},
    ],
  },
  {
    slug: 'saldanha',
    name: 'Saldanha',
    seoTitle: 'Roofing & Waterproofing Saldanha | West Coast Roof Care',
    seoDescription:
      'Roof waterproofing, rust-proof roof coatings, re-roofing and painting for homes, businesses and industrial buildings in Saldanha. Free site inspections.',
    hero: 'coated-iron-roof-aerial',
    intro: [
      'Saldanha sits right on the bay, with a busy harbour and a large industrial area. That mix means we work on everything here, from family homes facing the water to warehouses, workshops and commercial buildings.',
      'Constant wind and salt spray off the bay are especially tough on metal roofs, so rust protection and properly sealed fixings make a big difference to how long a Saldanha roof lasts.',
    ],
    challenges: [
      'Salt spray off the bay that speeds up corrosion on steel sheeting, bolts and gutters',
      'Large industrial and commercial roofs where small leaks spread far before anyone notices',
      'Wind-driven rain forced under laps, ridges and flashings',
      'Flat concrete roofs that pond water after winter storms',
    ],
    focus: ['roof-coating', 'waterproofing', 'painting', 'roof-replacement'],
    faqs: [
      {q: 'Do you work on industrial and commercial roofs in Saldanha?', a: 'Yes. We coat, waterproof and repaint residential, commercial and industrial buildings, and our GGC Steel Division handles structural steel and roof structures.'},
      {q: 'How often should a metal roof near Saldanha Bay be recoated?', a: 'Close to the sea, plan on an inspection every year and a recoat roughly every 3–5 years where required, depending on the product and how exposed the roof is.'},
    ],
  },
  {
    slug: 'langebaan',
    name: 'Langebaan',
    seoTitle: 'Roofing & Waterproofing Langebaan | West Coast Roof Care',
    seoDescription:
      'Langebaan roofing and waterproofing: flat roofs, balconies, roof coating, re-roofing and painting for homes near the lagoon. Free inspections and quotes.',
    hero: 'hero-roof-coating-beachfront',
    intro: [
      'Langebaan homes are built for the view: open to the lagoon, the sea breeze and the sun. That same exposure is what wears roofs, flat roof decks and balconies down, especially on homes close to the water.',
      'Many Langebaan properties are holiday or second homes that stand empty for weeks at a time, so a leak can do a lot of damage before anyone spots it. A yearly inspection and the right waterproofing system prevent nasty surprises.',
    ],
    challenges: [
      'Flat roofs, roof decks and balconies that need seamless waterproofing',
      'Strong lagoon winds and salt air on metal roofs and fixings',
      'Intense sun and UV that break down exposed membranes and paint',
      'Holiday homes where leaks go unnoticed between visits',
    ],
    focus: ['waterproofing', 'roof-coating', 'painting', 'high-pressure-cleaning'],
    faqs: [
      {q: 'Can you inspect my Langebaan holiday home while I am away?', a: 'Yes. Let us know how to get access and we will inspect the roof and send you photos and a quotation, so you do not need to be there.'},
      {q: 'What is the best waterproofing for a flat roof or balcony in Langebaan?', a: 'It depends on the surface and how it is used. Torch-on suits many flat roofs, while liquid and polyurethane membranes are often better for balconies and terraces. We recommend a system after inspecting.'},
    ],
  },
  {
    slug: 'st-helena-bay',
    name: 'St Helena Bay',
    seoTitle: 'Roofing & Waterproofing St Helena Bay | WC Roof Care',
    seoDescription:
      'Roof waterproofing, rust-proof roof coating, roof replacement and high pressure cleaning in St Helena Bay, built for life by the sea. Free inspections.',
    hero: 'torch-on-flat-roof-sea-view',
    intro: [
      'Along St Helena Bay, many homes and buildings sit close to the shoreline, where salt spray and damp sea air reach every roof sheet, screw and gutter.',
      'We help St Helena Bay property owners stay ahead of corrosion and leaks with proper surface cleaning, rust-proof coatings and waterproofing that is built for life by the sea.',
    ],
    challenges: [
      'Salt spray and sea mist that settle on roofs and corrode metal fast',
      'Algae and grime that hold moisture against roof surfaces',
      'Ageing roofs on older homes that need repair or full replacement',
      'Winter storms off the Atlantic that test every seam',
    ],
    focus: ['roof-coating', 'high-pressure-cleaning', 'waterproofing', 'roof-replacement'],
    faqs: [
      {q: 'Do you travel to St Helena Bay for small jobs?', a: 'Yes. St Helena Bay is part of our regular West Coast service area, and every job, big or small, starts with a free site inspection.'},
      {q: 'Why does my roof rust so quickly near the sea?', a: 'Salt in the air sits on the metal and keeps it damp, which speeds up corrosion. Cleaning, rust treatment and a coating designed for metal roofs slow this right down.'},
    ],
  },
  {
    slug: 'malmesbury',
    name: 'Malmesbury',
    seoTitle: 'Roofing & Waterproofing Malmesbury | West Coast Roof Care',
    seoDescription:
      'Roof waterproofing, roof coating, re-roofing, painting and asbestos encapsulation in Malmesbury and the Swartland. Free site inspections and quotes.',
    hero: 'roof-replacement-retiling',
    intro: [
      'Malmesbury is inland, in the heart of the Swartland, so roofs here face a different kind of weather than on the coast: hot, dry summers followed by cold, wet winters.',
      'Those big temperature swings make roofs expand and contract, which opens up cracks in membranes, sealants and flashings. When the winter rain arrives, those cracks become leaks. We repair, waterproof and re-roof homes, farm buildings and commercial properties across Malmesbury.',
    ],
    challenges: [
      'Hot summers and heat build-up that age membranes and paint',
      'Expansion and contraction that crack sealants and flashings',
      'Heavy winter rainfall that finds every weak point',
      'Older farm and town buildings with asbestos or worn-out roofs',
    ],
    focus: ['waterproofing', 'roof-replacement', 'roof-coating', 'asbestos-removal'],
    faqs: [
      {q: 'Do you service Malmesbury and the Swartland?', a: 'Yes. Along with our West Coast towns, we work in Malmesbury and across the greater Western Cape.'},
      {q: 'When is the best time to waterproof a roof in Malmesbury?', a: 'Late summer and autumn, before the winter rain starts, is ideal. Booking an inspection early gives time to fix problems while the roof is dry.'},
    ],
  },
];

export const nav = [
  {label: 'Home', href: '/'},
  {label: 'About', href: '/about/'},
  {label: 'Services', href: '/services/'},
  {label: 'Projects', href: '/projects/'},
  {label: 'FAQ & Pricing', href: '/faq/'},
  {label: 'GGC Steel', href: '/ggc-steel-division/'},
  {label: 'Areas', href: '/areas/'},
  {label: 'Contact', href: '/contact/'},
];

/** Headline lines; `i` lines are set in italic red. */
export type Line = {t: string; i?: boolean};

export const home = {
  title: 'Roofing & Waterproofing West Coast | West Coast Roof Care',
  description:
    'Roof waterproofing, coating, replacement, cleaning, painting and registered asbestos work in Vredenburg, Saldanha, Langebaan and the West Coast. Free inspections.',
  lines: [{t: 'Built to'}, {t: 'protect.', i: true}, {t: 'Built for the'}, {t: 'West Coast.', i: true}] as Line[],
  body: 'Salt air, wind and winter storms are hard on a roof. We waterproof, coat and replace roofs across the West Coast so your property stays dry, year after year.',
};

export type Service = {
  slug: string;
  name: string;
  /** Two-line display name for panels and heroes. */
  lines: Line[];
  short: string;
  seoTitle: string;
  seoDescription: string;
  hero: string;
  gallery: string[];
  intro: string[];
  sections: {h: string; p?: string[]; list?: string[]}[];
  benefits: string[];
  faqs: {q: string; a: string}[];
};

export const services: Service[] = [
  {
    slug: 'waterproofing',
    name: 'Waterproofing',
    lines: [{t: 'All types of'}, {t: 'waterproofing', i: true}],
    short:
      'Torch-on, liquid, polyurethane and cementitious systems that stop water ingress, leaks and damp on roofs, balconies, basements and foundations.',
    seoTitle: 'Waterproofing West Coast | Torch-On & Liquid Membranes',
    seoDescription:
      'Torch-on, liquid, polyurethane and cementitious waterproofing for roofs, balconies and basements in Vredenburg, Saldanha, Langebaan and the West Coast.',
    hero: 'torch-on-flat-roof-sea-view',
    gallery: [
      'torch-on-flame-seam',
      'torch-on-waterproofing-box-gutter',
      'flat-roof-waterproofing-lagoon',
      'foundation-wall-waterproofing',
      'torch-on-skylights',
      'liquid-membrane-flat-roof',
    ],
    intro: [
      'Water always finds the weakest point. On the West Coast, where salt air, strong wind and winter storms work on every seam and flashing, a small leak quickly turns into damp walls, stained ceilings and rotting timber.',
      'We waterproof all types of roofs and concrete structures, from flat concrete roofs and box gutters to balconies, bathrooms, basements and foundation walls. Every job starts with a site inspection so the system we use suits your structure, not the other way around.',
    ],
    sections: [
      {
        h: 'Waterproofing systems we install',
        list: [
          'Torch-on membranes: bitumen-based, heat-welded layers for flat roofs, basements, toilet blocks, retaining and foundation walls.',
          'Liquid waterproofing membranes: seamless, fully bonded coatings for roofs, balconies, bathrooms and kitchens.',
          'Polyurethane liquid membranes: flexible, UV-resistant protection for roofs, balconies and terraces.',
          'Cementitious waterproofing: for basements, water tanks and swimming pools.',
        ],
      },
      {
        h: 'Where we waterproof',
        list: [
          'Flat concrete roofs and parapet walls',
          'Box gutters, valleys and skylight upstands',
          'Balconies, terraces and roof decks',
          'Basements, retaining walls and new foundations',
          'Wet areas, water tanks and pools',
        ],
      },
      {
        h: 'How long does waterproofing last?',
        p: [
          'A correctly installed torch-on system typically lasts 10 years or more. Coastal roofs should be inspected every year, because salt and UV break down unprotected surfaces faster. Catching a lifted seam early is far cheaper than repairing water damage.',
        ],
      },
    ],
    benefits: ['Seamless, fully bonded systems', 'Residential, commercial & industrial', 'Free site inspection & quote', 'Quality, proven products'],
    faqs: [
      {
        q: 'What does roof waterproofing cost?',
        a: 'As a guide: acrylic systems R150–R320/m², polyurethane R400–R550/m², 2-layer torch-on R420–R560/m² and EPDM R850–R1,100/m². The final price depends on the roof condition and preparation needed, so we always inspect first.',
      },
      {
        q: 'Can you waterproof over an existing membrane?',
        a: 'Often, yes, if the existing layer is still well bonded. Where it has blistered or lifted, it needs to be removed first. We check this during the site inspection.',
      },
    ],
  },
  {
    slug: 'roof-coating',
    name: 'Specialised Roof Coating',
    lines: [{t: 'Specialised'}, {t: 'roof coating', i: true}],
    short:
      'Protective coating systems such as RubberRoof, Metaltreat and Thermoproof that seal, rust-proof and extend the life of metal, tile and concrete roofs.',
    seoTitle: 'Roof Coating & Roof Painting | West Coast Roof Care',
    seoDescription:
      'Rust-proof roof coatings for metal, IBR, tile and concrete roofs in Vredenburg, Langebaan, Saldanha and the West Coast. RubberRoof, Metaltreat, Thermoproof.',
    hero: 'hero-roof-coating-beachfront',
    gallery: ['roof-coating-team-on-ladder', 'coated-iron-roof-aerial', 'white-coated-ibr-roof', 'roof-coating-crew', 'aerial-roof-coating-topdown'],
    intro: [
      'A good coating is the most cost-effective way to add years to a roof. It seals hairline cracks and fixings, stops rust before it spreads, and gives the roof a clean, uniform finish.',
      'We prepare every surface properly, with high pressure cleaning, rust treatment and priming where needed, then apply a coating system matched to your roof type and exposure.',
    ],
    sections: [
      {
        h: 'Coating systems',
        list: [
          'RubberRoof: a flexible, elastomeric waterproof coating that moves with the roof.',
          'Metaltreat Roof Coat: for galvanised, mild and rolled steel roofs, giving strong protection against rust.',
          'Thermoproof: excellent sealing and adhesion on concrete, metal, wood and tile roofs.',
        ],
      },
      {
        h: 'Why coastal roofs need it',
        p: [
          'Salt-laden air speeds up corrosion on metal sheeting, screws and flashings. UV and wind wear down paint finishes. We recommend recoating coastal roofs about every 3–5 years where required, with an annual inspection in between.',
        ],
      },
    ],
    benefits: ['Rust & corrosion protection', 'Extends roof lifespan', 'Seals fixings & laps', 'Fresh, uniform finish'],
    faqs: [
      {
        q: 'How often should a roof be painted or coated?',
        a: 'On the coast, roughly every 3–5 years where required, depending on the product and exposure. An annual inspection tells you when it is due.',
      },
    ],
  },
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    lines: [{t: 'Roof'}, {t: 'replacement', i: true}],
    short: 'Complete re-roofing for ageing, damaged and weathered roofs, from stripping and new trusses to new sheeting or tiles.',
    seoTitle: 'Roof Replacement & Re-Roofing | West Coast Roof Care',
    seoDescription:
      'Roof replacement and re-roofing on the West Coast: stripping, truss and gable repairs, new sheeting and tiles. Free inspections in Vredenburg and surrounds.',
    hero: 'roof-replacement-complete',
    gallery: ['roof-replacement-trusses', 'gable-rebuild-brick', 'roof-replacement-retiling', 'roof-replacement-ladders', 'roof-renovation-gable-before'],
    intro: [
      'Sometimes repairs and coatings are no longer enough. When a roof has sagging sections, rotten timber, widespread rust or repeated leaks, replacing it is the safer and more economical choice.',
      'We handle the full process: stripping the old roof, repairing or replacing trusses and gables, and installing new sheeting or tiles with properly sealed flashings and ridges.',
    ],
    sections: [
      {
        h: 'Signs you need a new roof',
        list: [
          'Leaks that keep coming back after repairs',
          'Sagging rooflines or soft, rotten timber',
          'Widespread rust or broken, slipped tiles',
          'Storm or wind damage over large areas',
        ],
      },
      {
        h: 'Repair or replace?',
        p: [
          'Localised damage can usually be repaired. If the structure or most of the covering has failed, replacement saves money over time. We will tell you honestly which one your roof needs after the inspection.',
        ],
      },
    ],
    benefits: ['Full strip & re-roof', 'Truss & gable repairs', 'Sheeting & tile roofs', 'Neat, safe sites'],
    faqs: [
      {
        q: 'How do I know when my roof needs replacing?',
        a: 'Recurring leaks, sagging, rotten timber, widespread rust or broken tiles are the usual signs. We inspect and advise whether repair or replacement makes more sense.',
      },
    ],
  },
  {
    slug: 'high-pressure-cleaning',
    name: 'High Pressure Cleaning',
    lines: [{t: 'High pressure'}, {t: 'cleaning', i: true}],
    short: 'Removes dirt, algae, moss and loose paint, and prepares roofs, walls and paving for coating, painting and waterproofing.',
    seoTitle: 'High Pressure Roof Cleaning | West Coast Roof Care',
    seoDescription:
      'High pressure cleaning of roofs, walls and paving on the West Coast. Removes algae, salt and flaking paint so coatings and paint bond and last.',
    hero: 'high-pressure-cleaning-roof',
    gallery: ['coastal-home-scaffold', 'roof-coating-team-on-ladder', 'white-coated-ibr-roof'],
    intro: [
      'Dirt, algae and salt build-up hold moisture against your roof and shorten its life. High pressure cleaning restores the surface and is the first step before any coating or paint system.',
      'Our teams work safely at height with harnesses and the right equipment for each surface.',
    ],
    sections: [
      {
        h: 'What we clean',
        list: ['Tile, metal and fibre-cement roofs', 'Walls and boundary walls', 'Paving and driveways', 'Surfaces before painting or waterproofing'],
      },
      {
        h: 'Why clean before coating or painting?',
        p: [
          'A coating or paint system only lasts as long as its bond with the surface. Dirt, salt deposits, algae and chalky old paint stop new coatings from gripping, which leads to peeling and blistering within a season or two. Proper cleaning is the step that makes the rest of the job last.',
        ],
      },
      {
        h: 'The right pressure for each surface',
        p: [
          'Steel sheeting, concrete tiles and paving can take a strong clean. Older tiles and fibre-cement need a gentler approach. We adjust pressure and technique so the surface gets properly clean without forcing water under laps or damaging the material.',
          'Asbestos-cement roofs are different: they must never be cleaned with ordinary high pressure washing, because it releases fibres. Those roofs need a controlled method under the Asbestos Abatement Regulations, which we handle as a registered asbestos contractor.',
        ],
      },
    ],
    benefits: ['Removes algae & grime', 'Proper prep for coatings', 'Safe work at height', 'Homes & commercial'],
    faqs: [
      {
        q: 'Can high pressure cleaning damage my roof?',
        a: 'Done carelessly, yes. Too much pressure can force water under tiles and laps or damage softer surfaces. We match the pressure and technique to the roof so it is cleaned thoroughly and safely.',
      },
      {
        q: 'Can an asbestos roof be high pressure cleaned?',
        a: 'Not with ordinary high pressure cleaning, because it releases asbestos fibres. Asbestos-cement roofs need controlled methods under the 2020 regulations. As a registered asbestos contractor, we can advise on cleaning and encapsulation.',
      },
    ],
  },
  {
    slug: 'painting',
    name: 'Residential & Industrial Painting',
    lines: [{t: 'Residential &'}, {t: 'industrial painting', i: true}],
    short: 'Interior and exterior painting for homes, commercial and industrial buildings, with coatings chosen for coastal conditions.',
    seoTitle: 'Painting Contractors West Coast | West Coast Roof Care',
    seoDescription:
      'Exterior, interior and industrial painting in Vredenburg, Saldanha, Langebaan and the West Coast, with coatings made for salt air, wind and sun.',
    hero: 'commercial-showroom-painting',
    gallery: ['commercial-building-painting', 'company-van-commercial-project', 'double-storey-coastal-home'],
    intro: [
      'Coastal buildings need paint that does more than look good. We use quality pure acrylic emulsion coatings that protect against the weather and corrosion while letting walls breathe, acting as a one-way membrane that keeps rain out and lets moisture escape.',
      'From family homes to showrooms and industrial buildings, we prepare surfaces properly and leave a clean, even finish.',
    ],
    sections: [
      {
        h: 'Painting services',
        list: ['Exterior walls and fascias', 'Interior painting', 'Commercial and industrial buildings', 'Damp-proofing and crack repairs before painting'],
      },
      {
        h: 'Preparation makes the paint job',
        list: [
          'High pressure cleaning to remove dirt, salt and algae',
          'Scraping and sanding loose or flaking paint',
          'Filling cracks and treating damp areas',
          'Priming bare or repaired surfaces',
          'Two finishing coats of quality exterior paint',
        ],
      },
      {
        h: 'Paint made for coastal conditions',
        p: [
          'Salt air, strong UV and wind-driven rain break down ordinary paint quickly on the West Coast. We use pure acrylic exterior coatings that resist the weather, protect against corrosion and let the walls breathe, so moisture inside the wall can escape instead of blistering the paint.',
        ],
      },
    ],
    benefits: ['Coastal-grade coatings', 'Thorough surface prep', 'Homes, shops & industry', 'Clean, even finish'],
    faqs: [
      {
        q: 'How often should exterior walls be repainted on the coast?',
        a: 'It depends on how exposed the walls are and the paint used. Coastal exteriors need maintenance more often than inland ones. A yearly look lets you touch up early instead of repainting everything later.',
      },
      {
        q: 'Do you paint commercial and industrial buildings?',
        a: 'Yes. We paint homes, shops, showrooms, offices and industrial buildings, inside and out.',
      },
    ],
  },
  {
    slug: 'asbestos-removal',
    name: 'Asbestos Encapsulation & Removal',
    lines: [{t: 'Asbestos'}, {t: 'encapsulation', i: true}],
    short:
      'Registered asbestos contractor for the responsible encapsulation and removal of asbestos roofs and building materials, in line with the 2020 regulations.',
    seoTitle: 'Asbestos Encapsulation & Removal | West Coast Roof Care',
    seoDescription:
      'Registered asbestos contractor (Type 2, 2020 regulations) for asbestos roof encapsulation and removal in Vredenburg, Saldanha, Langebaan and the West Coast.',
    hero: 'roof-coating-crew',
    gallery: [],
    intro: [
      'Many older West Coast buildings still have asbestos-cement roof sheets. Left alone they are usually stable, but as they weather, crack or get broken, fibres can be released, and that is a serious health risk.',
      'West Coast Roof Care is a registered asbestos contractor, approved by the Department of Employment and Labour to perform Type 2 work in terms of Regulation 12 of the Asbestos Abatement Regulations 2020.',
    ],
    sections: [
      {
        h: 'Encapsulation or removal?',
        p: [
          'Encapsulation seals the asbestos surface under a specialised coating system so fibres stay locked in. It is often the most practical option for roofs that are still structurally sound. Where sheets are badly damaged, removal and replacement may be required.',
        ],
      },
      {
        h: 'Our approach',
        list: [
          'Site inspection and assessment of the asbestos material',
          'Safe work procedures, protective equipment and controlled cleaning',
          'Encapsulation coating, or removal and replacement',
          'Work done in line with the Asbestos Abatement Regulations 2020',
        ],
      },
      {
        h: 'Does my roof contain asbestos?',
        p: [
          'Asbestos-cement was widely used in South Africa for roof sheets, ceilings, gutters and water tanks until it was banned in 2008. Grey corrugated or flat fibre-cement sheets on older buildings often contain asbestos. Only a sample test can confirm it, and we can arrange that as part of the inspection.',
        ],
      },
      {
        h: 'Why asbestos work must be done by a registered contractor',
        p: [
          'Asbestos is dangerous when it is disturbed. Breaking, cutting, drilling, sanding or pressure-washing the sheets releases fibres that can be inhaled. That is why the regulations require registered contractors, controlled work methods and proper disposal. Please do not try to remove or clean an asbestos roof yourself.',
        ],
      },
    ],
    benefits: ['Registered asbestos contractor', 'Type 2 work approved', 'Safety-first procedures', 'Encapsulation or removal'],
    faqs: [
      {
        q: 'Is asbestos encapsulation safe?',
        a: 'Yes, when done by a registered contractor using the correct procedures. Encapsulation seals the surface so fibres cannot be released, and it avoids disturbing the material where removal is not needed.',
      },
      {
        q: 'Can I remove asbestos roof sheets myself?',
        a: 'No. Asbestos work must be done by a registered asbestos contractor following the Asbestos Abatement Regulations 2020, including safe removal and disposal.',
      },
      {
        q: 'How do I know if my roof is asbestos?',
        a: 'Grey fibre-cement roof sheets on buildings from before 2008 often contain asbestos, but only a sample test can confirm it. We can check during a site inspection.',
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;

/** The three home-page panels: each shows its own third of ONE aerial photo. */
export const panels = [
  {slug: 'waterproofing', lines: [{t: 'Water'}, {t: 'proofing', i: true}], specs: [['Systems', 'Torch-on · PU · Liquid'], ['Lifespan', '10+ years (torch-on)']]},
  {slug: 'roof-coating', lines: [{t: 'Roof'}, {t: 'coating', i: true}], specs: [['Products', 'RubberRoof · Metaltreat'], ['Recoat', 'Every 3–5 years']]},
  {slug: 'roof-replacement', lines: [{t: 'Roof'}, {t: 'replacement', i: true}], specs: [['Scope', 'Strip · Trusses · Re-roof'], ['Roofs', 'Sheeting & tiles']]},
] as {slug: string; lines: Line[]; specs: [string, string][]}[];

export const process = [
  {t: 'Site inspection', d: 'We visit, inspect the roof and find the real cause of the problem.'},
  {t: 'Quotation', d: 'You get a detailed, no-obligation quotation with the right system for your roof.'},
  {t: 'Supplies', d: 'Quality materials are organised and a start date is agreed with you.'},
  {t: 'Completion', d: 'The job is finished on schedule, neatly, with the site left clean.'},
];

export const whyUs = [
  {t: '100% satisfaction guarantee', d: 'We are not done until you are happy with the work.'},
  {t: 'Registered asbestos contractor', d: 'Approved for Type 2 asbestos work under the 2020 regulations.'},
  {t: 'Local West Coast team', d: 'Based in Vredenburg. We know what coastal weather does to roofs.'},
  {t: 'Quality products', d: 'Proven systems such as RubberRoof, Metaltreat and Thermoproof.'},
];

export const reviews = [
  {name: 'Greg Holloway', text: 'Customer-first approach, with outstanding service and workmanship. Thank you Wimpie and team.'},
  {name: 'Inge De Lange', text: 'Wimpie and his team are on time, professional and affordable.'},
  {name: 'Herman Potgieter', text: 'A professional process from start to finish, with good communication throughout.'},
  {name: 'Sean Private', text: 'Professional service. Gets the job done with good workmanship.'},
];

export type Project = {img: string; cat: 'Waterproofing' | 'Roof coating' | 'Roof replacement' | 'Painting & cleaning'; alt: string};

export const projects: Project[] = [
  {img: 'hero-roof-coating-beachfront', cat: 'Roof coating', alt: 'Freshly coated charcoal metal roof on a beachfront home'},
  {img: 'torch-on-flat-roof-sea-view', cat: 'Waterproofing', alt: 'Team installing torch-on waterproofing on a flat roof overlooking the sea'},
  {img: 'roof-replacement-complete', cat: 'Roof replacement', alt: 'Completed double-storey roof replacement with new tiles and gables'},
  {img: 'aerial-roof-coating-topdown', cat: 'Roof coating', alt: 'Aerial view of metal roofs being coated on a coastal development'},
  {img: 'torch-on-flame-seam', cat: 'Waterproofing', alt: 'Torch-on membrane seam being heat-welded with a gas torch'},
  {img: 'commercial-building-painting', cat: 'Painting & cleaning', alt: 'Painted commercial building exterior'},
  {img: 'roof-replacement-trusses', cat: 'Roof replacement', alt: 'New roof trusses going up during a roof replacement'},
  {img: 'flat-roof-waterproofing-lagoon', cat: 'Waterproofing', alt: 'Waterproofed flat roof beside the lagoon'},
  {img: 'coated-iron-roof-aerial', cat: 'Roof coating', alt: 'Aerial view of a newly coated corrugated iron roof'},
  {img: 'torch-on-waterproofing-box-gutter', cat: 'Waterproofing', alt: 'Torch-on waterproofing in a long box gutter between roofs'},
  {img: 'high-pressure-cleaning-roof', cat: 'Painting & cleaning', alt: 'Worker high pressure cleaning a metal roof'},
  {img: 'gable-rebuild-brick', cat: 'Roof replacement', alt: 'Brick gable rebuilt before re-roofing'},
  {img: 'foundation-wall-waterproofing', cat: 'Waterproofing', alt: 'Foundation wall waterproofed with a black membrane'},
  {img: 'roof-coating-team-on-ladder', cat: 'Roof coating', alt: 'Team coating a metal roof from roof ladders'},
  {img: 'commercial-showroom-painting', cat: 'Painting & cleaning', alt: 'Commercial showroom after exterior painting'},
  {img: 'roof-replacement-retiling', cat: 'Roof replacement', alt: 'Roofers retiling a double-storey home'},
  {img: 'torch-on-skylights', cat: 'Waterproofing', alt: 'Torch-on waterproofing around roof skylights'},
  {img: 'white-coated-ibr-roof', cat: 'Roof coating', alt: 'Long IBR roof coated in white'},
  {img: 'liquid-membrane-flat-roof', cat: 'Waterproofing', alt: 'Flat roof finished with a liquid waterproofing membrane'},
  {img: 'roof-replacement-ladders', cat: 'Roof replacement', alt: 'Roof replacement crew working from ladders'},
  {img: 'torch-on-rolls-on-roof', cat: 'Waterproofing', alt: 'Rolls of torch-on membrane laid out on a roof'},
  {img: 'roof-coating-crew', cat: 'Roof coating', alt: 'Roof coating crew working on a steep metal roof'},
  {img: 'basement-wall-membrane', cat: 'Waterproofing', alt: 'Basement walls with waterproofing membrane applied'},
  {img: 'coastal-home-scaffold', cat: 'Painting & cleaning', alt: 'Coastal home with scaffolding for roof and wall work'},
];

export const faqs = [
  {
    q: 'How much does roof waterproofing cost in South Africa?',
    a: 'As a guide per square metre: acrylic waterproofing R150–R320, polyurethane R400–R550, 2-layer torch-on R420–R560 and EPDM R850–R1,100. Prices depend on the roof condition and preparation, so a site inspection is needed for an accurate quote.',
  },
  {
    q: 'How often should I paint or coat my roof?',
    a: 'Coastal roofs should be inspected every year and recoated about every 3–5 years where required. Salt air, UV and wind wear finishes down faster on the West Coast.',
  },
  {
    q: 'How long does waterproofing last?',
    a: 'A correctly installed torch-on system typically lasts 10 years or more. Regular inspections and maintenance help it reach its full lifespan.',
  },
  {
    q: 'What causes roof leaks?',
    a: 'Common causes are cracked or lifted membranes, rusted sheets and screws, broken or slipped tiles, failed flashings around chimneys and skylights, blocked gutters and box gutters, ponding water on flat roofs, and storm damage.',
  },
  {
    q: 'When should a roof be replaced instead of repaired?',
    a: 'If damage is localised, repairs usually make sense. If leaks keep returning, the timber is sagging or rotten, or most of the covering has failed, replacement is more economical. We will advise honestly after inspecting.',
  },
  {
    q: 'Do you do asbestos encapsulation?',
    a: 'Yes. We are a registered asbestos contractor approved by the Department of Employment and Labour for Type 2 work under Regulation 12 of the Asbestos Abatement Regulations 2020.',
  },
  {
    q: 'How often should my roof be inspected?',
    a: 'At least once a year on the coast, and after any major storm.',
  },
  {
    q: 'Which areas do you service?',
    a: 'We are based in Vredenburg and work across the West Coast, including Saldanha, Langebaan, St Helena Bay and surrounding areas, as well as the wider Western Cape.',
  },
  {
    q: 'Do you offer inspections and quotations?',
    a: 'Yes. Every job starts with a site inspection, followed by a detailed, no-obligation quotation.',
  },
];

export const pricing = [
  {system: 'Acrylic waterproofing system', range: 'R150 – R320 / m²'},
  {system: 'Polyurethane membrane', range: 'R400 – R550 / m²'},
  {system: 'Torch-on (2-layer)', range: 'R420 – R560 / m²'},
  {system: 'EPDM membrane', range: 'R850 – R1,100 / m²'},
];

export const ggc = {
  services: [
    {t: 'Design & Engineering', d: 'Structural steel design and engineering for new builds and alterations.'},
    {t: 'Fabrication', d: 'Steelwork fabricated to drawings for portal frames, mezzanines, staircases and canopies.'},
    {t: 'Erection & Rigging', d: 'On-site erection and installation, including crane rigging.'},
    {t: 'Roof Structures', d: 'Steel roof structures and building steelwork, ready for our roofing teams.'},
    {t: 'Technical Project Management', d: 'Project management and technical coordination from design to handover.'},
  ],
  sectors: ['Industrial warehouses', 'Commercial centres', 'Residential structural steel'],
};
