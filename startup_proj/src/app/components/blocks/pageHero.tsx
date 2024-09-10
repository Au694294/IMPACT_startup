import React from 'react';
import { GenericPage } from '@/app/components/genericPage';


const PageHero = ({ pageData }: { pageData: any }) => {

  return (
    <div style={{backgroundColor: 'white'}}>
      <h1>PageType: {pageData.pageId}</h1>
      <GenericPage pageData={pageData} /> 
    </div>
  );
};

export default PageHero;