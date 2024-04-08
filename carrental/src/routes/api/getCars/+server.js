import { json } from "@sveltejs/kit"
import { testCars } from "./../../lib/testcars.js"


export async function GET() {
    // connect to database
    // fetch cars
    return json(testCars)
}

export async function POST(requestEvent) {
    // connect to database
    // insert car

    const {request} = requestEvent;
    const {carName, model, seats, fuel, transmission, year, price} = await request.json()

    const newCar = {
        id: testCars.length + 1,
        carName,
        model,
        seats,
        fuel,
        transmission,
        year,
        price
    }

    testCars.push(newCar)
    return json(newCar, {status: 201})
}
