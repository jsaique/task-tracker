import { useState } from "react";

export default function AddTask() {
  const [addModal, setAddModal] = useState(false);

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
              <div className="flex justify-between p-5">
                <h3 className="text-3xl">Add New Task</h3>
                <button
                  onClick={() => setAddModal(false)}
                  className="px-3 pb-1 text-gray-400 float-right text-3xl leading-none font-semibold block hover:text-gray-800 hover:bg-red-500 rounded-md"
                >
                  x
                </button>
              </div>
              <form className="p-6" action="">
                <div>
                  <label
                    className="track-wide uppercase text-gray-800 text-xs font-semibold mb-3 inline-block"
                    htmlFor="project-name"
                  >
                    Project Name
                  </label>
                  <input
                    className="w-full bg-stone-200 text-gray-700 border border-stone-200 rounded py-3 px-5 mb-5 leading-tight focus:outline-none focus:bg-white"
                    id="project-name"
                    type="text"
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
                    className="w-full bg-stone-200 text-gray-700 border border-stone-200 rounded py-3 px-5 mb-5 leading-tight focus:outline-none focus:bg-white"
                    id="task-description"
                    rows="3"
                    placeholder="Task description"
                  />
                </div>
              </form>
              <div className="flex justify-end p-6 border-t border-stone-200">
                <button className="bg-amber-600 text-white text-sm font-semibold uppercase py-2 px-3 rounded-lg hover:opacity-70">
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
