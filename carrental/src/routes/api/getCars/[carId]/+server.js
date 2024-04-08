import { json } from "@sveltejs/kit"
import { testCars } from "./../../../lib/testcars.js"

export async function GET(requestEvent) {
    const {params} = requestEvent;
    const {carId} = params;
    const car = testCars.find(car => car.id == parseInt(carId));
    return json(car);
}

export async function PATCH(requestEvent) {
    const {params} = requestEvent;
    const {request} = requestEvent;
    const {carId} = params;
    const {carName, model, seats, fuel, transmission, year, price} = await request.json();
    const car = testCars.find(car => car.id == parseInt(carId));
    // must enter all fields
    car.carName = carName;
    car.model = model;
    car.seats = seats;
    car.fuel = fuel;
    car.transmission = transmission;
    car.year = year;
    car.price = price;
    return json(car);
}

export async function DELETE(requestEvent) {
    const {params} = requestEvent;
    const {carId} = params;
    const carIndex = testCars.findIndex(car => car.id == parseInt(carId));
    const car = testCars[carIndex];
    testCars.splice(carIndex, 1);
    return json(car);
}
