import { Link } from "react-router-dom";
import s from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={s.heroWrapper}>
      <section className={s.hero}>
        <div className={s.overlay}>
          <div className={s.content}>
            <h1 className={s.title}>Find your perfect rental car</h1>
            <p>Reliable and budget-friendly rentals for any journey</p>
            <Link to="/catalog" className={s.button}>
              View Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
