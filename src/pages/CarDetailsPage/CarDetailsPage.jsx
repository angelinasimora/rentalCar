import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./CarDetailsPage.module.css";

import { fetchOneCar } from "../../redux/car/operations";
import { selectOneCar } from "../../redux/car/selector";

import { Adress, Mileage, Type } from "../../components/ui/CarInfo";
// import Form from "../../components/Form/Form";

const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectOneCar);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneCar(id));
    }
  }, [dispatch, id]);

  const carIdShort = car?.id?.split("-")[2];

  if (!car) return null;

  return (
    <div className="container">
      <div className={styles.innerContainer}>
        <div className={styles.imgContainer}>
          <img src={car.img} alt={car.brand} className={styles.img} />
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>
            {car.brand} {car.model}, {car.year}
            <span className={styles.carId}>id: {carIdShort}</span>
          </h2>

          <div className={styles.adressContainer}>
            <p className={styles.adress}>
              <svg className={styles.icon}>
                <use href="/icons.svg#icon-Location" />
              </svg>
              {Adress(car, "flag")}
            </p>
            <p className={styles.mileage}>Mileage: {Mileage(car)} km</p>
          </div>

          <p className={styles.price}>${car.rentalPrice}</p>
          <p className={styles.description}>{car.description}</p>

          <section>
            <h3 className={styles.sectionTitle}>Rental Conditions:</h3>
            <ul className={styles.rentalList}>
              {car.rentalConditions?.map((cond, index) => (
                <li key={index} className={styles.rentalItem}>
                  <svg className={styles.icon}>
                    <use href="/icons.svg#icon-check-circle" />
                  </svg>
                  {cond}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className={styles.sectionTitle}>Car Specifications:</h3>
            <ul className={styles.specificationsList}>
              <li className={styles.specificationsItem}>
                <svg className={styles.icon}>
                  <use href="/icons.svg#icon-calendar" />
                </svg>
                Year: {car.year}
              </li>
              <li className={styles.specificationsItem}>
                <svg className={styles.icon}>
                  <use href="/icons.svg#icon-car" />
                </svg>
                Type: {Type(car)}
              </li>
              <li className={styles.specificationsItem}>
                <svg className={styles.icon}>
                  <use href="/icons.svg#icon-fuel-pump" />
                </svg>
                Fuel Consumption: {car.fuelConsumption}
              </li>
              <li className={styles.specificationsItem}>
                <svg className={styles.icon}>
                  <use href="/icons.svg#icon-gear" />
                </svg>
                Engine Size: {car.engineSize}
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.sectionTitle}>
              Accessories and Functionalities:
            </h3>
            <ul className={styles.accessoriesList}>
              {[...(car.accessories || []), ...(car.functionalities || [])].map(
                (item, index) => (
                  <li key={index} className={styles.accessoriesItem}>
                    <svg className={styles.icon}>
                      <use href="/icons.svg#icon-check-circle" />
                    </svg>
                    {item}
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
