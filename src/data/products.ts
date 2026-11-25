import { CategoryInfo, Product } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_tech_studio_1795110610123.jpg';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'Laptops',
    name: 'Laptops',
    description:
      'Lightweight everyday ultrabooks and enterprise notebooks for study, creative work, and productivity.',
    image: '/src/assets/images/prod_macbook_air_m3_1795110611472.jpg',
  },
  {
    id: 'Smartphones',
    name: 'Smartphones',
    description:
      'Flagship iOS and Android handsets with advanced camera systems, long battery life, and bright OLED displays.',
    image: '/src/assets/images/prod_iphone_16_1795110610354.jpg',
  },
  {
    id: 'Headphones & Audio',
    name: 'Headphones & Audio',
    description:
      'Active noise-cancelling over-ear headphones and compact wireless earbuds engineered for focus and travel.',
    image: '/src/assets/images/prod_sony_wh1000xm5_1795110610932.jpg',
  },
  {
    id: 'Smartwatches',
    name: 'Smartwatches',
    description:
      'Wearable health, sleep, and fitness companions offering crisp always-on displays and seamless notifications.',
    image: '/src/assets/images/prod_apple_watch_10_1795110610808.jpg',
  },
  {
    id: 'Tablets',
    name: 'Tablets',
    description:
      'Versatile portable canvases for note-taking, sketching, reading, and split-screen multitasking.',
    image: '/src/assets/images/prod_ipad_air_1795110610942.jpg',
  },
  {
    id: 'Gaming',
    name: 'Gaming',
    description:
      'Handheld OLED consoles and high-frame-rate living room systems built for immersive play.',
    image: '/src/assets/images/prod_ps5_slim_1795110611746.jpg',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'apple-macbook-air-m3',
    name: 'Apple MacBook Air M3',
    brand: 'Apple',
    category: 'Laptops',
    subType: 'Laptop',
    price: 1099,
    sampleRating: 4.9,
    recommendedRank: 1,
    shortDescription:
      'Silent fanless ultrabook with all-day battery life and a vivid Liquid Retina display.',
    fullDescription:
      'Designed for students, travellers, and everyday professionals, the MacBook Air M3 pairs silent fanless operation with strong single-core and multi-core efficiency inside a durable recycled aluminium enclosure.',
    image: '/src/assets/images/prod_macbook_air_m3_1795110611472.jpg',
    specs: {
      processor: 'Apple M3 (8-core CPU, 8/10-core GPU)',
      display: '13.6" Liquid Retina IPS (2560 × 1664, 500 nits)',
      memoryStorage: '16GB Unified Memory · 256GB SSD',
      battery: 'Up to 18 hours wireless web / video',
      connectivity: '2× Thunderbolt / USB 4, MagSafe 3, Wi-Fi 6E',
      weight: '1.24 kg',
    },
    keyFeatures: [
      'Silent fanless chassis with zero cooling noise',
      '1080p FaceTime HD camera with three-mic array',
      'Supports up to two external displays with lid closed',
      'MagSafe magnetic charging frees both USB-C ports',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'An easy-to-carry laptop that starts instantly, stays completely quiet, and easily lasts through a full day of classes or work without carrying a charger.',
        specTips: [
          {
            label: 'Apple M3 Chip',
            plainExplanation:
              'Acts like a fast, energy-saving engine so everyday apps, video calls, and photo edits open smoothly without slowing down.',
          },
          {
            label: '16GB Unified Memory',
            plainExplanation:
              'Gives you plenty of workspace to keep dozens of browser tabs, documents, and music running together comfortably.',
          },
          {
            label: '18-Hour Battery',
            plainExplanation:
              'Covers a typical full university or office day on a single overnight charge.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Balances portability and sustained battery efficiency better than most Windows ultrabooks in the £1,000–£1,200 bracket, though port selection is limited to two Thunderbolt ports.',
        highlights: [
          '16GB unified memory handles multitasking and light 4K video timelines smoothly',
          '500-nit P3 display offers crisp text rendering and accurate colours indoors',
          'Fanless thermal profile avoids noise during lectures or quiet study',
        ],
      },
      very_familiar: {
        summary:
          '3nm Apple Silicon SoC featuring hardware-accelerated ray tracing, AV1 decode engine, and 100GB/s memory bandwidth in an 11.3 mm unibody chassis.',
        technicalDetails: [
          {
            metric: 'SoC & Architecture',
            detail: 'TSMC 3nm M3 with 4P + 4E cores, 16-core Neural Engine, hardware media engine (H.264, HEVC, ProRes, AV1 decode)',
          },
          {
            metric: 'Display Pipeline',
            detail: '2560 × 1664 (224 ppi) IPS, Wide colour (P3), True Tone, dual external monitor support (6K + 5K clamshell)',
          },
          {
            metric: 'I/O & Wireless',
            detail: 'Dual USB4/Thunderbolt 3 (40Gb/s), 3.5mm high-impedance headphone jack, Wi-Fi 6E (802.11ax), Bluetooth 5.3',
          },
        ],
      },
    },
  },
  {
    id: 'apple-iphone-16',
    name: 'Apple iPhone 16',
    brand: 'Apple',
    category: 'Smartphones',
    subType: 'Smartphone',
    price: 799,
    sampleRating: 4.8,
    recommendedRank: 2,
    shortDescription:
      'Durable aerospace-grade smartphone with Action Button, Camera Control, and A18 performance.',
    fullDescription:
      'The iPhone 16 introduces tactile Camera Control, a customisable Action Button, and a 48MP Fusion camera system inside a colour-infused glass and aluminium body built for long-term software support.',
    image: '/src/assets/images/prod_iphone_16_1795110610354.jpg',
    specs: {
      processor: 'Apple A18 (6-core CPU, 5-core GPU)',
      display: '6.1" Super Retina XDR OLED (60Hz, 2000 nits peak)',
      memoryStorage: '8GB RAM · 128GB Storage',
      battery: 'Up to 22 hours video playback · USB-C & MagSafe',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, Ultra Wideband',
      weight: '170 g',
    },
    keyFeatures: [
      'Dedicated capacitive Camera Control button on the frame',
      '48MP main sensor with 2× optical-quality telephoto crop',
      'Ceramic Shield front glass and IP68 water resistance',
      'USB-C charging plus 25W MagSafe wireless support',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A dependable everyday phone that takes sharp photos automatically, resists splashes and drops well, and receives software updates for years.',
        specTips: [
          {
            label: '6.1" OLED Screen',
            plainExplanation:
              'Compact enough to hold in one hand while staying bright and easy to read outdoors in sunlight.',
          },
          {
            label: '48MP Fusion Camera',
            plainExplanation:
              'Captures clear photos in dim restaurants and lets you zoom in 2× without losing detail.',
          },
          {
            label: 'IP68 Water Resistance',
            plainExplanation:
              'Protects the phone against accidental rain showers and brief water spills.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Closes much of the gap with Pro models by adopting the A18 chip, Action Button, and macro photography, though the display remains 60Hz rather than 120Hz.',
        highlights: [
          'A18 chip brings console-grade efficiency and multi-year iOS longevity',
          'Wi-Fi 7 and USB-C simplify modern home and travel charging setups',
          'Spatial photo and video capture via vertical dual-lens layout',
        ],
      },
      very_familiar: {
        summary:
          'Second-gen 3nm A18 SoC with 16-core Neural Engine, upgraded thermal substructure for sustained GPU load, and 2556 × 1179 OLED panel at 460 ppi.',
        technicalDetails: [
          {
            metric: 'Chipset & Memory',
            detail: 'A18 (2P + 4E cores), 5-core GPU with hardware ray tracing, 8GB LPDDR5X for on-device ML workloads',
          },
          {
            metric: 'Camera Stack',
            detail: '48MP f/1.6 main (sensor-shift OIS) + 12MP f/2.2 ultrawide with AF macro capability; Photonic Engine',
          },
          {
            metric: 'RF & I/O',
            detail: 'Wi-Fi 7 (802.11be), Thread radio, 2nd-gen UWB, USB-C (USB 2.0 480Mb/s), Qi2 / 25W MagSafe',
          },
        ],
      },
    },
  },
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'Headphones & Audio',
    subType: 'Headphones',
    price: 299,
    sampleRating: 4.8,
    recommendedRank: 3,
    shortDescription:
      'Lightweight over-ear wireless headphones with industry-leading active noise cancellation.',
    fullDescription:
      'Engineered with eight microphones and dual noise-cancelling processors, the Sony WH-1000XM5 dramatically reduces commuter, aircraft, and café noise while offering 30 hours of battery life.',
    image: '/src/assets/images/prod_sony_wh1000xm5_1795110610932.jpg',
    specs: {
      processor: 'Integrated V1 + HD Noise Cancelling QN1',
      display: 'Touch capacitive right earcup controls',
      memoryStorage: 'Multipoint Bluetooth (2 devices simultaneous)',
      battery: 'Up to 30 hours ANC on · 3 min quick charge = 3 hrs',
      connectivity: 'Bluetooth 5.2 (SBC, AAC, LDAC), 3.5mm cable',
      weight: '250 g',
    },
    keyFeatures: [
      '8-microphone adaptive noise cancellation system',
      'Speak-to-Chat pauses music automatically when you talk',
      'Plush synthetic leather earpads for long study sessions',
      'Includes slim collapsible zip travel case',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'Comfortable over-ear headphones that quiet noisy trains, libraries, and flights at the press of a button, with a battery that lasts for days.',
        specTips: [
          {
            label: 'Active Noise Cancellation',
            plainExplanation:
              'Uses tiny built-in microphones to block out steady background hums like bus engines and chatter.',
          },
          {
            label: 'Multipoint Bluetooth',
            plainExplanation:
              'Lets you stay connected to both your laptop and phone at once so you never miss a call.',
          },
          {
            label: 'Quick Charging',
            plainExplanation:
              'A 3-minute plug-in with a USB-C cable gives roughly 3 hours of listening in an emergency.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'A benchmark value in noise cancellation at £299, offering lighter clamping force and clearer call microphones than older models, though the earcups do not fold flat into a tiny ball.',
        highlights: [
          'LDAC high-bitrate wireless support for compatible Android devices',
          'Customisable 5-band EQ inside the Sony Sound Connect app',
          'Wear-detection sensors automatically pause audio when removed',
        ],
      },
      very_familiar: {
        summary:
          'Dual-chip QN1 + V1 architecture driving 30mm carbon-fibre composite dome drivers with LDAC 990kbps transmission and 8-mic beamforming voice pickup.',
        technicalDetails: [
          {
            metric: 'Acoustic Architecture',
            detail: '30mm dynamic drivers with soft TPU edge and carbon-fibre composite dome; 4Hz–40kHz wired response',
          },
          {
            metric: 'ANC DSP',
            detail: 'QN1 + V1 tandem processing across 8 MEMS microphones with real-time barometric/auto optimiser',
          },
          {
            metric: 'Codecs & Power',
            detail: 'LDAC, AAC, SBC; USB-PD fast charge (3 min for ~180 min playback); 30h ANC / 40h ANC off',
          },
        ],
      },
    },
  },
  {
    id: 'ipad-air',
    name: 'iPad Air',
    brand: 'Apple',
    category: 'Tablets',
    subType: 'Tablet',
    price: 599,
    sampleRating: 4.8,
    recommendedRank: 4,
    shortDescription:
      'Thin, capable M2 tablet built for lecture notes, digital sketching, and travel.',
    fullDescription:
      'Bridging portability and laptop-grade speed, the iPad Air features a laminated Liquid Retina display, landscape stereo speakers, and support for Apple Pencil Pro and Magic Keyboard.',
    image: '/src/assets/images/prod_ipad_air_1795110610942.jpg',
    specs: {
      processor: 'Apple M2 (8-core CPU, 9-core GPU)',
      display: '11" Liquid Retina IPS (2360 × 1640, 500 nits)',
      memoryStorage: '8GB RAM · 128GB Storage',
      battery: 'Up to 10 hours web / video on Wi-Fi',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.3, USB-C (10Gb/s)',
      weight: '462 g',
    },
    keyFeatures: [
      'Landscape 12MP Ultra Wide front camera with Center Stage',
      'Anti-reflective laminated display with P3 wide colour',
      'Compatible with Apple Pencil Pro hover & squeeze gestures',
      'Touch ID integrated smoothly into the top power button',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A light digital notebook and entertainment screen that turns into a compact mini-computer whenever you snap on a keyboard or pick up a stylus.',
        specTips: [
          {
            label: '11" Laminated Screen',
            plainExplanation:
              'There is no visible gap under the glass, so writing with a digital pen feels natural like paper.',
          },
          {
            label: 'Center Stage Camera',
            plainExplanation:
              'Placed on the long edge so you look straight ahead during video calls, gently keeping you centred.',
          },
          {
            label: '128GB Base Storage',
            plainExplanation:
              'Double the older entry storage, giving plenty of room for lecture PDFs, apps, and downloaded films.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Hits the sweet spot in the tablet lineup: M2 performance and 128GB base storage without paying Pro pricing, missing only Face ID and a 120Hz OLED screen.',
        highlights: [
          '10Gb/s USB-C port supports external SSDs and 6K external monitors',
          'M2 chip handles multi-layer Procreate canvases and split-screen research',
          'Touch ID power button keeps bezels slim and unlock reliable',
        ],
      },
      very_familiar: {
        summary:
          '5nm M2 SoC with 100GB/s unified bandwidth paired with a 264 ppi sRGB/DCI-P3 IPS panel and USB 3.1 Gen 2 Type-C display output.',
        technicalDetails: [
          {
            metric: 'Compute & Memory',
            detail: 'M2 (4P + 4E cores, 9-core GPU, 16-core Neural Engine), 8GB LPDDR5, 128GB NAND',
          },
          {
            metric: 'Display & Stylus',
            detail: '2360 × 1640 IPS @ 60Hz, 1.8% reflectivity coating, Apple Pencil hover detection (12mm)',
          },
          {
            metric: 'Connectivity',
            detail: '2×2 MIMO Wi-Fi 6E, Bluetooth 5.3, USB-C 10Gb/s with DisplayPort Alt Mode up to 6K@60Hz',
          },
        ],
      },
    },
  },
  {
    id: 'samsung-galaxy-s25',
    name: 'Samsung Galaxy S25',
    brand: 'Samsung',
    category: 'Smartphones',
    subType: 'Smartphone',
    price: 859,
    sampleRating: 4.8,
    recommendedRank: 5,
    shortDescription:
      'Compact flagship Android handset with a 120Hz AMOLED screen and triple rear cameras.',
    fullDescription:
      'Built around a bright adaptive 120Hz Dynamic AMOLED 2X display and a custom Snapdragon processor, the Galaxy S25 delivers flagship speed, versatile 3× optical zoom, and seven years of OS updates.',
    image: '/src/assets/images/prod_galaxy_s25_1795110610951.jpg',
    specs: {
      processor: 'Snapdragon 8 Elite for Galaxy',
      display: '6.2" Dynamic AMOLED 2X (1–120Hz, 2600 nits)',
      memoryStorage: '12GB RAM · 128GB UFS 4.0',
      battery: '4,000 mAh · 25W wired & 15W wireless',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, USB-C 3.2',
      weight: '162 g',
    },
    keyFeatures: [
      'Ultra-smooth 1–120Hz adaptive AMOLED display',
      'Triple camera array with dedicated 3× optical telephoto lens',
      'Featherweight 162 g Armor Aluminum frame',
      '7 generations of Android OS and security updates',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A pocket-friendly Android phone with an extra-smooth screen and a dedicated zoom lens for clear shots from across a room or concert.',
        specTips: [
          {
            label: '120Hz AMOLED Display',
            plainExplanation:
              'Refreshes twice as fast as standard screens so scrolling feeds and reading articles looks silky smooth.',
          },
          {
            label: '3× Telephoto Lens',
            plainExplanation:
              'Uses real glass magnification to zoom in on distant subjects without making photos blurry.',
          },
          {
            label: '7 Years of Updates',
            plainExplanation:
              'Keeps the phone safe and up to date well into the next decade.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Stands out for offering 12GB RAM, a 120Hz LTPO screen, and a true 3× telephoto camera in a 162 g chassis lighter than nearly every rival flagship.',
        highlights: [
          '2600-nit peak brightness ensures effortless outdoor legibility',
          'Samsung DeX turns the phone into a desktop interface over USB-C',
          'Ultrasonic under-display fingerprint scanner works reliably even with damp hands',
        ],
      },
      very_familiar: {
        summary:
          '3nm Snapdragon 8 Elite Oryon architecture paired with 12GB LPDDR5X RAM, LTPO 1–120Hz panel, and USB 3.2 Gen 1 DisplayPort support.',
        technicalDetails: [
          {
            metric: 'SoC & RAM',
            detail: 'Qualcomm Snapdragon 8 Elite for Galaxy (3nm), Adreno GPU, 12GB LPDDR5X, 128GB storage',
          },
          {
            metric: 'Optics',
            detail: '50MP f/1.8 OIS main + 12MP f/2.2 ultrawide + 10MP f/2.4 3× optical telephoto (OIS)',
          },
          {
            metric: 'Biometrics & I/O',
            detail: 'Qualcomm 3D Sonic ultrasonic fingerprint, IP68, Wi-Fi 7, Bluetooth 5.4, USB-C 3.2 (5Gb/s)',
          },
        ],
      },
    },
  },
  {
    id: 'dell-xps-13',
    name: 'Dell XPS 13',
    brand: 'Dell',
    category: 'Laptops',
    subType: 'Laptop',
    price: 1199,
    sampleRating: 4.7,
    recommendedRank: 6,
    shortDescription:
      'CNC-machined Windows ultrabook featuring virtually borderless InfinityEdge visuals.',
    fullDescription:
      'Crafted from machined aluminium and Gorilla Glass 3, the Dell XPS 13 combines compact footprints with Core Ultra efficiency, crisp anti-reflective visuals, and dependable Windows 11 Pro portability.',
    image: '/src/assets/images/prod_dell_xps_13_1795110609870.jpg',
    specs: {
      processor: 'Intel Core Ultra 7 (Series 2, 8-core)',
      display: '13.4" FHD+ InfinityEdge (1920 × 1200, 120Hz)',
      memoryStorage: '16GB LPDDR5x · 512GB PCIe 4.0 SSD',
      battery: '55Wh · Up to 16 hours local productivity',
      connectivity: '2× Thunderbolt 4, Wi-Fi 7, Bluetooth 5.4',
      weight: '1.19 kg',
    },
    keyFeatures: [
      'Machined aluminium chassis with seamless glass palm rest',
      '512GB fast SSD included as standard',
      '120Hz anti-glare 500-nit InfinityEdge screen',
      'Dual Thunderbolt 4 ports for single-cable docking',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A sleek Windows laptop with a big-feeling screen inside a tiny body, plus plenty of built-in storage for photos, apps, and university files.',
        specTips: [
          {
            label: '512GB SSD Storage',
            plainExplanation:
              'Provides twice the typical starter space so you rarely need to worry about running out of room.',
          },
          {
            label: 'InfinityEdge Screen',
            plainExplanation:
              'Shrunk borders around the display mean you get a spacious view without carrying a bulky bag.',
          },
          {
            label: '1.19 kg Weight',
            plainExplanation:
              'Lighter than many textbooks, making daily commuting effortless.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'A strong Windows counterpart to the MacBook Air, offering double the base storage (512GB) and a 120Hz screen, though its minimalist capacitive touch function row divides opinion.',
        highlights: [
          'Intel Core Ultra Series 2 significantly improves battery endurance over prior XPS generations',
          'Wi-Fi 7 readiness ensures multi-year wireless compatibility',
          '500-nit matte-finish display reduces harsh overhead classroom glare',
        ],
      },
      very_familiar: {
        summary:
          'Lunar Lake / Core Ultra Series 2 SoC integrating on-package 16GB LPDDR5x-8533 memory, Xe2 graphics, and dual 40Gb/s Thunderbolt 4 controllers.',
        technicalDetails: [
          {
            metric: 'Platform & Storage',
            detail: 'Intel Core Ultra 7 (8 cores: 4P + 4LPE), Arc Xe2 iGPU, 47 TOPS NPU, 512GB M.2 2230/2280 NVMe PCIe Gen4',
          },
          {
            metric: 'Panel Specs',
            detail: '13.4" 16:10 1920 × 1200 IPS, 30–120Hz VRR, 500 nits, 100% sRGB, Eyesafe low blue light',
          },
          {
            metric: 'I/O & Chassis',
            detail: '2× Thunderbolt 4 (USB-C PD + DP 2.1), Killer Wi-Fi 7 BE1750, CNC 6000-series aluminium, 1.19 kg',
          },
        ],
      },
    },
  },
  {
    id: 'apple-watch-series-10',
    name: 'Apple Watch Series 10',
    brand: 'Apple',
    category: 'Smartwatches',
    subType: 'Smartwatch',
    price: 399,
    sampleRating: 4.8,
    recommendedRank: 7,
    shortDescription:
      'Thinner, brighter wide-angle OLED smartwatch with comprehensive health and swim tracking.',
    fullDescription:
      'Featuring Apple’s largest and slimmest wearable display, Series 10 tracks heart rate, sleep stages, workouts, and water depth while charging from 0 to 80% in about 30 minutes.',
    image: '/src/assets/images/prod_apple_watch_10_1795110610808.jpg',
    specs: {
      processor: 'Apple S10 SiP (Dual-core 64-bit)',
      display: '42mm/46mm Wide-angle LTPO3 OLED (2000 nits)',
      memoryStorage: '64GB internal storage',
      battery: '18 hours normal / 36 hours Low Power · Fast charge',
      connectivity: 'Wi-Fi, Bluetooth 5.3, GPS, UWB Gen 2',
      weight: '30 g (42mm Aluminium case)',
    },
    keyFeatures: [
      'Wide-angle OLED remains easy to read at off-centre glances',
      'Sleep apnoea notifications and overnight vitals tracking',
      'Depth gauge and water temperature sensor (50m WR)',
      'Fast charging reaches 80% in ~30 minutes',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A comfortable everyday watch for iPhone users that tracks steps, workouts, sleep, and heart rate—and tops up quickly while you get ready in the morning.',
        specTips: [
          {
            label: 'Wide-Angle OLED',
            plainExplanation:
              'Makes it easy to check the time or a message with a subtle glance without twisting your wrist.',
          },
          {
            label: '30-Minute Fast Charge',
            plainExplanation:
              'Makes wearing it overnight for sleep tracking practical because a brief morning charge fills it up.',
          },
          {
            label: 'iPhone Requirement',
            plainExplanation:
              'Works exclusively with Apple iPhones (requires iPhone Xs or newer).',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Noticeably slimmer at 9.7 mm with faster charging and water-temp sensors, making it the most versatile Apple Watch unless you specifically need multi-day Ultra battery endurance.',
        highlights: [
          'LTPO3 display refreshes once per second in always-on mode for live ticking hands',
          'Precision Finding guides you directly to a misplaced iPhone',
          'On-device Siri handles timers and workout starts without waiting for cloud data',
        ],
      },
      very_familiar: {
        summary:
          'S10 SiP with 4-core Neural Engine driving an LTPO3 1Hz-capable wide-angle OLED (40% brighter at off-axis angles) and integrated depth/temp transducers.',
        technicalDetails: [
          {
            metric: 'Sensor Suite',
            detail: '3rd-gen optical heart sensor, electrical ECG, wrist temp, accelerometer (256G), depth gauge (6m), water temp',
          },
          {
            metric: 'Display & Chassis',
            detail: '9.7mm profile, LTPO3 OLED (up to 2000 nits, down to 1 nit), 64GB flash, 50m WR + IP6X dust',
          },
          {
            metric: 'Connectivity',
            detail: 'L1 GPS/GNSS, 2nd-gen UWB, Wi-Fi 4 (2.4/5GHz), Bluetooth 5.3, NFC Apple Pay',
          },
        ],
      },
    },
  },
  {
    id: 'google-pixel-9',
    name: 'Google Pixel 9',
    brand: 'Google',
    category: 'Smartphones',
    subType: 'Smartphone',
    price: 699,
    sampleRating: 4.7,
    recommendedRank: 8,
    shortDescription:
      'Clean Android flagship renowned for effortless point-and-shoot photography and 7-year updates.',
    fullDescription:
      'With a refined satin-matte frame, bright Actua OLED screen, and Google’s Tensor G4 processor, the Pixel 9 focuses on reliable real-world photography, clean software, and long-term security.',
    image: '/src/assets/images/prod_pixel_9_1795110611233.jpg',
    specs: {
      processor: 'Google Tensor G4 + Titan M2 security',
      display: '6.3" Actua OLED (60–120Hz, 2700 nits peak)',
      memoryStorage: '12GB RAM · 128GB Storage',
      battery: '4,700 mAh · 24+ hour typical life',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, USB-C 3.2',
      weight: '198 g',
    },
    keyFeatures: [
      '50MP Octa PD main + 48MP ultrawide macro camera',
      'Clean Android experience with zero bloatware',
      'Large 4,700 mAh battery inside a 6.3" body',
      '7 years of OS, Pixel Drops, and security updates',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A straightforward Android phone built to take great photos on the first try—even of moving pets or night scenes—without cluttered menus.',
        specTips: [
          {
            label: '50MP + 48MP Cameras',
            plainExplanation:
              'Automatically balances bright skies and dark shadows so everyday photos look balanced right away.',
          },
          {
            label: 'Clean Android Software',
            plainExplanation:
              'No duplicate apps or confusing extra menus—everything is clear and easy to navigate.',
          },
          {
            label: '4,700 mAh Battery',
            plainExplanation:
              'Comfortably gets through a busy day of maps, messages, and photos.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Undercuts Samsung and Apple at £699 while matching them on 12GB RAM, 120Hz brightness, and 7-year updates; trades a dedicated telephoto lens for an upgraded 48MP ultrawide.',
        highlights: [
          'Upgraded ultrasonic fingerprint reader is significantly faster than older Pixels',
          'Tensor G4 prioritises camera ISP and voice transcription efficiency over peak gaming scores',
          'Gorilla Glass Victus 2 front and back adds strong scratch resilience',
        ],
      },
      very_familiar: {
        summary:
          'Tensor G4 (Exynos-derived 4nm with Cortex-X4 prime core) paired with 12GB LPDDR5X, upgraded Samsung 5400 modem, and 2424 × 1080 2700-nit Actua OLED.',
        technicalDetails: [
          {
            metric: 'SoC & Modem',
            detail: 'Tensor G4 (1× X4 @ 3.1GHz, 3× A720, 4× A520), Titan M2 enclave, Exynos 5400 5G modem',
          },
          {
            metric: 'Camera Sensors',
            detail: '50MP 1/1.31" Samsung GNK f/1.68 OIS + 48MP 1/2.55" ultrawide f/1.7 (Macro Focus)',
          },
          {
            metric: 'Power & Display',
            detail: '4,700mAh typ (27W PD3.0 PPS wired), 60–120Hz OLED (1800 nits HDR / 2700 peak), USB 3.2',
          },
        ],
      },
    },
  },
  {
    id: 'bose-quietcomfort-ultra',
    name: 'Bose QuietComfort Ultra',
    brand: 'Bose',
    category: 'Headphones & Audio',
    subType: 'Headphones',
    price: 399,
    sampleRating: 4.8,
    recommendedRank: 9,
    shortDescription:
      'Ultra-plush spatial-audio headphones with CustomTune sound calibration and folding hinges.',
    fullDescription:
      'Designed around all-day comfort and deeply quiet isolation, the Bose QuietComfort Ultra measures the shape of your ear canal on power-up to tailor both sound and noise cancellation.',
    image: '/src/assets/images/prod_bose_qc_ultra_1795110610561.jpg',
    specs: {
      processor: 'CustomTune acoustic calibration DSP',
      display: 'Physical multifunction button + capacitive volume strip',
      memoryStorage: 'Multipoint Bluetooth + Snapdragon Sound',
      battery: 'Up to 24 hours (18h with Immersive Audio)',
      connectivity: 'Bluetooth 5.3 (aptX Adaptive, AAC, SBC), 2.5mm–3.5mm',
      weight: '254 g',
    },
    keyFeatures: [
      'CustomTune calibrates audio to each listener’s ear geometry',
      'Fold-flat hinges fit into a very compact hard travel case',
      'Tactile physical controls alongside smooth volume slider',
      'Immersive Spatial Audio mode for films and stereo music',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'Among the softest, easiest-to-pack travel headphones available—they fold neatly into small bags and adjust their sound automatically when you put them on.',
        specTips: [
          {
            label: 'Folding Design',
            plainExplanation:
              'Ear cups fold inward neatly so the case takes up less space in a backpack or carry-on.',
          },
          {
            label: 'CustomTune Calibration',
            plainExplanation:
              'Plays a quick gentle chime when powered on to adjust sound cleanly for your ears.',
          },
          {
            label: 'Physical Buttons',
            plainExplanation:
              'Easy-to-feel buttons prevent accidental pauses when adjusting your headphones.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Costs £100 more than the Sony WH-1000XM5, justifying the premium with superior folding portability, plush earcup depth, and slightly stronger low-frequency ANC.',
        highlights: [
          'aptX Adaptive support delivers low-latency high-res audio on Snapdragon phones',
          'Aware Mode with ActiveSense softens sudden loud street sirens automatically',
          '24-hour battery is slightly shorter than Sony’s 30 hours, especially with Spatial Audio on',
        ],
      },
      very_familiar: {
        summary:
          'Qualcomm S5 Sound Platform supporting Snapdragon Sound / aptX Adaptive lossless-capable wireless transport, CustomTune ear-canal acoustic response measurement, and 6-mic ANC array.',
        technicalDetails: [
          {
            metric: 'Wireless & Codecs',
            detail: 'Bluetooth 5.3, aptX Adaptive (up to 24-bit/96kHz), AAC, SBC; Google Fast Pair & Multipoint',
          },
          {
            metric: 'Spatial & Calibration',
            detail: 'Bose Immersive Audio (Still & Motion head-tracking IMU) + CustomTune in-ear chime calibration',
          },
          {
            metric: 'Mechanical & Power',
            detail: '254g cast-aluminium yokes, folding hinges, USB-C charging (2.5h full, 15m = 2.5h), 24h standard ANC',
          },
        ],
      },
    },
  },
  {
    id: 'nintendo-switch-oled',
    name: 'Nintendo Switch OLED',
    brand: 'Nintendo',
    category: 'Gaming',
    subType: 'Gaming',
    price: 309,
    sampleRating: 4.8,
    recommendedRank: 10,
    shortDescription:
      'Versatile hybrid console with a vibrant 7-inch OLED screen for handheld or TV play.',
    fullDescription:
      'Play solo on the commute, prop up the wide adjustable kickstand for tabletop multiplayer, or drop the console into its wired-LAN dock for big-screen sessions on your television.',
    image: '/src/assets/images/prod_switch_oled_1795110610760.jpg',
    specs: {
      processor: 'NVIDIA Custom Tegra X1',
      display: '7.0" OLED Touchscreen (1280 × 720 handheld / 1080p TV)',
      memoryStorage: '64GB internal + microSDXC expansion',
      battery: '4.5 to 9 hours depending on game',
      connectivity: 'Wi-Fi, Bluetooth 4.1, Dock Ethernet LAN, HDMI',
      weight: '420 g (with Joy-Con attached)',
    },
    keyFeatures: [
      'High-contrast 7-inch OLED screen with slim bezels',
      'Wide sturdy metal kickstand for tabletop co-op play',
      'Dock includes built-in wired Ethernet port and HDMI out',
      'Detachable Joy-Con controllers support instant two-player fun',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A flexible family and solo games console that works both like a handheld tablet on the sofa and as a regular TV console with two built-in mini controllers.',
        specTips: [
          {
            label: '7-Inch OLED Screen',
            plainExplanation:
              'Delivers rich colours and deep blacks, making handheld games pop noticeably in dim rooms.',
          },
          {
            label: '3 Play Modes',
            plainExplanation:
              'Switch effortlessly between Handheld, Tabletop (with kickstand), and TV mode without restarting your game.',
          },
          {
            label: 'Detachable Joy-Cons',
            plainExplanation:
              'Slide off the two side controllers to share a two-player game right out of the box.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Ideal if you value Nintendo exclusive franchises and couch/portable versatility over raw 4K graphics power—far better screen, speakers, and kickstand than the base LCD Switch.',
        highlights: [
          '64GB internal storage doubles the original Switch and expands cheaply via microSD',
          'Dock includes RJ-45 Ethernet for steadier online multiplayer matches',
          'Supports Bluetooth headphones natively without an external dongle',
        ],
      },
      very_familiar: {
        summary:
          '20nm Mariko-revision Tegra X1+ paired with a 7.0" 720p rigid OLED panel, 4GB LPDDR4X, and 64GB eMMC storage inside a 3-mode docked/portable thermal envelope.',
        technicalDetails: [
          {
            metric: 'Compute & Memory',
            detail: 'NVIDIA Tegra X1+ (4× Cortex-A57, 256-core Maxwell GPU), 4GB LPDDR4X, 64GB eMMC + microSDXC',
          },
          {
            metric: 'Display & Output',
            detail: '7.0" 1280 × 720 OLED handheld; up to 1920 × 1080 @ 60fps via HDMI 1.4b dock',
          },
          {
            metric: 'Battery & I/O',
            detail: '4,310 mAh Li-ion (4.5–9h), USB-C PD, 3.5mm jack, Dock: 2× USB 2.0, HDMI, 1GbE LAN',
          },
        ],
      },
    },
  },
  {
    id: 'sony-playstation-5-slim',
    name: 'Sony PlayStation 5 Slim',
    brand: 'Sony',
    category: 'Gaming',
    subType: 'Gaming',
    price: 429,
    sampleRating: 4.9,
    recommendedRank: 11,
    shortDescription:
      'Slimmer 4K home console with 1TB ultra-fast SSD and DualSense haptic controller.',
    fullDescription:
      'Delivering near-instant game loading, ray-traced 4K visuals up to 120Hz, and tactile DualSense adaptive triggers, the PS5 Slim packs full current-generation console power into a 30% smaller footprint.',
    image: '/src/assets/images/prod_ps5_slim_1795110611746.jpg',
    specs: {
      processor: 'AMD Ryzen Zen 2 (8-core) + RDNA 2 GPU (10.28 TFLOPS)',
      display: 'HDMI 2.1 output up to 4K @ 120Hz / VRR',
      memoryStorage: '16GB GDDR6 · 1TB Custom NVMe SSD',
      battery: 'AC Mains · DualSense wireless USB-C controller',
      connectivity: 'Wi-Fi 6, Bluetooth 5.1, Gigabit Ethernet, 2× USB-C',
      weight: '2.6 kg (Digital) / 3.2 kg (Disc)',
    },
    keyFeatures: [
      '1TB custom high-speed SSD reduces loading screens to seconds',
      'DualSense adaptive triggers and precision haptic feedback',
      '30% smaller volume than original launch PS5',
      'Tempest 3D AudioTech spatial sound on headphones and TV',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A powerful home games console for your TV that loads games almost instantly and includes a controller that lets you feel different textures and tension.',
        specTips: [
          {
            label: '1TB Fast SSD',
            plainExplanation:
              'Stores roughly 12–18 big modern games at once and gets you straight into gameplay without long wait screens.',
          },
          {
            label: 'DualSense Controller',
            plainExplanation:
              'Vibrates with lifelike detail—from raindrops to gravel roads—and adjusts trigger resistance in games.',
          },
          {
            label: '4K & 120Hz Ready',
            plainExplanation:
              'Looks razor-sharp on modern 4K televisions and runs fast-paced games extra smoothly.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Offers identical performance to the launch PS5 in a noticeably trimmer chassis while bumping usable SSD space from 825GB to 1TB and adding front USB-C ports.',
        highlights: [
          'Internal M.2 NVMe slot lets you expand storage yourself in minutes',
          'Supports VRR (Variable Refresh Rate) and 1440p monitors over HDMI 2.1',
          'Optional attachable Ultra HD Blu-ray disc drive if bought as Digital Edition',
        ],
      },
      very_familiar: {
        summary:
          '7nm/6nm AMD Oberon APU (8C/16T Zen 2 @ 3.5GHz, 36 CU RDNA 2 @ 2.23GHz) paired with 16GB GDDR6 unified pool (448GB/s) and custom 12-channel NVMe controller (5.5GB/s raw).',
        technicalDetails: [
          {
            metric: 'APU & Memory',
            detail: 'Zen 2 8-core/16-thread + RDNA 2 36 CUs (10.28 TFLOPS), 16GB GDDR6 @ 256-bit bus (448GB/s)',
          },
          {
            metric: 'Storage Architecture',
            detail: '1TB custom NVMe SSD (5.5GB/s raw, ~8–9GB/s Kraken compressed) + user-accessible PCIe 4.0 M.2 bay',
          },
          {
            metric: 'Video & I/O',
            detail: 'HDMI 2.1 (48Gbps FRL, 4K120, VRR, ALLM), 2× front USB-C (10Gb/s + USB 2.0), 2× rear USB-A 10Gb/s, 1GbE',
          },
        ],
      },
    },
  },
  {
    id: 'apple-airpods-pro-2',
    name: 'Apple AirPods Pro 2',
    brand: 'Apple',
    category: 'Headphones & Audio',
    subType: 'Earbuds',
    price: 229,
    sampleRating: 4.9,
    recommendedRank: 12,
    shortDescription:
      'Pocket-sized wireless earbuds with strong noise cancellation, Adaptive Audio, and USB-C case.',
    fullDescription:
      'Powered by the Apple H2 chip, AirPods Pro (2nd Gen) combine quiet noise cancellation, natural Transparency mode, and Precision Finding in a pocketable IP54-rated USB-C MagSafe case.',
    image: '/src/assets/images/prod_airpods_pro_2_1795110611160.jpg',
    specs: {
      processor: 'Apple H2 headphone chip (+ U1 in case)',
      display: 'Touch-stem swipe volume & squeeze controls',
      memoryStorage: '4 silicone ear tip sizes (XS, S, M, L)',
      battery: '6 hrs earbuds · 30 hrs total with USB-C case',
      connectivity: 'Bluetooth 5.3, USB-C, MagSafe / Qi / Watch charger',
      weight: '5.3 g per earbud (50.8 g case)',
    },
    keyFeatures: [
      'Adaptive Audio blends Transparency and ANC dynamically',
      'Swipe on the stem to raise or lower volume smoothly',
      'Built-in speaker & U1 chip in case for Precision Finding',
      'IP54 dust, sweat, and water resistance (buds & case)',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'Tiny earbuds that slip into any jeans pocket, block noisy buses when you want peace, and let outside voices through naturally when someone speaks to you.',
        specTips: [
          {
            label: 'Adaptive Transparency',
            plainExplanation:
              'Lets you hear traffic and announcements clearly while toning down harsh sudden noises like sirens.',
          },
          {
            label: 'Find My Case Speaker',
            plainExplanation:
              'If the case slips down a sofa cushion, your iPhone can play a sound on the case and point right toward it.',
          },
          {
            label: '4 Ear Tip Sizes',
            plainExplanation:
              'Includes XS through L silicone tips so even smaller ears get a comfortable, secure seal.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'The easiest daily-carry audio option in the Apple ecosystem, offering seamless device switching, touch volume control, and surprisingly effective ANC for their tiny weight.',
        highlights: [
          'Conversation Awareness lowers media volume automatically when you start speaking',
          'Case charges via USB-C, MagSafe, or an Apple Watch puck',
          'Clinical-grade Hearing Aid and Hearing Test features supported on iOS',
        ],
      },
      very_familiar: {
        summary:
          'Custom high-excursion low-distortion driver + H2 DSP performing 48,000 noise-sampling cycles/sec with Personalized Spatial Audio and ultra-low-latency 5GHz lossless link for Vision Pro.',
        technicalDetails: [
          {
            metric: 'Acoustic & DSP',
            detail: 'Custom high-excursion driver + custom high-dynamic-range amplifier; H2 dual-core computational audio',
          },
          {
            metric: 'Ingress & Sensors',
            detail: 'IP54 earbuds and case, skin-detect sensor, speech-detecting accelerometer, force & capacitive stem sensors',
          },
          {
            metric: 'Case & Power',
            detail: '6h ANC listening (4.5h talk), 30h total via USB-C/MagSafe/U1 case; 5 min in case ≈ 1h listening',
          },
        ],
      },
    },
  },
  {
    id: 'samsung-galaxy-watch-7',
    name: 'Samsung Galaxy Watch 7',
    brand: 'Samsung',
    category: 'Smartwatches',
    subType: 'Smartwatch',
    price: 249,
    sampleRating: 4.6,
    recommendedRank: 13,
    shortDescription:
      'Lightweight circular Android smartwatch with dual-frequency GPS and BioActive health sensor.',
    fullDescription:
      'Combining a 3nm wearable processor with sapphire crystal protection and dual-frequency GPS, the Galaxy Watch 7 delivers responsive Wear OS performance and detailed sleep, heart, and body-composition metrics.',
    image: '/src/assets/images/prod_galaxy_watch_7_1795110610695.jpg',
    specs: {
      processor: 'Exynos W1000 (5-core, 3nm)',
      display: '1.3"/1.5" Super AMOLED Sapphire Crystal (2000 nits)',
      memoryStorage: '2GB RAM · 32GB internal storage',
      battery: 'Up to 40 hours (AOD off) · WPC wireless charge',
      connectivity: 'Dual-band GPS (L1+L5), Wi-Fi, Bluetooth 5.3, NFC',
      weight: '28.8 g (40mm) / 33.8 g (44mm)',
    },
    keyFeatures: [
      'Dual-frequency L1+L5 GPS tracks city runs accurately',
      'Sapphire crystal glass resists everyday scratches',
      'Energy Score summarises sleep, activity, and heart recovery',
      '32GB storage for offline Spotify & workout playlists',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A classic round watch for Android phones that tracks steps, sleep quality, and outdoor runs accurately—at a very approachable price.',
        specTips: [
          {
            label: 'Sapphire Crystal Glass',
            plainExplanation:
              'Extra-tough watch glass that stays clear even if you bump your wrist against desks or doorways.',
          },
          {
            label: 'Dual-Frequency GPS',
            plainExplanation:
              'Maps outdoor walks and runs accurately even between tall city buildings or under trees.',
          },
          {
            label: 'Android Compatible',
            plainExplanation:
              'Designed for Android phones (Android 11 or newer); not compatible with iPhone.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'At £249, the 3nm Exynos W1000 processor eliminates the sluggish UI stutter of older Wear OS watches while retaining Google Play apps, Google Wallet, and Samsung Health tracking.',
        highlights: [
          '13-LED BioActive sensor improves heart rate accuracy during high-intensity intervals',
          '32GB storage comfortably holds offline maps and music for phone-free runs',
          'Standard 20mm quick-release strap lugs allow affordable third-party bands',
        ],
      },
      very_familiar: {
        summary:
          'First 3nm Wear OS 5 platform (Exynos W1000: 1× Cortex-A78 + 4× Cortex-A55), 2GB RAM, 32GB eMMC, L1+L5 dual-band GNSS, and BIA bioelectrical impedance array.',
        technicalDetails: [
          {
            metric: 'SoC & OS',
            detail: 'Exynos W1000 (3nm GAA, 1× A78 @ 1.6GHz + 4× A55), 2GB RAM, 32GB storage, Wear OS 5 / One UI Watch 6',
          },
          {
            metric: 'Biometric Array',
            detail: 'Samsung BioActive (13-LED optical HR, ECG, BIA body composition, infrared skin temp)',
          },
          {
            metric: 'Durability & GNSS',
            detail: 'MIL-STD-810H, 5ATM + IP68, Sapphire Crystal (24GPa), L1+L5 dual-band GPS, NFC, 2.4/5GHz Wi-Fi',
          },
        ],
      },
    },
  },
  {
    id: 'samsung-galaxy-tab-s10',
    name: 'Samsung Galaxy Tab S10',
    brand: 'Samsung',
    category: 'Tablets',
    subType: 'Tablet',
    price: 799,
    sampleRating: 4.7,
    recommendedRank: 14,
    shortDescription:
      'Widescreen anti-reflective AMOLED Android tablet with S Pen included in the box.',
    fullDescription:
      'Built for split-screen study, media streaming, and DeX desktop multitasking, the Galaxy Tab S10 pairs a 120Hz anti-reflective Dynamic AMOLED 2X display with IP68 water resistance and an included low-latency S Pen.',
    image: '/src/assets/images/prod_galaxy_tab_s10_1795110610717.jpg',
    specs: {
      processor: 'MediaTek Dimensity 9300+ (Octa-core)',
      display: '12.4" Dynamic AMOLED 2X (2800 × 1752, 120Hz)',
      memoryStorage: '12GB RAM · 256GB + microSD slot',
      battery: '10,090 mAh · 45W Super Fast Charging',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.3, USB-C 3.2, microSD',
      weight: '571 g',
    },
    keyFeatures: [
      'Low-latency S Pen stylus included in the box at no extra cost',
      'Anti-reflective 120Hz AMOLED screen with deep blacks',
      'IP68 water & dust protection on both tablet and S Pen',
      'microSD card slot expands storage up to 1.5TB',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A large, colourful widescreen tablet that comes with its own digital pen right in the box—great for annotating slides, watching films, and splitting two apps side by side.',
        specTips: [
          {
            label: 'S Pen Included',
            plainExplanation:
              'Unlike many tablets, the stylus comes in the box ready for notes and drawing with no extra purchase needed.',
          },
          {
            label: 'Anti-Reflective AMOLED',
            plainExplanation:
              'Cuts down distracting ceiling glare while keeping films and textbooks vibrant.',
          },
          {
            label: 'microSD Expansion',
            plainExplanation:
              'Lets you pop in a tiny memory card later if you ever need extra space for videos or files.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Offers stronger value than initially obvious because 256GB storage, 12GB RAM, a 120Hz AMOLED screen, and the S Pen are all included in the £799 price.',
        highlights: [
          '16:10 widescreen aspect ratio suits side-by-side PDFs and widescreen cinema',
          'Samsung DeX mode switches apps into resizable desktop-style windows',
          'IP68 weather resistance is rare among large productivity tablets',
        ],
      },
      very_familiar: {
        summary:
          '4nm Dimensity 9300+ (all-big-core 1× X4 + 3× X4 + 4× A720) driving a 2800 × 1752 120Hz anti-reflective AMOLED panel, Wacom EMR S Pen (4,096 pressure levels), and microSD expansion.',
        technicalDetails: [
          {
            metric: 'SoC & Storage',
            detail: 'MediaTek Dimensity 9300+ (3.4GHz peak), Immortalis-G720 MC12, 12GB LPDDR5X, 256GB UFS + microSDXC',
          },
          {
            metric: 'Display & Stylus',
            detail: '12.4" 16:10 Dynamic AMOLED 2X (60–120Hz, anti-reflection coating), 2.8ms Wacom EMR S Pen (BLE gestures)',
          },
          {
            metric: 'Power & Protection',
            detail: '10,090mAh battery, 45W USB-PD, IP68 Armor Aluminum frame, USB 3.2 Gen 1 DP out, quad AKG speakers',
          },
        ],
      },
    },
  },
  {
    id: 'lenovo-thinkpad-x1-carbon',
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'Lenovo',
    category: 'Laptops',
    subType: 'Laptop',
    price: 1499,
    sampleRating: 4.9,
    recommendedRank: 15,
    shortDescription:
      'Featherweight carbon-fibre executive laptop with legendary keyboard tactile feel and full ports.',
    fullDescription:
      'Engineered to MIL-STD-810H durability standards in a 1.09 kg carbon-weave and magnesium chassis, the ThinkPad X1 Carbon delivers top-tier typing comfort, full-size HDMI/USB-A ports, and enterprise security.',
    image: '/src/assets/images/prod_thinkpad_x1_carbon_1795110611484.jpg',
    specs: {
      processor: 'Intel Core Ultra 7 vPro (12-core)',
      display: '14.0" 2.8K OLED Anti-Glare (120Hz, 400 nits)',
      memoryStorage: '32GB LPDDR5x · 1TB PCIe 4.0 SSD',
      battery: '57Wh · Up to 15 hours + Rapid Charge (80% in 1h)',
      connectivity: '2× Thunderbolt 4, 2× USB-A, HDMI 2.1, Wi-Fi 6E',
      weight: '1.09 kg',
    },
    keyFeatures: [
      'Only 1.09 kg with MIL-STD-810H tested carbon-fibre lid',
      'Full port selection: HDMI 2.1, 2× USB-A, 2× Thunderbolt 4',
      '32GB RAM & 1TB SSD for heavy engineering and data workloads',
      'Spill-resistant backlit ThinkPad keyboard with TrackPoint',
    ],
    knowledgeExplanations: {
      beginner: {
        summary:
          'A tough, ultra-light professional laptop with a remarkably comfortable keyboard and built-in ports so you never need dongles for projectors or USB sticks.',
        specTips: [
          {
            label: 'Full-Size Ports Built In',
            plainExplanation:
              'Plug straight into classroom HDMI projectors or standard USB flash drives without carrying adapters.',
          },
          {
            label: '32GB RAM & 1TB SSD',
            plainExplanation:
              'Extra-generous memory and storage so heavy spreadsheets, code, and thousands of files stay fast for years.',
          },
          {
            label: '1.09 kg Carbon Build',
            plainExplanation:
              'Even lighter than a 13-inch MacBook Air despite having a larger 14-inch screen.',
          },
        ],
      },
      somewhat_familiar: {
        summary:
          'Commands a £1,499 flagship price by doubling memory (32GB) and storage (1TB) over consumer ultrabooks while retaining legacy USB-A, full HDMI 2.1, and best-in-class keyboard ergonomics.',
        highlights: [
          'Spill-resistant 1.5mm travel keyboard excels for dissertation and code writing',
          'Anti-glare 14" 2.8K OLED combines deep contrast with reduced reflections',
          'Physical webcam privacy shutter and IR Windows Hello facial login',
        ],
      },
      very_familiar: {
        summary:
          'Carbon-fibre reinforced polymer + magnesium-alloy chassis weighing 1,090 g, equipping 32GB dual-channel LPDDR5x, 1TB Gen4 NVMe, dual Thunderbolt 4, and discrete dTPM 2.0 enterprise security.',
        technicalDetails: [
          {
            metric: 'Compute & Memory',
            detail: 'Intel Core Ultra 7 vPro, 32GB LPDDR5x-6400 soldered, 1TB M.2 2280 PCIe 4.0×4 Performance SSD',
          },
          {
            metric: 'Display & Chassis',
            detail: '14.0" 2880 × 1800 AGARAS OLED (120Hz VRR, 100% DCI-P3, Eyesafe), carbon weave + Mg alloy, MIL-STD-810H',
          },
          {
            metric: 'I/O & Enterprise',
            detail: '2× TB4, 2× USB-A 5Gb/s, HDMI 2.1 (4K60), 3.5mm combo, dTPM 2.0, Ultrasonic HPD, 57Wh Li-Po',
          },
        ],
      },
    },
  },
];
