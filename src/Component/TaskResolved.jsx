import React from "react";

const TaskResolved = ({ completedTask = [] }) => {
  return (
    <div className="space-y-4 rounded-[4px]">
      <h1 className="font-semibold text-2xl mb-4 text-[#34485A]">
        Resolved Task
      </h1>
      {completedTask.length ? (
        completedTask.map((item) => (
          <div
            id={item.id}
            key={item.id}
            className="p-4 bg-white text-center shadow"
          >
            <h2 className="font-medium text-left text-lg mb-4">{item.title}</h2>
            <div className="flex justify-between items-center">
              <span className="text-green-500">✔ Completed</span>
              <button className="btn">Click to remove</button>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 bg-white text-center shadow">
          <h2 className="font-medium text-lg mb-4">No resolved tasks yet.</h2>
        </div>
      )}
    </div>
  );
};

export default TaskResolved;
