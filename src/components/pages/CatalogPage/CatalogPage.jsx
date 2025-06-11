import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, resetCars, incrementPage } from "../redux/carsSlice";

function CatalogPage() {
  const dispatch = useDispatch();
  const { items, loading, error, page, filters, hasMore } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(resetCars());
    dispatch(fetchCars({ ...filters, page: 1 }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(incrementPage());
    dispatch(fetchCars({ ...filters, page: nextPage }));
  };

  return (
    <div>
      <h1>Catalog Page</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {items.map((car) => (
          <li key={car.id}>
            <h3>
              {car.make} {car.model}
            </h3>
            <p>Price: {car.rentalPrice}</p>
            <p>Mileage: {Number(car.mileage).toLocaleString()} km</p>
          </li>
        ))}
      </ul>

      {hasMore && !loading && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}

export default CatalogPage;
