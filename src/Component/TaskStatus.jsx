const TaskStatus = ({ data = [], resolvedTask }) => {
  return (
    <div className="space-y-4 rounded-[4px]">
      <h1 className="font-semibold text-2xl mb-4 text-[#34485A]">
        Task Status
      </h1>
      {data.length ? (
        data.map((item) => (
          <div
            id={item.id}
            key={item.id}
            className="p-4 bg-white text-center shadow"
          >
            <h2 className="font-medium text-left text-lg mb-4">{item.title}</h2>
            <button
              onClick={() => resolvedTask(item.id)}
              className="btn text-[1rem] w-full bg-[#02A53B] text-white"
            >
              Complete
            </button>
          </div>
        ))
      ) : (
        <div className="p-4 bg-white text-center shadow">
          <h2 className="font-medium text-lg mb-4">
            Select a ticket to add to Task Status
          </h2>
        </div>
      )}
    </div>
  );
};

export default TaskStatus;
