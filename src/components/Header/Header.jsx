import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const getLinkClass = ({ isActive }) =>
    isActive ? `${s.link} ${s.active}` : s.link;

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          Rental<span className={s.logoCar}>Car</span>
        </div>
        <nav className={s.nav}>
          <div className={s.navLink}>
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={getLinkClass}>
              Catalog
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
