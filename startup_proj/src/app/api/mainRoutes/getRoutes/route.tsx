import { NextResponse } from "next/server";
import {mainRoutes} from "@/actions/getMainRoutes";

// GET request to get main routes for navbar
export async function GET() {
    return NextResponse.json(mainRoutes());
}


