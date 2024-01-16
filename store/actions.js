export const actions = {
    async loadTasks({ commit }) {
        if (process.client) {
            try {
                if (typeof localStorage !== 'undefined') {
                    const storedTasks = localStorage.getItem('tasks');
                    if (storedTasks) {
                        const tasks = JSON.parse(storedTasks);
                        commit('setTasks', tasks);
                    }
                }
            } catch (error) {
                console.error('Error loading tasks:', error);
                alert('An error occurred while loading tasks. Please try again.');
            }
        }
    },
  
    addNewTask({ commit, state }, newTaskName) {
        try {
            const maxId = state.tasks.reduce((max, task) => (task.id > max ? task.id : max), 0);
            const newTask = {
                id: maxId + 1,
                name: newTaskName,
                status: { done: false },
            };
            commit('addTask', newTask);
        } catch (error) {
            console.error('Error adding a new task:', error);
            alert('An error occurred while adding a new task. Please try again.');
        }
    },

    removeTask({ commit }, index) {
        try {
            commit('removeTask', index);
        } catch (error) {
            console.error('Error removing task:', error);
            alert('An error occurred while removing the task. Please try again.');
        }
    },

    toggleTaskStatus({ commit }, index) {
        try {
            commit('toggleTaskStatus', index);
        } catch (error) {
            console.error('Error toggling task status:', error);
            alert('An error occurred while toggling the task status. Please try again.');
        }
    },

    removeAllTasks({ commit }) {
        try {
            commit('removeAllTasks');
        } catch (error) {
            console.error('Error removing all tasks:', error);
            alert('An error occurred while removing all tasks. Please try again.');
        }
    },
};
