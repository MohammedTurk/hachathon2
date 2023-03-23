import React from "react";
import { Card } from "components";

function getItems(data) {
  return data.map((item, index) => {
    const isActive = index == 0;
    const isLastLine = index == data.length - 1;
    const lineStyle = isActive
      ? "border-[#4375FF] bg-[#4375FF]"
      : "border-gray-400 bg-gray-400";
    const pStyle = isActive ? "text-black" : "text-gray-400";
    return (
      <li key={index}>
        <div
          className={` flex flex-row gap-5  relative  capitalize text-xs  text-b font-semibold ${pStyle}`}
        >
          <time
            className={`  text-sm font-normal  text-gray-400 w-[80px] pb-2 `}
          >
            <p className={pStyle}>
              {new Date(item.createdAt).toLocaleTimeString("en-us", {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>
            <p className="text-xs">{getDayFormat(item.createdAt)}</p>
          </time>

          <div className="relative w-[20px] ">
            <div
              className={`absolute  h-full w-[2px] top-[6px] left-1/2 -translate-x-1/2 ${lineStyle} ${
                isLastLine && "hidden"
              }`}
            ></div>

            <div
              className={` absolute w-3 h-3 bg-gray-200 rounded-full  top-[4px] left-1/2 -translate-x-1/2   ${lineStyle}`}
            ></div>
          </div>

          <p>{item.status.replace("_", " ")}</p>
        </div>
      </li>
    );
  });
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

export const TimeLine = ({ date = [] }) => {
  return (
    <Card className="shadow-sm rounded-sm">
      <h4 className="mb-2">Timeline</h4>
      <ol className="  flex flex-col  ">{getItems(date)}</ol>
    </Card>
  );
};

export default TimeLine;
