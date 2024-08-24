import React from "react";
import srv from "./ServiceData";
import ServiceList from "./ServiceList";
const Service = () => {
  return (
    <>
      <div className=" z-10 bg-black bg-img h-screen w-screen py-16 flex  justify-center text-white  ">
        <div className="bg-img h-screen w-screen fixed z-0"></div>
        <div className="flex items-center flex-col z-10">
          <h className="text-4xl text font-semibold text-red-500">
            My Services
          </h>
          <div class="my-14 grid grid-cols-1 sm:grid-cols-2 sm:px-7  md:px-7 lg:grid-cols-4 lg:px-7 gap-5">
            {srv.map((val) => {
              return (
                <ServiceList
                  key={val.key}
                  title={val.title}
                  src={val.src}
                  detail={val.detail}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
