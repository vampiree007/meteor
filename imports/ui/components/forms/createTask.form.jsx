import React, {useState} from 'react';
import createTask from '../../../api/tasks/methods/create';

function CreatetaskForm(props) {
    const [title, setTitle] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        const task = {
            title,
            status: 'incomplete',
            hasDescription: true,
            filesCount: 3,
        }
        createTask(task)
    }

    return (
        <form className="add-task" noValidate="" onSubmit={(e) => addTask(e)}>
            <div>
                <div className="fieldset add-task-input fieldset-stripped">
                    <div className="fieldset-content">
                        <label className="fieldset-label">
                            <span className="fieldset-label-content has-icon">
                                <i className="icon-plus"/>
                            </span>
                            <input
                                className=""
                                name="title"
                                placeholder="Add new task"
                                type="text"
                                autoComplete="off"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}/>
                        </label>
                    </div>
                </div>
            </div>
        </form>

    )
};
export default CreatetaskForm;
