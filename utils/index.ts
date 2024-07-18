import { CarProps } from "@/components/CarCard";

interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export async function fetchCars(filters: FilterProps): Promise<any> {
  const { manufacturer, year, fuel, limit, model } = filters;

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "022e585f4emsh757a8796d0562b9p10958ejsnb794867cdcd1",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 500;
  const mileageFactor = 0.2;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageFactor + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchFreeCars(): Promise<any> {
  const url = "https://freetestapi.com/api/v1/cars?limit=5";

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
}

export const updateSearchParams = (title: string, value: string) => {
  const SearchParams = new URLSearchParams(window.location.search);
  SearchParams.set(title, value);

  const newPathName = `${window.location.pathname}?${SearchParams.toString()}`;

  return newPathName;
};
