import s from "./CarCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/car/favoritesSlice.js";
import icons from "../../assets/icons.svg";
import Button from "../common/Button/Button.jsx";
// import { scrollToTop } from "../../utils/scrollToTop";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Adress, Mileage, Type } from "../ui/CarInfo.js";

export default function CarCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.includes(item.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(item.id));
  };

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img src={item.img} alt={item.description} className={s.image} />
        <div className={s.overlay} />
        <button
          className={s.heartBtn}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={handleToggleFavorite}
        >
          <svg
            className={clsx(s.icon, isFavorite ? s.iconActive : s.iconInactive)}
          >
            <use
              href={
                isFavorite
                  ? `${icons}#icon-heart-fill`
                  : `${icons}#icon-heart-stroke`
              }
            />
          </svg>
        </button>
      </div>

      <div className={s.textBlock}>
        <div className={s.info}>
          <p className={s.title}>
            <span className={s.brand}>{item.brand} </span>
            <span className={s.model}>{item.model}, </span>
            <span className={s.year}>{item.year}</span>
          </p>
          <p className={s.price}>${item.rentalPrice}</p>
        </div>
        <div className={s.location}>
          <p>
            {Adress(item)} | {item.rentalCompany} |
          </p>
          <p className={s.type}>
            {Type(item)} | {Mileage(item)} km
          </p>
        </div>
      </div>
      <Button
        text="Read more"
        preset={1}
        className={s.readMoreBtn}
        onClick={() => {
          // scrollToTop();
          navigate(`/catalog/${item.id}`);
        }}
      />
    </div>
  );
}
