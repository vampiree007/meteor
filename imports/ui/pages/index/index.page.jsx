import React, {useState} from 'react';
import CreatetaskForm from '../../components/forms/createTask.form';
import TasksBox from '../../components/tasksBox/tasksBox.component';

function IndexPage(props) {
    return (
        <div className="main-tasks-page content list-view">
            <CreatetaskForm />
            <div className="groups-wrapper">
                <TasksBox title="Incomplete" status="incomplete" />
                <TasksBox title="Completed" status="completed" />  
            </div>
            
        </div>

    )
};

export default IndexPage;
