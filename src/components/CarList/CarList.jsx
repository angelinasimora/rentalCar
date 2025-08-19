import s from "./CarList.module.css";
import CarCard from "../../components/CarCard/CarCard.jsx";
export default function CarList({ cars, onLoadMore, hasMore }) {
  return (
    <>
      <ul className={s.catalogGrid}>
        {Array.isArray(cars) &&
          cars.map((car) => (
            <li key={car.id}>
              <CarCard item={car} />
            </li>
          ))}
      </ul>
      {hasMore && (
        <li className={s.loadMoreWrapper}>
          <button className={s.loadMoreBtn} onClick={onLoadMore}>
            Load more
          </button>
        </li>
      )}
    </>
  );
}
