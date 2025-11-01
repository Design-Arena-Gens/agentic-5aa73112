export type VideoCategory =
  | "Filmmaking"
  | "Documentary"
  | "Animation"
  | "Travel"
  | "Lifestyle"
  | "Technology"
  | "Nature"
  | "Education";

export type VideoResource = {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  categories: VideoCategory[];
  duration: string;
  resolution: string;
  released: string;
  views: string;
};

export const videoCatalog: VideoResource[] = [
  {
    id: "aurora-rush",
    title: "Aurora Rush",
    description:
      "Ride along with downhill longboarder Kira Holt as she chases the northern lights across Norway's fjords.",
    src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
    poster:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1560&q=80",
    categories: ["Travel", "Lifestyle", "Nature"],
    duration: "6:42",
    resolution: "4K",
    released: "April 2024",
    views: "1.2M",
  },
  {
    id: "tiny-giants",
    title: "Tiny Giants",
    description:
      "A macro-documentary that follows the hidden lives of insects that build entire civilizations under our feet.",
    src: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    poster:
      "https://images.unsplash.com/photo-1437623889155-075d40e2e59f?auto=format&fit=crop&w=1560&q=80",
    categories: ["Documentary", "Nature", "Education"],
    duration: "12:17",
    resolution: "8K",
    released: "January 2024",
    views: "824K",
  },
  {
    id: "pixel-tides",
    title: "Pixel Tides",
    description:
      "An experimental animation blending water simulations with hand-drawn frame-by-frame storytelling.",
    src: "https://storage.googleapis.com/coverr-main/mp4/Panther.mp4",
    poster:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1560&q=80",
    categories: ["Animation", "Technology"],
    duration: "9:03",
    resolution: "5K",
    released: "March 2024",
    views: "562K",
  },
  {
    id: "hypercities",
    title: "Hypercities",
    description:
      "A tech-travel hybrid exploring how megacities are reimagining movement, architecture, and sustainability.",
    src: "https://storage.googleapis.com/coverr-main/mp4/connected.mp4",
    poster:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1560&q=80",
    categories: ["Technology", "Documentary", "Travel"],
    duration: "18:21",
    resolution: "4K",
    released: "February 2024",
    views: "2.1M",
  },
  {
    id: "monochrome",
    title: "Monochrome",
    description:
      "A minimalist short about the interplay of light and shadow, shot entirely in historic Lisbon theatres.",
    src: "https://storage.googleapis.com/coverr-main/mp4/Night_City.mp4",
    poster:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1560&q=80",
    categories: ["Filmmaking", "Lifestyle"],
    duration: "4:56",
    resolution: "4K",
    released: "May 2024",
    views: "389K",
  },
  {
    id: "resonance",
    title: "Resonance",
    description:
      "A look at sonic artists translating seismic activity into immersive performance pieces.",
    src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
    poster:
      "https://images.unsplash.com/photo-1526481280695-3c469c0668d9?auto=format&fit=crop&w=1560&q=80",
    categories: ["Documentary", "Technology"],
    duration: "11:07",
    resolution: "6K",
    released: "December 2023",
    views: "943K",
  },
  {
    id: "daybreak",
    title: "Daybreak",
    description:
      "A travelogue following three strangers who meet at a mountaintop observatory during a meteor shower.",
    src: "https://storage.googleapis.com/coverr-main/mp4/connected.mp4",
    poster:
      "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1560&q=80",
    categories: ["Travel", "Lifestyle"],
    duration: "7:28",
    resolution: "4K",
    released: "July 2024",
    views: "1.8M",
  },
  {
    id: "frame-by-frame",
    title: "Frame by Frame",
    description:
      "A masterclass with animation director Sam Yao covering pre-production to post.",
    src: "https://storage.googleapis.com/coverr-main/mp4/Panther.mp4",
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1560&q=80",
    categories: ["Animation", "Education", "Filmmaking"],
    duration: "22:14",
    resolution: "1080p",
    released: "August 2024",
    views: "312K",
  },
];
