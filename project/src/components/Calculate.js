import React from "react";
import tasks from "./Tasks";

function Calculate({ answers }) {
    const suggestedTasks = [];
    if (answers[1].points + answers[2].points < 4) {
        suggestedTasks.push(1);
    }
    if (answers[3].points < 2) {
        suggestedTasks.push(2);
    }
    if (answers[4].points < 2) {
        suggestedTasks.push(3);
    }
    if (answers[5].points + answers[6].points + answers[7].points < 2) {
        suggestedTasks.push(4);
    }
    if (answers[8].points < 2) {
        suggestedTasks.push(5);
    }

    return (
        <div className="suggested-tasks">
            {suggestedTasks.length > 0 && (
                <div>
                    <h2 className="text-background">Suggested Tasks</h2>
                    <ul>
                        {suggestedTasks.map((taskIndex) => (
                            <li key={taskIndex}>
                                <h3>{tasks[taskIndex].task}</h3>
                                <p>{tasks[taskIndex].description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Calculate;
