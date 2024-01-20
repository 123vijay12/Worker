import { useState } from 'react';

function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks((prevTasks) => [...prevTasks, { text, completed: false }]);
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  return { tasks, addTask, removeTask, toggleTask };
}

export default useTaskManager;
