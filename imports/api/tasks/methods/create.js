import {Tasks} from '../index';
// TODO: create task method

const insertTask = (task) => {
    let {title, dueDate, status, customFields,color, repeat} = task;
    const newTask = Tasks.insert({
        title,
        dueDate,
        repeat,
        status,
        customFields,
        color,
        createdAt: new Date(),
    })
    return newTask?._id || 'new-task'
};

export default insertTask;
