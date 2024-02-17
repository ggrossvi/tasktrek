import React from 'react';

const CreateTodo = () => {
    const tasks = 0;
    const countTasks = () => {
        // if (tasks === 0) {
        //  return "No tasks available";
        // } else {
        //     return `Tasks: ${tasks}`;
        // }
        return tasks === 0 ? "No tasks available" : `Tasks: ${tasks}`
    };

    return (
        <>
            <h1>{countTasks}</h1>
            <button>Add Task</button>
        </>
    );    
}
    
export default CreateTodo