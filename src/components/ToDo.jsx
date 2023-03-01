import { useEffect, useState } from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

export default function ToDo({ task, index, taskList, setTaskList }) {
  const [time, setTime] = useState(task.duration);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      // It creates an interval using setInterval that increments the time state variable by 10 milliseconds every 10 milliseconds, but only if running is true. If running is false, it clears the interval using clearInterval.
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    // Cleanup function, which runs when the component unmounts or when the running state variable changes. It clears the interval created by setInterval using clearInterval to prevent memory leaks.
    return () => clearInterval(interval);
    // Takes an array of dependencies [running], which means that it will run whenever the value of running changes.
  }, [running]);

  // Tapping to local storage to update the duration
  const handleStop = () => {
    setRunning(false);

    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1, {
      projectName: task.projectName,
      taskDescription: task.taskDescription,
      timestamp: task.timestamp,
      // Setting the duration to "time" so we can use it as the ^ default value in our useState
      duration: time,
    });
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start bg-white shadow-xl rounded-lg my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
        <div className="flex flex-row justify-between w-full">
          <p className="font-semibold text-xl">{task.projectName}</p>
          <EditTask
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <p className="text-lg py-2">{task.taskDescription}</p>
        <div className="w-full flex flex-row items-center justify-evenly">
          <div className="w-1/4 text-xl font-semibold py-4">
            <span>{("0" + Math.floor((time / 36000000) % 24)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span className="text-sm">
              {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
          </div>
          <div className="w-1/3 max-w-sm flex flex-row justify-evenly gap-2">
            {running ? (
              <button
                onClick={handleStop}
                className="border rounded-lg py-1 px-3"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={() => {
                  setRunning(true);
                }}
                className="border rounded-lg py-1 px-3"
              >
                Start
              </button>
            )}
            <button
              onClick={() => {
                setTime(0);
              }}
              className="border rounded-lg py-1 px-3"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <DeleteTask
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      </div>
    </>
  );
}
