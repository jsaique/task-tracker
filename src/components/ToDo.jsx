import EditTask from "./EditTask";

export default function ToDo({ task, index, taskList, setTaskList }) {
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
        <div className="flex justify-center w-full">
          <button className="bg-red-500 text-white text-sm uppercase font-semibold mb-1 py-1 px-3 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
