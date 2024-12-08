import Image from "next/image";
import one from "@/app/Assets/one.png";
import two from "@/app/Assets/two.png";
import imga from "@/app/Assets/imga.png";

export default function Inspire() {
  return (
    <>
      <div id="blog" className="w-full h-auto flex flex-col md:flex-row mt-20 px-4 sm:px-8 lg:px-10">
        {/* Text Section */}
        <div className="w-full md:w-[450px] h-auto mt-12 md:mt-48 mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">50 Beautiful rooms inspirations</h1>
          <p className="pt-4 text-lg md:text-xl">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you
          </p>
          <button className="text-lg md:text-xl font-semibold mt-6 bg-orange-400 w-[200px] md:w-[250px] text-white h-[50px] transition ease-in-out duration-500 hover:bg-orange-500 hover:scale-105 mx-auto md:mx-0">
            Explore More
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[400px] h-auto mt-12 md:mt-12 md:ml-10 transition ease-in-out duration-500 hover:scale-105 mx-auto">
          <Image src={one} width={400} height={300} alt="Room Inspiration 1" />
        </div>
        <div className="w-full md:w-[380px] h-auto mt-12 md:mt-12 md:ml-10 transition ease-in-out duration-500 hover:scale-105 mx-auto">
          <Image src={two} width={380} height={300} alt="Room Inspiration 2" />
        </div>
      </div>

      {/* Share your setup Section */}
      <div className="w-full mt-20 text-center">
        <div className="w-full md:w-[330px] mx-auto">
          <h1 className="text-lg md:text-xl pl-4 sm:pl-8 md:pl-12">Share your setup with</h1>
          <h1 className="text-3xl md:text-4xl font-bold pt-4 pl-4 md:pl-3">Funiro Furniture</h1>
        </div>
        <div className="w-full h-auto transition ease-in-out duration-500 hover:scale-105">
          <Image src={imga} width={1500} height={200} alt="Furniture Setup" className="w-full" />
        </div>
      </div>
    </>
  );
}
