import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import { fetchCarsThunk } from "../../redux/car/operations.js";
import CarList from "../../components/CarList/CarList.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const totalPages = useSelector((state) => state.cars.totalPages);
  const page = useSelector((state) => state.cars.page);

  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(fetchCarsThunk({ ...filters, page: 1 }));
  }, [dispatch, filters]);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    dispatch(fetchCarsThunk({ ...newFilters, page: 1 }));
  };

  const handleLoadMore = () => {
    dispatch(fetchCarsThunk({ ...filters, page: page + 1 }));
  };

  const hasMore = page < totalPages;

  return (
    <div>
      <FilterPanel onFilter={handleFilter} />
      <CarList cars={cars} onLoadMore={handleLoadMore} hasMore={hasMore} />
    </div>
  );
}
