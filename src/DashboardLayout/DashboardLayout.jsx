import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../Components/Aside/Aside';

const DashboardLayout = () => {
    return (
    <div>
  <Aside />
  <div className="ml-64">
    <Outlet />
  </div>
</div>
    );
};

export default DashboardLayout;