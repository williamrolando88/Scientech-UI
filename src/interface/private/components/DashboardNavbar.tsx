import { NavLink } from 'react-router-dom';

interface DashboardNavLink {
  name: string;
  to: string;
}

const dashboardLinks: DashboardNavLink[] = [
  { name: 'Calculadora', to: '/dashboard/calculadora' },
  { name: 'Facturas', to: '/dashboard/facturas' },
];

const DashboardNavbar = () => {
  return (
    <nav className="flex flex-col">
      {dashboardLinks.map((link, i) => (
        <NavLink key={i} to={link.to}>
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default DashboardNavbar;
