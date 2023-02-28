import { useState } from "react";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";

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
      <div>
        <h2 className="text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-stone-300 ml-6">
          To Do:
        </h2>
        {taskList
          // .slice(0)
          // .reverse()
          .map((task, i) => (
            <ToDo
              key={i}
              task={task}
              index={i}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
      </div>
    </>
  );
}

export default App;
