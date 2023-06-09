import React from 'react';
import './ToDoList.css';

function ToDoList() {

    return (
        <div>
            <div>
                <h1 className="text-background">To-Do List</h1>
                <h3 className="text-background">Here you can add your to-do items to improve your sustainability score!</h3>
            </div>
            <div>
                <ul>
                    <li>Use reusable items - Bring your own reusable bags and water bottles to avoid single-use plastics.</li>
                    <li>Consider using less car - Walk, bike, or take public transportation to reduce your carbon footprint.</li>
                    <li>Cut down on meat intake - Eating less meat can reduce greenhouse gas emissions and save water and land resources.</li>
                    <li>Save on resources - Turn off lights and electronics when not in use, fix leaks, and use both sides of paper to conserve resources.</li>
                    <li>Recycle often - Recycle paper, plastic, glass, and metal to reduce waste in landfills and conserve resources.</li>
                </ul>

            </div>
        </div>
    );
}

export default ToDoList;
