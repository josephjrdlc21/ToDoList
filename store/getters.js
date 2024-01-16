export const getters = {
    getTasks: (state) => {
        try {
            return state.tasks;
        } catch (error) {
            console.error('Error getting tasks:', error.message);
            alert('An error occurred while fetching tasks. Please try again.');
            return [];
        }
    },
};
  