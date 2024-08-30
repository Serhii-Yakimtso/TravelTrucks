import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Logo from '../Logo/Logo';
import css from './Navigation.module.css';

const getNavlinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <div className={css.header}>
      <Link className={css.logo} to="/">
        <Logo />
      </Link>
      <nav className={css.menu}>
        <NavLink to="/" className={getNavlinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getNavlinkClass}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
}
