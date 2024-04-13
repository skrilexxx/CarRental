import { json } from "@sveltejs/kit"
import { testFilters } from "../../lib/testfilters.js"

export async function GET() {
    return json(testFilters)
}