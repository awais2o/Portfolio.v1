import React from "react";

const ServiceList = (props) => {
  return (
    <>
      {" "}
      <div class="min-w-[220px] max-w-[270px] bg-orange-300 rounded-lg  flex flex-col items-center text-black  px-7 ">
        <img src={props.src} alt="..." />
        <h4 className="">{props.title}</h4>
        <p className="mt-5 text-xs py-2">{props.detail}</p>
      </div>
    </>
  );
};

export default ServiceList;
