import GridItem from "@/components/grid-item";
import MentorshipBox from "@/components/grid-items/mentorship-box";
import SocialBox from "@/components/grid-items/social-box";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-10 w-full h-full flex-1">
      {/* Left Side */}
      <div className="flex-1 p-8 h-full max-w-md">
        <div className=" flex-col rounded-md h-full flex space-y-6">
          {/* Avatar */}
          <Image
            src="/profilePic-modified.png"
            alt="Profile Picture"
            width="120"
            height="120"
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL="/profilePic-modified.png"
          />
          {/* Content Container */}
          <div className="">
            {/* Title */}
            <div className="text-primary text-xl font-semibold">
              {siteConfig.title}
            </div>
            {/* Full Name */}
            <h1 className="text-4xl font-bold mt-2">{siteConfig.creator}</h1>
            {/* Bio */}
            <p className="text-lg text-neutral-500">{siteConfig.bio}</p>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-6 justify-between">
            <a
              href={`${siteConfig.locationLink}`}
              className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
            >
              <MapPin size="14" />
              {siteConfig.location}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
            >
              <Mail size="14" />
              Contact Me
            </a>
          </div>
          {/* Footer */}
          <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6 text-xs flex items-center justify-between">
            <div className="text-neutral-500">
              Built by Callum Newman | 2023 DrunkenJellies-dev. All Rights
              Reserved
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 p-6 h-full w-full gap-10">
        {/* Grid Container */}
        <div className="w-full h-full grid grid-cols-4 auto-rows-[74px] gap-10 overflow-y-auto p-6">
          {/* Grid Items */}
          {siteConfig.items.map((item, index) => {
            return (
              <GridItem key={item.title + index} size={item.layout}>
                {item.type === "social" ? (
                  <SocialBox item={item} />
                ) : item.type === "mentor" ? (
                  <MentorshipBox item={item} />
                ) : (
                  <div>Not Yet Implemented</div>
                )}
              </GridItem>
            );
          })}
        </div>
      </div>
    </main>
  );
}
