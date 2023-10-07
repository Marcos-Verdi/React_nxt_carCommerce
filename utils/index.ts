export async function fetchCars() {

    const headers = {
		'X-RapidAPI-Key': '7a8f061a71msh0df5939580d8b98p100f54jsn42523f329377',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {headers: headers});

    const result = await response.json();

    return result;
}

export const calculateRent = (city_mpg: number, year: number) => {

    const basePricePerDay = 50;

    const mileageFactor = 0.1;

    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;

    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const pricePerDay = basePricePerDay + mileageRate + ageRate

    return pricePerDay.toFixed(0);
}