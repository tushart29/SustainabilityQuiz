import React from 'react';
import tasks from "./Tasks";

function ToDoList() {
    const filteredTasks = tasks.filter((task) => {
        const filteredTasks = tasks;
    });

    return (
        <div>
            <div>
                <h1 className="text-background">ToDoList</h1>
                <p className="text-background">Here you can add your to-do items to improve your sustainability score!</p>
            </div>
            {filteredTasks.map((task, index) => (
                <div className="task-card" key={index}>
                    <h3 className="text-background">{task.task}</h3>
                    <h3 className="text-background">{task.description}</h3>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;
