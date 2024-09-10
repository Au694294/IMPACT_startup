import React, { lazy } from 'react';
import { notFound } from 'next/navigation';
import { GetPageData } from '@/actions/getPageData';
import dynamic from 'next/dynamic';

const PageRenderer = dynamic(() => import('@/app/components/pageRenderer'));

const DynamicPage = ({params}: {params: {page: string}}) => { // OBS: Get slug from params in server component (SLUG = page) see [page]/page.tsx

// Get page slug
const page = params.page; console.log("slug:", page);

// Get page data based on slug
const pageData = GetPageData(page);

// Check for correct pageData response
console.log("pageData based on slug:", pageData);

// Check if pageData is undefined
if (!pageData) { return notFound(); }

// Return the pageType component with the pageType and pageData as props
return <PageRenderer page={page.toString()} pageData={pageData} />; };

export default DynamicPage;