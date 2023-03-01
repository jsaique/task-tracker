import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import { useDrop } from "react-dnd";
import ToDo from "./components/ToDo";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);
  console.log(taskList);

  // Gettitng the data from the local storage
  useEffect(() => {
    let array = localStorage.getItem("taskList");

    if (array) {
      // Parsing the data back to JS object
      setTaskList(JSON.parse(array));
    }
  }, []);

  // Drop functionality
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) =>
      addToCompleted(
        item.id,
        item.projectName,
        item.taskDescription,
        item.timestamp,
        item.duration
      ),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addToCompleted = (
    id,
    projectName,
    taskDescription,
    timestamp,
    duration
  ) => {
    const moveTask = taskList.filter((task) => id === task.id);
    setCompleted((completed) => [
      ...completed,
      {
        moveTask,
        projectName,
        taskDescription,
        timestamp,
        duration,
      },
    ]);
  };

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
      <div className="flex">
        <div className="w-full">
          <h2 className="text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-stone-300 ml-6">
            To Do:
          </h2>
          <div className="ml-6 flex flex-col-reverse">
            {taskList.map((task, i) => (
              <ToDo
                key={i}
                task={task}
                index={i}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col" ref={drop}>
          <h2 className="text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-stone-300">
            Completed:
          </h2>
          {completed.map((task, i) => (
            <ToDo
              key={i}
              task={task}
              index={i}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
