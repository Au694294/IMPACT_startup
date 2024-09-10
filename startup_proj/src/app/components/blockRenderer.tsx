import dynamic from 'next/dynamic';
import React from 'react';

import { notFound } from 'next/navigation';

// BlockRenderer takes a block as input and returns divs based on the block alias
const BlockRenderer = (block: any) => {
  switch (block.alias) {
    case 'rteBlock': {
      return block.blockProps.rteBlock;
    }
    case 'buttonBlock': {
      return block.blockProps.buttonBlock;
    }
    case 'bannerBlock': {
      return block.blockProps.bannerBlock;
    }
    default:
      console.log('Block data not found');
      return null;
  }
};

export default BlockRenderer;




// {/* --------------------TEST new BlocksRenderer------------------ */}
// // Lazy load block components
// const blockComponents: { [key: string]: any } = {
//   bannerBlock: dynamic(() => import('./blocks/bannerBlock')),
//   default: notFound
// };

// const BlocksRenderer = ({ blocks }: { blocks: any[] }) => {
//   return (
//     <div>
//       {blocks.map((block, index) => { // Error here - blocks is undefinded
//         const BlockComponent = blockComponents[block.alias];
//         return BlockComponent ? <BlockComponent key={index} {...block.blockProps} /> : null;
//       })}
//     </div>
//   );
// };

// export default BlocksRenderer;

// // //OBS: RteBlock, ButtonBlock and BannerBlock should be components that should be imported asynchroniously with dynamic import
