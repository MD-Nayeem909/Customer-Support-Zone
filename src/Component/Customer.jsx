import { use, useState } from "react";
import Container from "./Container";
import TaskStatus from "./TaskStatus";
import TaskResolved from "./TaskResolved";
import CustomerCard from "./CustomerCard";
import { toast } from "react-toastify";

const Customer = ({ fetchPromise, setInProgress, setResolved }) => {
  const [issues, setIssues] = useState(use(fetchPromise));
  const [status, setStatus] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const stateChange = function (cardId) {
    const updatedIssues = issues.filter((issue) => {
      return issue.id !== cardId;
    });
    setIssues(updatedIssues);
    setInProgress((prev) => prev + 1);
    setStatus((prev) => {
      const closedIssue = issues.find((issue) => issue.id === cardId);
      return [{ title: closedIssue.title, id: closedIssue.id }, ...prev];
    });
    toast.success("In-Progress");
  };
  const resolvedTask = function (cardId) {
    setStatus((prev) => {
      const updatedStatus = prev.filter((item) => item.id !== cardId);
      return updatedStatus;
    });
    setResolved((prev) => prev + 1);
    setInProgress((prev) => prev - 1);
    setCompletedTask((prev) => {
      const completedItem = status.find((item) => item.id === cardId);
      return [{ title: completedItem.title, id: completedItem.id }, ...prev];
    });
    toast.success("✔ Completed");
  };

  return (
    <Container>
      <div className="grid md:grid-cols-12 gap-6 mt-20">
        {/* left side */}
        <div className="mb-20 col-span-12 mx-auto lg:col-span-9 w-full">
          <div className="">
            <h1 className="font-semibold text-2xl mb-4 text-[#34485A]">
              Customer Tickets
            </h1>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              {issues.map((issue) => CustomerCard(issue, stateChange))}
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="space-y-4 rounded-[4px] col-span-12 mx-auto lg:col-span-3 mb-20 w-full">
          <TaskStatus data={status} resolvedTask={resolvedTask}></TaskStatus>
          <TaskResolved completedTask={completedTask}></TaskResolved>
        </div>
      </div>
    </Container>
  );
};

export default Customer;
