import React from 'react';

function MenuItem({item}) {
    const {link, iclass, title} = item;
    return (
        <a className="list-item" href={link}>
            <i className={`item-icon icon-${iclass}`} />
            <p>{title}</p>
        </a>
    )
}

export default MenuItem;
