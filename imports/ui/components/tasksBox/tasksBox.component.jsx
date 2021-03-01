import React from 'react';
import TaskComp from './task/task.component';
import {Tasks} from '../../../api/tasks'
import { useTracker } from 'meteor/react-meteor-data';

function Tasksbox({title, status}) {
    const dbTasks =  useTracker(() => Tasks.find({status, isPrivate: false}).fetch());
  
    return (
        <div className="group-container open">
            <div className="group-head">
                <p>{title}</p>
            </div>
            <div className="group-content">
                {
                    dbTasks.map((task,i) => {
                        return(
                            <TaskComp key={i} task={task} />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Tasksbox;
