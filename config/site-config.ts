export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "equipment" | "project" | "mentor";
export type EquipmentItem = {
  title: string;
  link: string;
};

export interface GridItemsInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonSecondaryText?: string;
  buttonLink?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: string;
  /* Equipment */
  equipment?: EquipmentItem[];
  image?: string;
}

const GridItems: GridItemsInterface[] = [];

export const siteConfig = {
  creator: "Callum Newman",
  title: "Full-Stack Software Developer",
  bio: "Building Bespoke Websites and Making Games",
  location: "Brighton, UK",
  locationLink:
    "https://www.google.co.uk/maps/place/Brighton,+Brighton+and+Hove/@50.8374649,-0.1473891,13z/data=!3m1!4b1!4m6!3m5!1s0x48758509f6294167:0x9cc6af7a727d0ef9!8m2!3d50.8229402!4d-0.1362672!16zL20vMGQ2eXY?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D",
  email: "ballumnew@gmail.com",
  items: GridItems,
} as const;
