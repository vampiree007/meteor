import React from 'react';
import Header from '../components/header/header.component';
import IndexPage from './index/index.page';

function Dashboard(props) {

    return (
        <div className="page">
            <Header/>
            <IndexPage/>
        </div>
    )
}
export default Dashboard;
