import React from 'react';
import { GenericPage } from '@/app/components/genericPage';

const PageBlockList = ({ pageData }: {pageData: any}) => {

    return (
        <div>
            <h1>PageType: {pageData.pageId}</h1>
            <GenericPage pageData={pageData} /> 
        </div>
    );
};

export default PageBlockList;