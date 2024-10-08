export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // width x height
export type GridItemType = "social" | "equipment" | "project" | "mentor";
export type EquipmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
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
  stars?: number;
  /* Equipment */
  equipment?: EquipmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@makrdev",
    description:
      "My true passion is learning and sharing my knowledge, which is why I started creating Youtube videos about web development, startups, and marketing.",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@makrdev",
    buttonSecondaryText: "1.1K",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@makrdev",
    buttonTitle: "Join",
    buttonLink: "https://discord.com/invite/5aXRp49Q4h",
    buttonSecondaryText: "44",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@batuhanbilginn",
    buttonTitle: "Follow",
    buttonSecondaryText: "36",
    buttonLink: "https://github.com/batuhanbilginn",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Video Equipments",
    image: "/equipments-image.jpeg",
    equipment: [
      {
        title: "Sony A7III",
        link: "https://www.amazon.com/Sony-Full-frame-Mirrorless-Interchangeable-Lens-ILCE7M3K/dp/B07B45D8WV?&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=f91877e8350da1e43b161adac6e9a6d7&camp=1789&creative=9325",
      },
      {
        title: "Tamron 24-75mm Sony-E Mount",
        link: "https://www.amazon.com/s?k=tamron+24-75+f2.8+sony+e+mount&sprefix=tamron+24-75%252Caps%252C215&ref=nb_sb_ss_ts-doa-p_1_12&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7f90fb483df302e8131afea2f4cd89bb&camp=1789&creative=9325",
      },
      {
        title: "Thronmax Mdrill One Pro",
        link: "https://www.amazon.com/s?k=thronmax+mdrill+one+pro&sprefix=thronmax%252Caps%252C213&ref=nb_sb_ss_ts-doa-p_7_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=ffb6dc2e55c74508300d2c5eac250e1e&camp=1789&creative=9325",
      },
      {
        title: "Godox SL-60W",
        link: "https://www.amazon.com/s?k=godox+sl60&crid=2OZLC933LK7K0&sprefix=godox+sl60%252Caps%252C213&ref=nb_sb_noss_1&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=a9fcedfbfaff1bb1301c303a45055038&camp=1789&creative=9325",
      },
      {
        title: "Godox Umbrella Reflector Honeycom Grid",
        link: "https://www.amazon.com/Godox-Umbrella-Reflector-Honeycomb-Speedlight/dp/B07H91VH4M/ref=sr_1_19?crid=3UE8NBEUUB1PI&keywords=godox+sl60+softbox&qid=1687880313&sprefix=godox+sl60+%252Caps%252C207&sr=8-19&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=7cb2f6734c70d44a3491266b50eac29c&camp=1789&creative=9325",
      },
      {
        title: "Godox M1 RGB",
        link: "https://www.amazon.com/s?k=godox+m1+rgb&crid=2UBYBKYSIYMDW&sprefix=godox+m1+rg%252Caps%252C199&ref=nb_sb_noss_2&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=3da7371f710f9f4f6af4f5817acc728a&camp=1789&creative=9325",
      },
      {
        title: "Elgato Camlink 4K",
        link: "https://www.amazon.com/s?k=camlink+4k%252B&sprefix=Camlink+%252Caps%252C210&ref=nb_sb_ss_ts-doa-p_1_8&_encoding=UTF8&tag=makrdev-20&linkCode=ur2&linkId=c95eae861d4db5e1de4ebda68507fbda&camp=1789&creative=9325",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@makrdev",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/makrdev",
    buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "Full-stack Developer / I build AI applications and create video tutorials on Youtube.",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Next.js Mentorship",
    icon: "superpeer",
    promotion: "MAKRDEVFELLOWS",
    oldPrice: "$100",
    price: "$50",
    buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Supabase Mentorship",
    icon: "superpeer",
    promotion: "MAKRDEVFELLOWS",
    oldPrice: "$100",
    price: "$50",
    buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
  },
  {
    layout: "2x1",
    type: "project",
    title: "makrAI",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/batuhanbilginn/makr-ai",
    stars: 73,
  },
  {
    layout: "2x2",
    type: "social",
    title: "Full-stack Multilingual Blog with Next.js 13",
    username: "@batuhanbilginn",
    description:
      "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
    icon: "udemy",
    buttonTitle: "Enroll",
    buttonSecondaryText: "%90 OFF",
    buttonLink:
      "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  },
  {
    layout: "2x1",
    type: "project",
    title: "AI Blog Post Generator",
    icon: "github",
    stars: 19,
    color: "#070707",
    buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
  },
];

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