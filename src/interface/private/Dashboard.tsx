import { Outlet } from 'react-router-dom';
import DashboardNavbar from './components/DashboardNavbar';

const Dashboard = () => {
  return (
    <main className="flex">
      <DashboardNavbar />
      <Outlet />
    </main>
  );
};

export default Dashboard;
