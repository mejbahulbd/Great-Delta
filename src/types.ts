export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  details?: string[];
}

export interface FleetSpec {
  model: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  specs?: {
    label: string;
    value: string;
  }[];
}

export interface NetworkRegion {
  name: string;
  destinations: string[];
}

export interface StrategicItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TrackingResult {
  awbNumber: string;
  origin: string;
  destination: string;
  status: 'Booked' | 'Departed' | 'In Transit' | 'Arrived' | 'Delivered';
  flight: string;
  pieces: number;
  weight: string;
  date: string;
  timeline: {
    time: string;
    event: string;
    location: string;
    completed: boolean;
  }[];
}
