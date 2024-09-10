import { NextRequest, NextResponse } from "next/server";
import { GetPageData } from "@/actions/getPageData";

// GET request to get page data for page components
export async function GET(req: NextRequest, { params }: { params: { pagePath: string } }) {
    const { pagePath } = params;
    console.log('Received slug:', pagePath);

    const pageData = await GetPageData(pagePath.toString());
    console.log('Fetched page data:', pageData);

    return NextResponse.json(pageData);
}