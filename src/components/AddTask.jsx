import { useState } from "react";

export default function AddTask({ taskList, setTaskList }) {
  const [addModal, setAddModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    // If name the same as projectName we are setting the value of the project name input
    if (name === "projectName") setProjectName(value);
    if (name === "taskDescription") setTaskDescription(value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { projectName, taskDescription }]);
    // Closing the modal after adding the task
    setAddModal(false);
    setProjectName("");
    setTaskDescription("");
  };

  return (
    <>
      <button
        onClick={() => setAddModal(true)}
        className="bg-amber-600 text-white text-sm uppercase font-semibold py-1 px-2 mx-1.5 rounded-lg hover:opacity-70"
        type="button"
      >
        + New
      </button>
      {addModal ? (
        <>
          <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
            <div className="w-9/12 max-w-lg bg-white border rounded-lg shadow-md">
              <div className="flex justify-between p-5 border-b border-stone-200">
                <h3 className="text-3xl">Add New Task</h3>
                <button
                  onClick={() => setAddModal(false)}
                  className="px-3 pb-1 text-gray-400 float-right text-3xl leading-none font-semibold block hover:text-gray-800 hover:bg-red-500 rounded-md"
                >
                  x
                </button>
              </div>
              <form className="px-6 pt-6 pb-4">
                <div>
                  <label
                    className="track-wide uppercase text-gray-800 text-xs font-semibold mb-3 inline-block"
                    htmlFor="project-name"
                  >
                    Project Name
                  </label>
                  <input
                    onChange={handleInput}
                    className="w-full bg-stone-200 text-gray-700 border border-stone-200 rounded py-3 px-5 mb-5 leading-tight focus:outline-none focus:bg-white"
                    id="project-name"
                    name="projectName"
                    type="text"
                    value={projectName}
                    placeholder="Project name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="track-wide uppercase text-gray-800 text-xs font-semibold mb-3 inline-block"
                    htmlFor="task-description"
                  >
                    Task description
                  </label>
                  <textarea
                    onChange={handleInput}
                    className="w-full bg-stone-200 text-gray-700 border border-stone-200 rounded py-3 px-5 mb-5 leading-tight focus:outline-none focus:bg-white"
                    id="task-description"
                    name="taskDescription"
                    value={taskDescription}
                    rows="5"
                    placeholder="Task description"
                  />
                </div>
              </form>
              <div className="flex justify-end p-6 border-t border-stone-200">
                <button
                  onClick={handleAdd}
                  className="bg-amber-600 text-white text-sm font-semibold uppercase py-2 px-3 rounded-lg hover:opacity-70"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
