import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import CustomSelect from "../common/CustomSelect/CustomSelect.jsx";
import CustomInput from "../common/CustomInput/CustomInput.jsx";
import Button from "../common/Button/Button.jsx";
import s from "./FilterPanel.module.css";
import { useDispatch } from "react-redux";
import { fetchCarsThunk } from "../../redux/car/operations.js";

export default function FilterPanel({ onFilter }) {
  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/brands")
      .then(({ data }) => {
        const options = data.map((brand) => ({
          value: brand,
          label: brand,
        }));
        console.log("✅ Brands options:", options);
        setBrands(options);
        dispatch(fetchCarsThunk({}));
      })
      .catch((err) => console.error("Brands fetch error:", err));
  }, [dispatch]);

  const priceOptions = Array.from({ length: 10 }, (_, i) => {
    const value = (i + 1) * 10;
    return { value: value.toString(), label: `$${value}` };
  });

  const handleSubmit = () => {
    console.log("✅ handleSubmit called");
    console.log("selectedBrand:", selectedBrand);
    console.log("selectedBrand.value:", selectedBrand?.value);

    const filters = {};

    if (selectedBrand) filters.brand = selectedBrand.value;
    if (selectedPrice) filters.price = selectedPrice.value;
    if (mileageFrom) filters.mileageFrom = Number(mileageFrom);
    if (mileageTo) filters.mileageTo = Number(mileageTo);

    onFilter(filters);
  };

  return (
    <div className={s.filtersContainer}>
      <label className={s.carBrandLabel}>
        <span className={s.titles}>Car brand</span>
        <CustomSelect
          options={brands}
          placeholder="Choose a brand"
          value={selectedBrand}
          onChange={(e) => {
            console.log("✅ Selected brand:", e);
            setSelectedBrand(e);
          }}
        />
      </label>

      <label className={s.priceLabel}>
        <span className={s.titles}>Price / 1 hour</span>
        <CustomSelect
          options={priceOptions}
          placeholder="Choose a price"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e)}
        />
      </label>

      <label className={s.mileageLabel}>
        <span className={s.titles}>Car mileage / km</span>
        <div className={s.inputsContainer}>
          <CustomInput
            placeholder="From"
            className={s.fromInput}
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
          />
          <CustomInput
            placeholder="To"
            className={s.toInput}
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
          />
        </div>
      </label>

      <Button onClick={handleSubmit} className={s.button}>
        Search
      </Button>
    </div>
  );
}
