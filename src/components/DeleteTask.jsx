export default function DeleteTask({ task, taskList, setTaskList }) {
  const handleDelete = (itemID) => {
    // Getting the index of the task to delete
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
    // setTaskList((currentTask) =>
    //   currentTask.filter((todo) => todo.id !== itemID)
    // );
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white text-sm uppercase font-semibold mb-1 py-1 px-3 rounded-lg hover:bg-red-400 hover:text-gray-800 duration-300"
      >
        Delete
      </button>
    </>
  );
}
