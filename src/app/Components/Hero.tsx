import hero from "@/app/Assets/hero.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="home" className="w-full relative">
      <Image
        src={hero}
        alt="hero"
        layout="responsive"
        width={1550}
        height={300}
        className="object-cover"
        priority // Optimizes loading for the hero image
      />
    </div>
  );
}
