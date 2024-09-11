import { notFound } from 'next/navigation';
import { GenericPage } from '@/app/components/genericPage';
import dynamic from 'next/dynamic';


// Map pageId to component to lazy load the component
const componentMap: { [key: string]: any } = {
  pageBlockList: dynamic(() => import('@/app/components/pageTypes/pageBlockList'), { loading: () => <p>Loading...</p> }),
  pageHero: dynamic(() => import('@/app/components/pageTypes/pageHero'), { loading: () => <p>Loading...</p> }),
  default: notFound
};


export default async function PageRenderer({ page, pageData }: { page: string, pageData: any }) {
  // Check if pageData or page is undefined
  if (!pageData || !page) {
    console.error('Failed to find page data');
    return notFound();
  }

  // Render page component based on pageId
  const Component = componentMap[pageData.pageId];

  // Render the determined component with pageData
  return (
    <div>
      <Component pageData={pageData} />
    </div>
  );
}



































// import dynamic from "next/dynamic";

// // PageRenderer function that returns the pageType component based on the pageType (slug)
// export const pageRenderer = (pageType: string, pageData: any) => {

//   // Lazy load pageType components (key is pageType)
//   const pageTypeMap: { [key: string]: any } = {
//     contact: dynamic(() => import('@/app/pageTypes/contact')),
//     staff: dynamic(() => import('@/app/pageTypes/staff')),
//     home: dynamic(() => import('@/app/pageTypes/home'))
//   }

//   // Get page type component from pageTypeMap 
//   const PageTypeComponent = pageTypeMap[pageType];


//   // Return the pageType component with the pageData as props
//   return (
//     <PageTypeComponent pageData={pageData} />
//   );
// };


