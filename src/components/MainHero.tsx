import React from "react";

export const MainHero = () => {
  return (
    <div className="py-20" style={{ backgroundColor: "#FFF7F5" }}>
      <div className="flex justify-between items-center px-5 md:px-20">
        <div className="w-full lg:w-2/5">
          <h1 className="text-6xl font-bold">
            Let’s make your best trip ever!
          </h1>
          <div className="bg-white shadow-sm p-5 mt-5 rounded-lg">
            <input
              type="text"
              className="bg-gray-200 text-gray-700 py-3 px-3 w-full rounded focus:outline-none"
              placeholder="Search your destination"
            />
            <div className="flex my-4">
              <label htmlFor="" className="mr-5 text-gray-600">
                #beach
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #mountain
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #climb
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #dive
              </label>
            </div>
          </div>
        </div>
        <div className="w-2/5 hidden lg:block">
          <img
            src="/assets/image-header.png"
            alt=""
            className="block w-full right-0 object-cover"
            style={{ borderRadius: "0px 0px 0px 7rem" }}
          />
        </div>
      </div>
    </div>
  );
};
