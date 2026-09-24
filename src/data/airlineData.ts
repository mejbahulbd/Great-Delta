import heroImage from '../assets/images/gda_official_747_photo_1790271063197.jpg';
import fleetImage from '../assets/images/gda_fleet_airborne_1790011331953.jpg';
import chairmanImage from '../assets/images/gda_chairman_1790011348715.jpg';
import parliamentImage from '../assets/images/bd_parliament_dusk_1790011379509.jpg';
import cargoLoadingImage from '../assets/images/gda_cargo_loading_1790011393914.jpg';
import { ServiceItem, NetworkRegion, StrategicItem } from '../types';

export const ASSET_IMAGES = {
  hero: heroImage,
  fleet: fleetImage,
  chairman: chairmanImage,
  parliament: parliamentImage,
  cargoLoading: cargoLoadingImage,
  
  // High quality Unsplash imagery precisely matched to the screenshot subjects
  generalFreight: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  ecommerce: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
  specialized: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
  temperatureControlled: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80',
  charterCargo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80',
  
  exportGrowth: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
  ecommerceGrowth: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  employment: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
  globalConnectivity: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  
  safetyBackground: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
  ctaCloudBackground: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1800&q=80',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'general-air-freight',
    title: 'General Air Freight',
    description: 'Commercial and industrial shipments.',
    image: ASSET_IMAGES.generalFreight,
    iconName: 'Package',
    details: [
      'Scheduled cargo capacity across intercontinental hubs',
      'Door-to-door, airport-to-airport, and hybrid transit solutions',
      'Priority express and standard consolidated freight options',
      'Full electronic tracking and customs document clearance support',
    ],
  },
  {
    id: 'ecommerce-logistics',
    title: 'E-Commerce Logistics',
    description: 'International fulfillment and cross-border trade.',
    image: ASSET_IMAGES.ecommerce,
    iconName: 'ShoppingCart',
    details: [
      'High-velocity parcel consolidation for cross-border e-commerce',
      'Dedicated bonded warehouse intake and rapid customs clearance',
      'Integrated API tracking for marketplace sellers and platforms',
      'Reverse logistics and return management handling',
    ],
  },
  {
    id: 'specialized-cargo',
    title: 'Specialized Cargo',
    description: 'Pharmaceuticals, electronics and high-value goods.',
    image: ASSET_IMAGES.specialized,
    iconName: 'Snowflake',
    details: [
      'High-value electronics and precision instrumentation protection',
      'Secure vault transport and chain-of-custody escorts',
      'Pharmaceutical GMP/GDP compliant air cargo procedures',
      'Dedicated handling protocol with specialized loading ramps',
    ],
  },
  {
    id: 'temperature-controlled',
    title: 'Temperature-Controlled & Dangerous Goods',
    description: 'Safe handling for sensitive and regulated cargo.',
    image: ASSET_IMAGES.temperatureControlled,
    iconName: 'Thermometer',
    details: [
      'Active and passive cold-chain containers (-20°C to +25°C)',
      'Certified IATA Dangerous Goods (DGR) handling and documentation',
      'Real-time data-logger monitoring throughout transit and layover',
      'Dedicated cold storage holding areas at key hubs',
    ],
  },
  {
    id: 'charter-cargo',
    title: 'Charter Cargo',
    description: 'Government, humanitarian and energy projects.',
    image: ASSET_IMAGES.charterCargo,
    iconName: 'Plane',
    details: [
      'Full and part-charter options on Boeing 747-400 freighter',
      'Rapid deployment for urgent humanitarian aid and disaster relief',
      'Oversized oil, gas, power plant, and defense equipment transport',
      'Flexible flight permits and worldwide landing clearance handling',
    ],
  },
];

export const NETWORK_REGIONS: NetworkRegion[] = [
  {
    name: 'Middle East',
    destinations: ['Dubai', 'Doha', 'Riyadh', 'Muscat'],
  },
  {
    name: 'Asia',
    destinations: ['Kuala Lumpur', 'Singapore', 'Bangkok', 'Guangzhou', 'Hong Kong'],
  },
  {
    name: 'Europe',
    destinations: ['London', 'Frankfurt', 'Istanbul', 'Moscow'],
  },
  {
    name: 'Africa',
    destinations: ['Nairobi', 'Addis Ababa', 'Cape Town'],
  },
];

export const STRATEGIC_ITEMS: StrategicItem[] = [
  {
    id: 'export-growth',
    title: 'Export Growth',
    description: 'Strengthening export supply chains and global freight access.',
    image: ASSET_IMAGES.exportGrowth,
  },
  {
    id: 'ecommerce-growth',
    title: 'E-Commerce Growth',
    description: 'Supporting cross-border e-commerce logistics.',
    image: ASSET_IMAGES.ecommerceGrowth,
  },
  {
    id: 'employment',
    title: 'Employment',
    description: 'Creating opportunities in aviation and logistics sectors.',
    image: ASSET_IMAGES.employment,
  },
  {
    id: 'global-connectivity',
    title: 'Global Connectivity',
    description: "Enhancing Bangladesh's connectivity with international markets.",
    image: ASSET_IMAGES.globalConnectivity,
  },
];
