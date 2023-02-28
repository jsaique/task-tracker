import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);

  return (
    <>
      <header className="inline-block pt-4 pl-6">
        <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-rose-600 mb-4">
          Task Tracker
        </h1>
        <p className="">Hello there!</p>
      </header>
      <div className="flex flex-row items-center pb-4 pl-6">
        <p className="">Click</p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p>to add a task</p>
      </div>
      {taskList.map((task, i) => (
        <>
          <p>{task.projectName}</p>
          <p>{task.taskDescription}</p>
        </>
      ))}
    </>
  );
}

export default App;
