import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex gap-10 w-full h-full flex-1">
      {/* Left Side */}
      <div className="flex-1 p-6 h-full max-w-md">
        <div className="dark:bg-emerald-700 rounded-md h-full flex items-center justify-center items-center">
          Left Side
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
