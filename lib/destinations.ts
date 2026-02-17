export type Destination = {
  id: string;
  categoryId: string;
  imageUrl: string;
  country: string;
  title: string;
  priceLabel: string;
  description: string;
  categoryLabel?: string;
  durationLabel?: string;
  rating?: number;
  overview?: string;
  highlights?: readonly string[];
  galleryImages?: readonly string[];
  itineraryDays?: readonly {
    dayLabel: string;
    title: string;
    description: string;
  }[];
};

export const DESTINATIONS: readonly Destination[] = [
  {
    id: "african-safari",
    categoryId: "adventure",
    imageUrl:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "Kenya & Tanzania",
    title: "African Safari",
    priceLabel: "$4,500",
    description:
      "Witness the majesty of the wild in luxury tented camps beneath endless African skies.",
    overview:
      "Embark on the adventure of a lifetime across the sweeping savannas of East Africa. Our luxury African Safari experience takes you deep into the heart of Kenya and Tanzania, where you will witness the awe-inspiring Great Migration, track the legendary Big Five, and immerse yourself in the raw beauty of the African wilderness. Stay in world-class tented camps that blend seamlessly with nature, offering unparalleled comfort amidst the wild.",
    categoryLabel: "Adventure",
    durationLabel: "7–14 Days",
    rating: 4.9,
    highlights: [
      "Great Migration viewing",
      "Big Five safari drives",
      "Luxury tented camps",
      "Maasai village visits",
      "Hot air balloon rides",
      "Sundowner experiences",
    ],
    galleryImages: [
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    itineraryDays: [
      {
        dayLabel: "Day 1",
        title: "Arrival in Nairobi",
        description:
          "Welcome to Kenya! Meet your guide and transfer to your luxury hotel.",
      },
      {
        dayLabel: "Day 2",
        title: "Maasai Mara",
        description:
          "Fly to the Maasai Mara for your first game drive in the afternoon.",
      },
      {
        dayLabel: "Day 3",
        title: "Full Safari Day",
        description:
          "Morning and afternoon game drives seeking the Big Five.",
      },
      {
        dayLabel: "Day 4",
        title: "Serengeti Crossing",
        description:
          "Cross into Tanzania and the endless plains of the Serengeti.",
      },
      {
        dayLabel: "Day 5",
        title: "Migration Viewing",
        description:
          "Track the Great Migration with expert Maasai guides.",
      },
      {
        dayLabel: "Day 6",
        title: "Ngorongoro Crater",
        description:
          "Descend into the world's largest intact volcanic caldera.",
      },
    ],
  },
  {
    id: "santorini-escape",
    categoryId: "romance",
    imageUrl:
      "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "Greece",
    title: "Santorini Escape",
    priceLabel: "$3,200",
    description:
      "Romance and breathtaking views in the Mediterranean, from cliffside sunsets to hidden coves.",
    categoryLabel: "Romance",
    durationLabel: "6–8 Days",
    rating: 4.8,
  },
  {
    id: "bali-retreat",
    categoryId: "wellness",
    imageUrl:
      "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "Indonesia",
    title: "Bali Retreat",
    priceLabel: "$2,800",
    description:
      "Serenity and spirituality in tropical paradise, nestled among lush rice terraces and temples.",
    categoryLabel: "Wellness",
    durationLabel: "6–10 Days",
    rating: 4.9,
  },
  {
    id: "amalfi-coast",
    categoryId: "beach",
    imageUrl:
      "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "Italy",
    title: "Amalfi Coast Getaway",
    priceLabel: "$3,900",
    description:
      "Sun-drenched cliffside towns, private boat days, and coastal Italian cuisine.",
    categoryLabel: "Beach",
    durationLabel: "5–7 Days",
    rating: 4.7,
  },
  {
    id: "kyoto-culture",
    categoryId: "cultural",
    imageUrl:
      "https://images.pexels.com/photos/208773/pexels-photo-208773.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "Japan",
    title: "Kyoto Cultural Escape",
    priceLabel: "$3,600",
    description:
      "Temple gardens, tea ceremonies, and centuries of tradition in Japan’s cultural heart.",
    categoryLabel: "Cultural",
    durationLabel: "6–9 Days",
    rating: 4.9,
  },
  {
    id: "maldives-overwater",
    categoryId: "beach",
    imageUrl:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "Maldives",
    title: "Maldives Overwater Escape",
    priceLabel: "$5,200",
    description:
      "Wake up above crystal-clear lagoons in an overwater villa, with private decks and endless ocean views.",
    categoryLabel: "Beach",
    durationLabel: "5–8 Days",
    rating: 4.9,
  },
  {
    id: "iceland-adventure",
    categoryId: "adventure",
    imageUrl:
      "https://images.pexels.com/photos/3732585/pexels-photo-3732585.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "Iceland",
    title: "Iceland Northern Lights",
    priceLabel: "$4,800",
    description:
      "Chase the Aurora Borealis, explore glaciers, and soak in geothermal lagoons under starlit skies.",
    categoryLabel: "Adventure",
    durationLabel: "5–9 Days",
    rating: 4.8,
  },
  {
    id: "paris-romance",
    categoryId: "romance",
    imageUrl:
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country: "France",
    title: "Paris Romantic Getaway",
    priceLabel: "$3,400",
    description:
      "Sunset Seine cruises, Michelin-star dining, and strolls past iconic Parisian landmarks.",
    categoryLabel: "Romance",
    durationLabel: "4–7 Days",
    rating: 4.7,
  },
] as const;

