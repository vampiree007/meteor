import React from 'react';

function TaskComp(props) {
    let {
        title,
        status,
        hasDescription,
        commentsCount,
        filesCount,
        totalTimeTracked
    } = props.task;

    return (
        <div className="task">
            <a
                className="task-link has-color-tag"
                href="#"
                style={{
                borderColor: '#4e42c3'
            }}>
                <div className="task-link-head">
                    <div className="task-checkbox">
                        <label className="checkbox">
                            <input type="checkbox" defaultChecked={status === 'completed' ? true : false}  />
                            <span className="checkbox-toggle">
                                <i className="checkbox-icon icon-check"/>
                            </span>
                        </label>
                    </div>
                    <div className="task-title">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="task-link-body">
                    <div className="indicators">
                        {
                            hasDescription && 
                            <span className="icon-indicator">
                                <i className="icon-description"/>
                            </span>
                        }
                        {
                            commentsCount > 0 && 
                            <span className="icon-indicator">
                                <i className="icon-chat"/>
                            </span>
                        }
                        {
                            filesCount > 0 && 
                            <span className="icon-indicator">
                                <i className="icon-attach"/>
                            </span>
                        }
                        {
                            totalTimeTracked > 0 && 
                            <span className="icon-indicator">
                                <i className="icon-timer"/>
                            </span>
                        }
                    </div>
                </div>
            </a>
        </div>

    )
}

export default TaskComp;