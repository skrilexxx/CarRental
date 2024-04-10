import { json } from "@sveltejs/kit"
import { testOrders } from "../../lib/testorders.js"

export async function GET() {
    return json(testOrders)
}

export async function POST(requestEvent) {
    const {request} = requestEvent;
    const {name, surname, email, phone, driverLicenseNumber, street, houseNumber, city, zipCode, country, carId, price, start, end, pickupLocation} = await request.json()
    const newOrder = {
        id: testOrders.length + 1,
        name,
        surname,
        email,
        phone,
        driverLicenseNumber,
        street,
        houseNumber,
        city,
        zipCode,
        country,
        carId,
        price,
        start,
        end,
        pickupLocation,
    }
    testOrders.push(newOrder)
    return json(newOrder, {status: 201})
}