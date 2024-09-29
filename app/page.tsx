import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site-config";
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
          <div className="">
            {/* Title */}
            <div className="text-primary text-xl font-semibold">
              {siteConfig.title}
            </div>
            {/* Full Name */}
            <h1 className="text-4xl font-bold mt-2">{siteConfig.creator}</h1>
            {/* Bio */}
            <p className="text-lg text-neutral-500 text-2xl">{siteConfig.bio}</p>
          </div>
          {/* Buttons */}

          {/* Footer */}
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 p-6 h-full w-full gap-10">
        <div className="dark:bg-emerald-700 rounded-md h-full flex items-center justify-center items-center">
          Right Side
        </div>
      </div>
    </main>
  );
}
