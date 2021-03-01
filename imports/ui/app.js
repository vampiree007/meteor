import React from 'react';
import Sidebar from './components/sidebar/sidebar.component';
import Dashboard from './pages/dashboard';
import getTasks from '../api/tasks/methods/get';
import { useTracker } from 'meteor/react-meteor-data';


const App = () => {
  const data = useTracker(()=> getTasks())
  console.log(data)
  return(
    <div> 
      <Sidebar/>
      <Dashboard/>
    </div>
  )
};

export default App;
