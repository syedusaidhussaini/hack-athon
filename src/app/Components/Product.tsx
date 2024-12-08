import Image from "next/image";
import dining from "@/app/Assets/dining.png";
import living from "@/app/Assets/living.png";
import bed from "@/app/Assets/bed.png";
import nor from "@/app/Assets/nor.png";
import formo from "@/app/Assets/formo.png";
import chormon from "@/app/Assets/chormon.png";
import gormon from "@/app/Assets/gormon.png";
import grif from "@/app/Assets/grif.png";
import mug from "@/app/Assets/mug.png";
import ping from "@/app/Assets/ping.png";
import pot from "@/app/Assets/pot.png";

export default function Product() {
  return (
    <>
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Browse The Range</h1>
        <p className="text-xl pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {[{ src: dining, label: "Dining" }, { src: living, label: "Living" }, { src: bed, label: "Bed Room" }].map(
          (item, index) => (
            <div
              key={index}
              className="w-[320px] h-[450px] transition ease-in-out duration-500 hover:scale-105 flex flex-col items-center"
            >
              <Image src={item.src} width={320} height={200} alt={item.label} />
              <h1 className="text-2xl font-bold pt-3">{item.label}</h1>
            </div>
          )
        )}
      </div>

      <div id="shop" className="text-center mt-20">
        <h1 className="text-5xl font-bold">Our Products</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-32 ">
        {[nor, gormon, chormon, formo].map((src, index) => (
          <div
            key={index}
            className=" w-[320px] h-[350px] transition ease-in-out duration-200 hover:scale-105"
          >
            <Image src={src} width={330} height={200} alt="product" />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-52">
        {[grif, mug, ping, pot].map((src, index) => (
          <div
            key={index}
            className="w-[320px] h-[350px] transition ease-in-out duration-200 hover:scale-105"
          >
            <Image src={src} width={320} height={200} alt="product" />
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-48 px-4 sm:px-6 md:px-10">
  <button className="border border-orange-400 text-xl h-[60px] w-[220px] sm:w-[250px] md:w-[300px] text-orange-300 transition ease-in-out duration-300 hover:bg-orange-400 hover:text-white hover:scale-105">
    Show More
  </button>
</div>

    </>
  );
}
