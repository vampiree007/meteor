import React from 'react';
import MenuItem from './menu-item/menuItem.component';

function Sidebar(props) {

    // STEP - 1 : Create Menu Array
    const menuList = [
      {title:'Tasks', iclass:'check', link:'#'},
      {title:'Projects', iclass:'toolkit', link:'#'},
      {title:'People', iclass:'user', link:'#'},
      {title:'Calender', iclass:'calendar', link:'#'},
      {title:'Inbox', iclass:'inbox', link:'#'},
      {title:'Timesheets', iclass:'timer', link:'#'},
      {title:'Settings', iclass:'settings', link:'#'},
      {title:'Support', iclass:'question-mark', link:'#'},
    ]

    // Step 2: Map Array and Dynamically create Menu Items
    return (
      <div className="app-mainmenu">
        <div className="container">
          <div className="menu-list">
            {
              menuList.map((item,i) => {
                return (
                  <React.Fragment key={i}>
                    <MenuItem item={item} />
                    {
                      // Conditionally set Divider - After Particular Menu Item
                      item.iclass === 'timer' && <hr/>
                    }
                  </React.Fragment>
                )
              })
            }
          </div>
        </div>
      </div>
    )
};

export default Sidebar;

