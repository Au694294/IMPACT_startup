import dynamic from 'next/dynamic';
import React from 'react';

// Map block aliases and lazy load block components (key = alias, value = component)
const blockComponents: { [key: string]: any } = {
  rteBlock: dynamic(() => import('./blocks/rteBlock'), { loading: () => <p>Loading...</p> }),
  heroBlock: dynamic(() => import('./blocks/heroBlock'), { loading: () => <p>Loading...</p> }),
  buttonBlock: dynamic(() => import('./blocks/buttonBlock'), { loading: () => <p>Loading...</p> }),
  imageBlock: dynamic(() => import('./blocks/imageBlock'), { loading: () => <p>Loading...</p> }),
};

// BlockRenderer takes an array of blocks and returns components based on the block alias
const BlocksRenderer = ({ blocks }: { blocks: any[] }) => {
  return (
    <div>
      {/* Map over each block in the blocks array */}
      {blocks.map((block, index) => {
        const BlockComponent = blockComponents[block.alias]; // Get the component based on the block alias
        
        if (!BlockComponent) {
          console.log('Block data not found');
          return null;
        }
        // Render the block component with block props from CMS
        return <BlockComponent key={index} {...block.blockProps[block.alias]} />;
      })}
    </div>
  );
};

export default BlocksRenderer;