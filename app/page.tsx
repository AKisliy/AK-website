import AboutSection from "@/components/home/about";
import MainPreview from "@/components/home/main-preview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col max-w-6xl w-full gap-16">
      <MainPreview />
      <AboutSection />
    </div>
  );
}
