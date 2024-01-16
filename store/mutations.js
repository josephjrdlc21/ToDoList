export const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
  },

  addTask(state, task) {
    try {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    } catch (error) {
      console.error('Error adding task:', error.message);
      alert('An error occurred while adding the task. Please try again.');
    }
  },

  removeTask(state, index) {
    try {
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    } catch (error) {
      console.error('Error removing task:', error.message);
      alert('An error occurred while removing the task. Please try again.');
    }
  },

  toggleTaskStatus(state, taskId) {
    try {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.status.done = !task.status.done;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      } else { alert('Task not found for taskId:', taskId); }
    } catch (error) {
      console.error('Error toggling task status:', error.message);
      alert('An error occurred while toggling the task status. Please try again.');
    }
  },
  
  removeAllTasks(state) {
    try {
      state.tasks = [];
      localStorage.removeItem('tasks');
    } catch (error) {
      console.error('Error removing all tasks:', error.message);
      alert('An error occurred while removing all tasks. Please try again.');
    }
  },
};
