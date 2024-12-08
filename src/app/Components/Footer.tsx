export default function Footer() {
  return (
    <>
      <div id="footer" className="pt-10 w-full h-auto flex flex-col md:flex-row bg-white shadow-md border-2 border-gray-500 mt-10">
        {/* Furniro Info Section */}
        <div className="w-full md:w-[400px] h-auto p-4 mx-auto md:mx-0">
          <h1 className="text-3xl font-bold">Furniro</h1>
          <p className="text-lg font-semibold pt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <p className="text-md font-medium pt-2 text-gray-300">FL 33134 USA</p>
        </div>

        {/* Links Section 1 */}
        <div className="w-full md:w-[150px] h-auto mt-6 md:mt-0 mx-auto md:mx-0">
          <h1 className="text-2xl font-semibold text-gray-300 pl-10 md:pl-0">Links</h1>
          <p className="text-xl pt-6 pl-10 md:pl-0">Home</p>
          <p className="text-xl pt-5 pl-10 md:pl-0">Shop</p>
          <p className="text-xl pt-5 pl-10 md:pl-0">About</p>
          <p className="text-xl pt-5 pl-10 md:pl-0">Contact</p>
        </div>

        {/* Links Section 2 */}
        <div className="w-full md:w-[250px] h-auto mt-6 md:mt-0 mx-auto md:mx-0">
          <h1 className="text-2xl font-semibold pl-10 md:pl-0 text-gray-300">Help</h1>
          <p className="text-xl pt-6 pl-10 md:pl-0">Payments Options</p>
          <p className="text-xl pt-5 pl-10 md:pl-0">Returns</p>
          <p className="text-xl pt-5 pl-10 md:pl-0">Privacy Policy</p>
        </div>

        {/* Subscribe Section */}
        <div className="w-full md:w-[400px] h-auto mt-6 md:mt-0 mx-auto md:mx-0 text-gray-300">
          <h1 className="text-2xl font-semibold pl-10 md:pl-0">Subscribe</h1>
          <div className="flex flex-col md:flex-row pt-6">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full md:w-[250px] mt-2 p-2 border border-gray-300 rounded mb-4 md:mb-0"
              placeholder="Email or Phone Number"
              required
            />
            <p className="pt-3 md:pl-3 text-xl font-semibold text-black">Subscribe</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full h-[40px] bg-black">
        <p className="text-white pl-4 sm:pl-8 md:pl-20 pt-2 text-lg text-center md:text-left">
          2023 Furniro All Rights Reserved
        </p>
      </div>
    </>
  );
}
