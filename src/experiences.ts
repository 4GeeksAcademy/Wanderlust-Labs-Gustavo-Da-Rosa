export interface Experience {
  id: string;
  title: string;
  description: string;
  category: 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';
  destination: string;
  price: number;
  rating: number;
  image: string;
  imageUrl: string;
}

type ExperienceSeed = {
  destination: string;
  activity: string;
  teaser: string;
  basePrice: number;
  baseRating: number;
  imageSlug: string;
};

const experienceSeedsByCategory: Record<Experience['category'], ExperienceSeed[]> = {
  Adventure: [
    { destination: 'Queenstown, New Zealand', activity: 'Canyon Swing and Jet Boat', teaser: 'high-speed river runs and cliff-edge jumps', basePrice: 210, baseRating: 4.8, imageSlug: 'queenstown-canyon-swing' },
    { destination: 'Interlaken, Switzerland', activity: 'Paragliding Over the Alps', teaser: 'snow-capped peaks and turquoise lakes from the sky', basePrice: 240, baseRating: 4.9, imageSlug: 'interlaken-paragliding' },
    { destination: 'Marrakech, Morocco', activity: 'Agafay Desert Quad Expedition', teaser: 'rocky desert tracks and sunset tea camp', basePrice: 140, baseRating: 4.7, imageSlug: 'marrakech-quad' },
    { destination: 'Moab, United States', activity: 'Arches Off-Road Trail Ride', teaser: 'red-rock arches and technical desert routes', basePrice: 195, baseRating: 4.7, imageSlug: 'moab-offroad' },
    { destination: 'Chamonix, France', activity: 'Glacier Hike and Ice Cave Trek', teaser: 'alpine crampon routes led by mountain guides', basePrice: 260, baseRating: 4.8, imageSlug: 'chamonix-glacier' },
    { destination: 'Reykjavik, Iceland', activity: 'Silfra Fissure Snorkeling', teaser: 'crystal-clear tectonic waters between continents', basePrice: 230, baseRating: 4.8, imageSlug: 'iceland-silfra' },
    { destination: 'Cape Town, South Africa', activity: 'Table Mountain Abseil', teaser: 'vertical descent with ocean and city views', basePrice: 175, baseRating: 4.7, imageSlug: 'capetown-abseil' },
    { destination: 'Cusco, Peru', activity: 'Salkantay Trek Challenge', teaser: 'high-altitude passes and Andean cloud forests', basePrice: 320, baseRating: 4.9, imageSlug: 'cusco-salkantay' },
    { destination: 'Pokhara, Nepal', activity: 'Annapurna Base Camp Fast Trek', teaser: 'ridge-line sunrises and teahouse nights', basePrice: 350, baseRating: 4.9, imageSlug: 'pokhara-abc' },
    { destination: 'El Chalten, Argentina', activity: 'Fitz Roy Alpine Ascent', teaser: 'windy Patagonian trails and granite towers', basePrice: 285, baseRating: 4.8, imageSlug: 'elchalten-fitzroy' },
    { destination: 'Banff, Canada', activity: 'Icefield Parkway Climbing Day', teaser: 'frozen waterfalls and mixed climbing terrain', basePrice: 270, baseRating: 4.8, imageSlug: 'banff-icefield' },
    { destination: 'Rotorua, New Zealand', activity: 'Mountain Bike Redwood Circuit', teaser: 'flow trails through ancient redwood forest', basePrice: 155, baseRating: 4.7, imageSlug: 'rotorua-mtb' },
    { destination: 'Oahu, United States', activity: 'North Shore Big-Wave Lesson', teaser: 'open-water surf coaching with safety team', basePrice: 220, baseRating: 4.7, imageSlug: 'oahu-surf' },
    { destination: 'La Fortuna, Costa Rica', activity: 'Arenal Volcano Canyoning', teaser: 'waterfalls, rappels, and rainforest pools', basePrice: 185, baseRating: 4.8, imageSlug: 'arenal-canyoning' },
    { destination: 'Zermatt, Switzerland', activity: 'Matterhorn Via Ferrata Route', teaser: 'high-alpine ladders and dramatic ridgelines', basePrice: 265, baseRating: 4.8, imageSlug: 'zermatt-via-ferrata' },
    { destination: 'Bovec, Slovenia', activity: 'Soca River Whitewater Run', teaser: 'emerald rapids with class III-IV sections', basePrice: 160, baseRating: 4.7, imageSlug: 'bovec-rafting' },
    { destination: 'Alesund, Norway', activity: 'Fjord Sea Kayak Traverse', teaser: 'sheer cliffs, seabirds, and glacial waters', basePrice: 215, baseRating: 4.8, imageSlug: 'alesund-kayak' },
    { destination: 'Split, Croatia', activity: 'Dalmatian Coast Sailing Week', teaser: 'island hopping under Adriatic winds', basePrice: 430, baseRating: 4.9, imageSlug: 'split-sailing' },
    { destination: 'Paihia, New Zealand', activity: 'Bay of Islands Parasail', teaser: 'aerial views of subtropical coves', basePrice: 145, baseRating: 4.6, imageSlug: 'paihia-parasail' },
    { destination: 'Wadi Rum, Jordan', activity: 'Desert Rock Climbing Camp', teaser: 'sandstone routes and Bedouin campsites', basePrice: 200, baseRating: 4.8, imageSlug: 'wadirum-climbing' },
  ],
  Culture: [
    { destination: 'Kyoto, Japan', activity: 'Temple and Tea Ceremony Walk', teaser: 'historic districts, ritual tea, and artisan lanes', basePrice: 125, baseRating: 4.8, imageSlug: 'kyoto-tea-ceremony' },
    { destination: 'Rome, Italy', activity: 'After-Hours Colosseum Stories', teaser: 'ancient engineering, gladiator lore, and hidden passages', basePrice: 150, baseRating: 4.8, imageSlug: 'rome-colosseum' },
    { destination: 'Istanbul, Turkiye', activity: 'Byzantine to Ottoman Heritage Tour', teaser: 'mosques, cisterns, and grand bazaar traditions', basePrice: 118, baseRating: 4.7, imageSlug: 'istanbul-heritage' },
    { destination: 'Cairo, Egypt', activity: 'Giza and Egyptian Museum Journey', teaser: 'pharaonic monuments and artifact deep dives', basePrice: 130, baseRating: 4.7, imageSlug: 'cairo-giza' },
    { destination: 'Hanoi, Vietnam', activity: 'Old Quarter History Cycle', teaser: 'colonial architecture and local craft guild stories', basePrice: 92, baseRating: 4.6, imageSlug: 'hanoi-history' },
    { destination: 'Athens, Greece', activity: 'Acropolis Mythology Experience', teaser: 'classical temples and dramatic legend retellings', basePrice: 112, baseRating: 4.7, imageSlug: 'athens-acropolis' },
    { destination: 'Seville, Spain', activity: 'Flamenco Roots and Palacio Visit', teaser: 'Andalusian rhythms and royal courtyard art', basePrice: 108, baseRating: 4.7, imageSlug: 'seville-flamenco' },
    { destination: 'Mexico City, Mexico', activity: 'Aztec and Muralism Trail', teaser: 'pre-Hispanic history and iconic modern murals', basePrice: 105, baseRating: 4.7, imageSlug: 'mexicocity-mural' },
    { destination: 'Fez, Morocco', activity: 'Medina Craft Masterclass Tour', teaser: 'tanneries, tilework, and artisan workshops', basePrice: 98, baseRating: 4.6, imageSlug: 'fez-medina' },
    { destination: 'Cusco, Peru', activity: 'Inca City and Sacred Textiles Day', teaser: 'stone architecture and Quechua weaving practices', basePrice: 120, baseRating: 4.8, imageSlug: 'cusco-inca' },
    { destination: 'Varanasi, India', activity: 'Ghat Ritual and Silk Quarter Visit', teaser: 'river ceremonies and centuries-old weaving culture', basePrice: 95, baseRating: 4.6, imageSlug: 'varanasi-ghat' },
    { destination: 'Jerusalem, Israel', activity: 'Old City Multi-Faith Heritage Walk', teaser: 'sacred landmarks and living historical narratives', basePrice: 135, baseRating: 4.7, imageSlug: 'jerusalem-heritage' },
    { destination: 'Lisbon, Portugal', activity: 'Fado and Alfama Culture Night', teaser: 'soulful music venues and hilltop neighborhoods', basePrice: 102, baseRating: 4.6, imageSlug: 'lisbon-fado' },
    { destination: 'Lhasa, China', activity: 'Tibetan Monastery Insights Tour', teaser: 'monastic art, prayer routes, and local customs', basePrice: 170, baseRating: 4.8, imageSlug: 'lhasa-monastery' },
    { destination: 'Krakow, Poland', activity: 'Royal Route and Jewish Quarter', teaser: 'medieval squares and resilient cultural memory', basePrice: 96, baseRating: 4.6, imageSlug: 'krakow-royal-route' },
    { destination: 'Luang Prabang, Laos', activity: 'Mekong Heritage and Alms Tradition', teaser: 'Buddhist rituals and colonial-era facades', basePrice: 90, baseRating: 4.6, imageSlug: 'luangprabang-heritage' },
    { destination: 'Amman, Jordan', activity: 'Roman Theater and Citadel Narratives', teaser: 'archaeological layers and Levantine storytelling', basePrice: 94, baseRating: 4.6, imageSlug: 'amman-citadel' },
    { destination: 'Cartagena, Colombia', activity: 'Fortified City and Afro-Caribbean Legacy', teaser: 'colonial walls and vibrant local identity', basePrice: 99, baseRating: 4.7, imageSlug: 'cartagena-legacy' },
    { destination: 'Ubud, Indonesia', activity: 'Balinese Temple and Dance Evening', teaser: 'sacred temple etiquette and classical performance', basePrice: 88, baseRating: 4.7, imageSlug: 'ubud-dance' },
    { destination: 'Edinburgh, Scotland', activity: 'Castle, Closes, and Literary Lore', teaser: 'stone alleys and tales from Scottish writers', basePrice: 111, baseRating: 4.7, imageSlug: 'edinburgh-lore' },
  ],
  Food: [
    { destination: 'Bangkok, Thailand', activity: 'Street Food Night Market Crawl', teaser: 'pad thai, satay, and mango sticky rice tastings', basePrice: 79, baseRating: 4.8, imageSlug: 'bangkok-food-tour' },
    { destination: 'Tokyo, Japan', activity: 'Sushi Counter and Izakaya Trail', teaser: 'seasonal nigiri, yakitori, and sake pairings', basePrice: 145, baseRating: 4.9, imageSlug: 'tokyo-sushi' },
    { destination: 'Lima, Peru', activity: 'Ceviche and Pisco Workshop', teaser: 'coastal seafood classics and cocktail craft', basePrice: 98, baseRating: 4.8, imageSlug: 'lima-ceviche' },
    { destination: 'Bologna, Italy', activity: 'Pasta Lab and Market Tasting', teaser: 'tagliatelle making and Parmigiano producers', basePrice: 132, baseRating: 4.8, imageSlug: 'bologna-pasta' },
    { destination: 'Istanbul, Turkiye', activity: 'Meze and Baklava Route', teaser: 'spice market flavors and Bosphorus sweets', basePrice: 86, baseRating: 4.7, imageSlug: 'istanbul-meze' },
    { destination: 'Hanoi, Vietnam', activity: 'Pho and Bun Cha Morning', teaser: 'family-run stalls and aromatic broth secrets', basePrice: 72, baseRating: 4.7, imageSlug: 'hanoi-pho' },
    { destination: 'Oaxaca, Mexico', activity: 'Mole and Mezcal Discovery', teaser: 'regional sauces and agave distillery visits', basePrice: 94, baseRating: 4.8, imageSlug: 'oaxaca-mole' },
    { destination: 'Marrakech, Morocco', activity: 'Tagine and Souk Spice Class', teaser: 'traditional ovens and market spice blending', basePrice: 82, baseRating: 4.7, imageSlug: 'marrakech-tagine' },
    { destination: 'Barcelona, Spain', activity: 'Tapas and Vermut Tap Tour', teaser: 'neighborhood bars and Catalan small plates', basePrice: 101, baseRating: 4.7, imageSlug: 'barcelona-tapas' },
    { destination: 'Istanbul, Turkiye', activity: 'Breakfast by the Bosphorus', teaser: 'simit, cheeses, and Turkish tea rituals', basePrice: 76, baseRating: 4.6, imageSlug: 'istanbul-breakfast' },
    { destination: 'New Orleans, United States', activity: 'Creole Classics Kitchen Session', teaser: 'gumbo, jambalaya, and beignet favorites', basePrice: 115, baseRating: 4.8, imageSlug: 'neworleans-creole' },
    { destination: 'Seoul, South Korea', activity: 'Korean BBQ and Banchan Tour', teaser: 'grill techniques and fermented side dishes', basePrice: 104, baseRating: 4.8, imageSlug: 'seoul-bbq' },
    { destination: 'Penang, Malaysia', activity: 'Hawker Center Flavor Safari', teaser: 'char kway teow and laksa tasting stops', basePrice: 69, baseRating: 4.7, imageSlug: 'penang-hawker' },
    { destination: 'Istanbul, Turkiye', activity: 'Turkish Coffee and Dessert Walk', teaser: 'baklava makers and coffeehouse traditions', basePrice: 74, baseRating: 4.6, imageSlug: 'istanbul-coffee' },
    { destination: 'Lyon, France', activity: 'Bouchon Dinner and Wine Pairing', teaser: 'classic Lyonnaise dishes in historic bouchons', basePrice: 149, baseRating: 4.8, imageSlug: 'lyon-bouchon' },
    { destination: 'Singapore, Singapore', activity: 'Chinatown and Hawker Tastings', teaser: 'multi-ethnic recipes from iconic stalls', basePrice: 88, baseRating: 4.7, imageSlug: 'singapore-hawker' },
    { destination: 'Tbilisi, Georgia', activity: 'Khachapuri and Winery Day', teaser: 'traditional bread baking and qvevri wines', basePrice: 90, baseRating: 4.7, imageSlug: 'tbilisi-khachapuri' },
    { destination: 'San Sebastian, Spain', activity: 'Pintxos Crawl in Parte Vieja', teaser: 'chef-level bites and cider house stops', basePrice: 138, baseRating: 4.9, imageSlug: 'sansebastian-pintxos' },
    { destination: 'Istanbul, Turkiye', activity: 'Seafood and Meyhane Evening', teaser: 'Aegean-style seafood plates and live music', basePrice: 112, baseRating: 4.7, imageSlug: 'istanbul-seafood' },
    { destination: 'Naples, Italy', activity: 'Neapolitan Pizza Masterclass', teaser: 'wood-fired dough shaping and local toppings', basePrice: 120, baseRating: 4.8, imageSlug: 'naples-pizza' },
  ],
  Wellness: [
    { destination: 'Ubud, Indonesia', activity: 'Sunrise Yoga and Sound Healing', teaser: 'rice terrace practice and guided breathwork', basePrice: 95, baseRating: 4.8, imageSlug: 'ubud-yoga' },
    { destination: 'Rishikesh, India', activity: 'Ganges Meditation Retreat Day', teaser: 'ashram sessions with mindful river rituals', basePrice: 72, baseRating: 4.7, imageSlug: 'rishikesh-meditation' },
    { destination: 'Sedona, United States', activity: 'Red Rock Mindfulness Hike', teaser: 'slow trekking and grounding practices', basePrice: 110, baseRating: 4.7, imageSlug: 'sedona-mindfulness' },
    { destination: 'Chiang Mai, Thailand', activity: 'Lanna Herbal Spa Journey', teaser: 'traditional compresses and Thai wellness rituals', basePrice: 84, baseRating: 4.6, imageSlug: 'chiangmai-spa' },
    { destination: 'Budapest, Hungary', activity: 'Thermal Bath Restoration Circuit', teaser: 'historic baths and hydrotherapy sessions', basePrice: 78, baseRating: 4.6, imageSlug: 'budapest-thermal' },
    { destination: 'Reykjavik, Iceland', activity: 'Geothermal Lagoon Recovery', teaser: 'mineral-rich waters and contrast therapy', basePrice: 140, baseRating: 4.8, imageSlug: 'reykjavik-lagoon' },
    { destination: 'Bali, Indonesia', activity: 'Yoga and Balinese Purification', teaser: 'temple water blessing and restorative flow', basePrice: 99, baseRating: 4.9, imageSlug: 'bali-yoga' },
    { destination: 'Tulum, Mexico', activity: 'Beachfront Breathwork Session', teaser: 'guided breath practice by Caribbean shores', basePrice: 88, baseRating: 4.7, imageSlug: 'tulum-breathwork' },
    { destination: 'Alicante, Spain', activity: 'Mediterranean Detox Weekend', teaser: 'nutrition workshops and mindful coastal walks', basePrice: 130, baseRating: 4.7, imageSlug: 'alicante-detox' },
    { destination: 'Kerala, India', activity: 'Ayurvedic Rejuvenation Package', teaser: 'dosha-based therapies and cooking guidance', basePrice: 150, baseRating: 4.8, imageSlug: 'kerala-ayurveda' },
    { destination: 'Byron Bay, Australia', activity: 'Oceanfront Sunrise Pilates', teaser: 'mobility training with sea-view sessions', basePrice: 92, baseRating: 4.6, imageSlug: 'byronbay-pilates' },
    { destination: 'Uvita, Costa Rica', activity: 'Rainforest Wellness Immersion', teaser: 'forest bathing and cold-water waterfall dips', basePrice: 117, baseRating: 4.7, imageSlug: 'uvita-wellness' },
    { destination: 'Madeira, Portugal', activity: 'Cliffside Reset Retreat', teaser: 'guided journaling and Atlantic sunset yoga', basePrice: 124, baseRating: 4.7, imageSlug: 'madeira-reset' },
    { destination: 'Queenstown, New Zealand', activity: 'Alpine Recovery and Sauna Session', teaser: 'mountain-view saunas and deep stretch classes', basePrice: 128, baseRating: 4.7, imageSlug: 'queenstown-recovery' },
    { destination: 'Ljubljana, Slovenia', activity: 'Forest Spa and River Meditation', teaser: 'wellness trails and mindful urban nature', basePrice: 89, baseRating: 4.6, imageSlug: 'ljubljana-forestspa' },
    { destination: 'Fes, Morocco', activity: 'Traditional Hammam and Massage', teaser: 'steam rituals and argan oil treatments', basePrice: 83, baseRating: 4.6, imageSlug: 'fes-hammam' },
    { destination: 'Jeju, South Korea', activity: 'Volcanic Coast Healing Walk', teaser: 'slow movement routines near lava cliffs', basePrice: 97, baseRating: 4.6, imageSlug: 'jeju-healing' },
    { destination: 'Canmore, Canada', activity: 'Mountain Calm Breath Retreat', teaser: 'guided pranayama with alpine lake views', basePrice: 119, baseRating: 4.7, imageSlug: 'canmore-breath' },
    { destination: 'Ninh Binh, Vietnam', activity: 'Mindful Rowing and Pagoda Day', teaser: 'river glides and contemplative temple stops', basePrice: 76, baseRating: 4.6, imageSlug: 'ninhbinh-mindful' },
    { destination: 'Santorini, Greece', activity: 'Sunset Yoga and Nutrition Coaching', teaser: 'caldera-view classes with local healthy cuisine', basePrice: 133, baseRating: 4.8, imageSlug: 'santorini-yoga' },
  ],
  Nature: [
    { destination: 'Serengeti, Tanzania', activity: 'Big Five Sunrise Safari', teaser: 'guided game drives across iconic migration routes', basePrice: 380, baseRating: 4.9, imageSlug: 'serengeti-safari' },
    { destination: 'Galapagos, Ecuador', activity: 'Wildlife Catamaran Expedition', teaser: 'marine iguanas, blue-footed boobies, and snorkel stops', basePrice: 520, baseRating: 4.9, imageSlug: 'galapagos-catamaran' },
    { destination: 'Yellowstone, United States', activity: 'Geyser Basin and Wolf Tracking', teaser: 'geothermal wonders and wildlife spotting', basePrice: 240, baseRating: 4.8, imageSlug: 'yellowstone-wildlife' },
    { destination: 'Borneo, Malaysia', activity: 'Rainforest Canopy and Orangutan Day', teaser: 'river cruises and conservation center visits', basePrice: 295, baseRating: 4.8, imageSlug: 'borneo-orangutan' },
    { destination: 'Svalbard, Norway', activity: 'Arctic Fjord Zodiac Cruise', teaser: 'glacier fronts, polar seabirds, and ice fields', basePrice: 610, baseRating: 4.9, imageSlug: 'svalbard-zodiac' },
    { destination: 'Patagonia, Chile', activity: 'Torres del Paine Nature Trek', teaser: 'granite peaks, guanacos, and glacial lakes', basePrice: 330, baseRating: 4.8, imageSlug: 'patagonia-trek' },
    { destination: 'Maui, United States', activity: 'Haleakala Crater Sunrise Ride', teaser: 'volcanic landscapes and cloud-sea vistas', basePrice: 210, baseRating: 4.7, imageSlug: 'maui-haleakala' },
    { destination: 'Komodo, Indonesia', activity: 'Dragon Island and Reef Snorkel', teaser: 'rare reptiles and coral-rich waters', basePrice: 310, baseRating: 4.8, imageSlug: 'komodo-snorkel' },
    { destination: 'Alberta, Canada', activity: 'Lake Louise and Moraine Valley', teaser: 'glacial lakes, pine forests, and scenic viewpoints', basePrice: 205, baseRating: 4.7, imageSlug: 'alberta-lakes' },
    { destination: 'Azores, Portugal', activity: 'Whale Watching and Volcanic Coast', teaser: 'pelagic species sightings and basalt cliffs', basePrice: 225, baseRating: 4.8, imageSlug: 'azores-whales' },
    { destination: 'Masai Mara, Kenya', activity: 'Migration Season Jeep Safari', teaser: 'savanna crossings and predator observation', basePrice: 395, baseRating: 4.9, imageSlug: 'masaimara-migration' },
    { destination: 'Mindo, Ecuador', activity: 'Cloud Forest Birding Walk', teaser: 'hummingbird hotspots and waterfall trails', basePrice: 135, baseRating: 4.7, imageSlug: 'mindo-birding' },
    { destination: 'Lofoten, Norway', activity: 'Midnight Sun Coastal Hike', teaser: 'dramatic peaks and Arctic shoreline panoramas', basePrice: 245, baseRating: 4.8, imageSlug: 'lofoten-hike' },
    { destination: 'Iguazu, Argentina', activity: 'Waterfall Circuit and Jungle Train', teaser: 'multi-tier cascades and subtropical fauna', basePrice: 190, baseRating: 4.7, imageSlug: 'iguazu-circuit' },
    { destination: 'Namib Desert, Namibia', activity: 'Dune Sunrise and Desert Ecology', teaser: 'towering dunes and adapted wildlife tracking', basePrice: 275, baseRating: 4.8, imageSlug: 'namib-dunes' },
    { destination: 'Tromso, Norway', activity: 'Northern Lights and Fjord Nature Night', teaser: 'aurora chases and Arctic nature interpretation', basePrice: 260, baseRating: 4.8, imageSlug: 'tromso-aurora' },
    { destination: 'Raja Ampat, Indonesia', activity: 'Coral Triangle Snorkel Day', teaser: 'reef biodiversity and remote island scenery', basePrice: 340, baseRating: 4.9, imageSlug: 'rajaampat-snorkel' },
    { destination: 'Kruger, South Africa', activity: 'Bushveld Conservation Safari', teaser: 'ecology-led drives with anti-poaching insights', basePrice: 360, baseRating: 4.8, imageSlug: 'kruger-conservation' },
    { destination: 'Fiordland, New Zealand', activity: 'Milford Sound Nature Cruise', teaser: 'waterfalls, seals, and towering fjord walls', basePrice: 230, baseRating: 4.8, imageSlug: 'milford-cruise' },
    { destination: 'Bwindi, Uganda', activity: 'Gorilla Trekking Experience', teaser: 'guided rainforest trek to habituated families', basePrice: 650, baseRating: 4.9, imageSlug: 'bwindi-gorilla' },
  ],
};

const categoryTitlePrefix: Record<Experience['category'], string> = {
  Adventure: 'Aventura',
  Culture: 'Cultura',
  Food: 'Gastronomia',
  Wellness: 'Bienestar',
  Nature: 'Naturaleza',
};

const categoryImagePools: Record<Experience['category'], string[]> = {
  Adventure: [
    'https://images.unsplash.com/photo-1464822759844-d150ad6d7f54?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1520962880247-cfaf541c8724?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1473447198193-c7c1f7d2f549?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1465311530779-5241f5a29892?auto=format&fit=crop&w=1400&q=80',
  ],
  Culture: [
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1400&q=80',
  ],
  Food: [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=80',
  ],
  Wellness: [
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1400&q=80',
  ],
  Nature: [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
  ],
};

const activityImageOverrides: Partial<
  Record<Experience['category'], Partial<Record<number, string>>>
> = {
  Adventure: {
    0: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80',
    3: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1400&q=80',
    5: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1400&q=80',
    8: 'https://images.unsplash.com/photo-1458442310124-dde6edb43d10?auto=format&fit=crop&w=1400&q=80',
    10: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1400&q=80',
    13: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1400&q=80',
    15: 'https://images.unsplash.com/photo-1478860409698-8707f313ee8b?auto=format&fit=crop&w=1400&q=80',
    18: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1400&q=80',
  },
};

const buildTitle = (
  category: Experience['category'],
  seed: ExperienceSeed,
  seedIndex: number,
): string => {
  return `${categoryTitlePrefix[category]} ${seedIndex + 1} en ${seed.destination}`;
};

const buildDescription = (
  category: Experience['category'],
  seed: ExperienceSeed,
): string => {
  const templates: Record<Experience['category'], string> = {
    Adventure: `Vive una experiencia de aventura en ${seed.destination} con guias locales y recorridos emocionantes.`,
    Culture: `Descubre la riqueza cultural de ${seed.destination} con rutas historicas, arte y tradiciones locales.`,
    Food: `Disfruta los sabores de ${seed.destination} con degustaciones autenticas y propuestas culinarias destacadas.`,
    Wellness: `Recupera energia en ${seed.destination} con actividades de bienestar enfocadas en cuerpo y mente.`,
    Nature: `Explora paisajes naturales de ${seed.destination} con experiencias al aire libre y observacion de fauna.`,
  };

  return templates[category];
};

export const experiences: Experience[] = (Object.entries(experienceSeedsByCategory) as [
  Experience['category'],
  ExperienceSeed[],
][]).flatMap(([category, seeds], categoryIndex) =>
  seeds.map((seed, seedIndex) => {
    const id = `exp-${String(categoryIndex * 20 + seedIndex + 1).padStart(3, '0')}`;
    const priceAdjustment = (seedIndex % 4) * 7 + categoryIndex * 3;
    const ratingAdjustment = ((seedIndex + categoryIndex) % 3) * 0.05;
    const image =
      activityImageOverrides[category]?.[seedIndex] ??
      categoryImagePools[category][seedIndex % categoryImagePools[category].length];

    return {
      id,
      title: buildTitle(category, seed, seedIndex),
      description: buildDescription(category, seed),
      category,
      destination: seed.destination,
      price: seed.basePrice + priceAdjustment,
      rating: Number(Math.min(5, seed.baseRating + ratingAdjustment).toFixed(1)),
      image,
      imageUrl: image,
    };
  }),
);
