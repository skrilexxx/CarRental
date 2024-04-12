import { json } from "@sveltejs/kit"
import { testFilters } from "./../../lib/testfilters.js"
import { activeFilters } from "../../stores/filters.js"

let filters = activeFilters
let showenCars = ["gg"]

export async function GET({}) {
    //filterCars() nedokaze to cist length filters.price, filters.type, filters.fuel, idk úplně proč
    return json(showenCars)
}


function filterCars() {
    if (filters.price == [] && filters.type == [] && filters.fuel == []) {
        showenCars.push("All")
    }
    else if (filters.price != []) {
        for (let i = 0; i < filters.price.length; i++) {
            for (let j = 0; j < testFilters.length; j++) {
                if (filters.price[i] == testFilters[j].priceF) {
                    showenCars.push(testFilters[j].carId)
                }
            }
        }
    }
    else if (filters.type != []) {
        for (let i = 0; i < filters.type.length; i++) {
            for (let j = 0; j < testFilters.length; j++) {
                if (filters.type[i] == testFilters[j].typeF) {
                    showenCars.push(testFilters[j].carId)
                }
            }
        }
    }
    else if (filters.fuel != []) {
        for (let i = 0; i < filters.fuel.length; i++) {
            for (let j = 0; j < testFilters.length; j++) {
                if (filters.fuel[i] == testFilters[j].fuelF) {
                    showenCars.push(testFilters[j].carId)
                }
            }
        }
    }
    else {
        showenCars.push("No cars found.")
    }
}