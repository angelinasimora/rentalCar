export const Adress = (car, flag) => {
    const address = car.address;
    const parts = address?.split(", ");
    let cityCountry = "";
    if (flag) {
      cityCountry = parts?.slice(-2).join(" , ");
    } else cityCountry = parts?.slice(-2).join(" | ");
  
    return cityCountry;
  };
  
  export const Mileage = (car) => {
    const mileage = `${car.mileage}`;
    const formattedMileage = mileage?.slice(0, 1) + " " + mileage?.slice(1);
  
    return formattedMileage;
  };
  
  export const Type = (car) => {
    const word = `${car.type}`;
    const formattedType =
      word.charAt(0).toUpperCase() + word?.slice(1).toLowerCase();
  
    return formattedType;
  };