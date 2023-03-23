import React from "react";
import { Card } from "components";

export const TimeLine = ({ data = [] }) => {
  let heightActiveLine = (1 / data.length) * 100;
  let heightNonActiveLine = ((data.length - 1) / data.length) * 100;
  if (data.length < 2) {
    heightActiveLine = "";
    heightNonActiveLine = "";
  }
  return (
    <Card className="shadow-sm rounded-sm">
      <h4 className="mb-2">Timeline</h4>
      <div className="">
        <div className="relative z-10 w-[70%]">
          <ol className="  flex flex-col  ">{getItems(data)}</ol>
          <div
            className={`absolute w-[2px]  bg-[#4375FF] top-[2px] left-[50%] -translate-x-1/2 -z-10`}
            style={{ height: `${heightActiveLine}%` }}
          ></div>
          <div
            className={` absolute  w-[2px] bg-gray-400 top-[2px] left-[50%] -translate-x-1/2 -z-20`}
            style={{ height: `${heightNonActiveLine}%` }}
          ></div>
        </div>
      </div>
    </Card>
  );
};

export default TimeLine;

function getItem(item, index, isActive) {
  const className = isActive
    ? "border-[#4375FF] bg-[#4375FF]"
    : "border-gray-400 bg-gray-400";
  const pStyle = isActive ? "text-black" : "text-gray-400";
  return (
    <li key={index}>
      <div
        className={` w-full flex flex-row justify-between relative  capitalize text-xs  text-b font-semibold pb-4  ${pStyle}`}
      >
        <time className={`  text-sm font-normal leading-none text-gray-400 `}>
          <p className={pStyle}>
            {new Date(item.createdAt).toLocaleTimeString("en-us", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
          <p className="text-xs">{getDayFormat(item.createdAt)}</p>
        </time>

        <div
          className={`absolute w-3 h-3 rounded-full    top-0 -translate-x-1/2 left-[50%]  border   ${className}`}
        ></div>
        <p>{item.status.replace("_", " ")}</p>
      </div>
    </li>
  );
}

function getItems(data) {
  return data.map((item, index) => getItem(item, index, index == 0));
}

function getDayFormat(time) {
  const mileSecond = new Date().getTime() - new Date(time).getTime();
  const day = Math.floor(mileSecond / (1000 * 3600 * 24));

  switch (day) {
    case 0:
      return "Today";
    case 1:
      return "Yesterday";
    default:
      return `${day} days ago`;
  }
}
