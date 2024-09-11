import dynamic from 'next/dynamic';

// Lazy load BlockRenderer
const BlocksRenderer = dynamic(() => import('./blocksRenderer'), {loading: () => <p>Loading...</p>});

// Generic page component, that renders blocks dynamically
export const GenericPage = ({ pageData }: { pageData: any }) => {
  // TEST: Log the blocks array from page
  console.log("BLOCKS:", pageData.blocks);

  return (
    <div>
      {pageData.blocks && Array.isArray(pageData.blocks) ? (
        // Map over each block in the pageData array
        pageData.blocks.map((block: any, index: number) => (
          <div key={index}>
            {/* Pass each block to BlockRenderer */}
            <BlocksRenderer blocks={[block]} />
          </div>
        ))
      ) : (
        <p>No blocks to display</p>
      )}
    </div>
  );
};
