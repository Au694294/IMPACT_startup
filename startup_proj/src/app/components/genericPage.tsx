import dynamic from 'next/dynamic';

// Lazy load BlockRenderer
const BlockRenderer = dynamic(() => import('./blockRenderer'), {loading: () => <p>Loading...</p>});

// Generic page component, that renders blocks dynamically
export const GenericPage = ({ pageData }: { pageData: any }) => {
  return (
    <div>
      <div>
        {pageData.blocks?.map((block: any, index: number) => (
          <div key={index}>
            {/* Render blocks dynamically */}
            <BlockRenderer {...block} />
          </div>
        ))}
      </div>
    </div>
  );
}; 