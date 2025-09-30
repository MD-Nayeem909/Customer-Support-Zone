import React from "react";

const CustomerCard = (issue, stateChange) => {
  const date = new Date(issue.createdAt);
  issue.createdAt = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div
      key={issue.id}
      onClick={() => stateChange(issue.id)}
      className="p-4 shadow bg-white"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-medium text-lg">{issue.title}</h2>
        <button
          className={`btn bg-[#B9F8CF] rounded-[400px] text-[#02A53B] ${
            issue.status === "Closed"
              ? "text-red-500 bg-red-100"
              : issue.status === "In Progress"
              ? "bg-[#F8F3B9] text-[#9C7700]"
              : "bg-[#B9F8CF]"
          }`}
        >
          <span
            className={`h-3 w-3 bg-[#02A53B] font-medium rounded-full ${
              issue.status === "Closed"
                ? "bg-red-500"
                : issue.status === "In Progress"
                ? "bg-yellow-500"
                : "bg-green-500"
            } `}
          ></span>
          {issue.status}
        </button>
      </div>
      <p className="mb-4 text-[#627382]">{issue.description}</p>
      <div className="flex flex-col lg:flex-row justify-between text-[14px] text-[#627382]">
        <div className="space-x-4 flex justify-between">
          <span className="font-medium">#{issue.id}</span>
          <span
            className={`font-medium text-[#F83044] text-[14px] ${
              issue.priority === "High"
                ? "text-red-500"
                : issue.priority === "Medium"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {issue.priority}
          </span>
        </div>
        <div className="space-x-4 flex justify-between">
          <span className="font-medium">{issue.customer}</span>
          <span className="flex items-center gap-2">
            <img src="/calendar.png" alt="" /> {issue.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
