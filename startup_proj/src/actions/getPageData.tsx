import test from "node:test";

export const GetPageData = (page: string) => {
  let pageData;

  switch (page) {
    case 'contact': {
      pageData = {
        pageId: 'pageBlockList',
        blocks: [
          {
            alias: 'rteBlock',
            blockProps: mockBlocks.contact
          },
        ]
      };
      break;
    }
    case 'staff': {
      pageData = {
        pageId: 'pageBlockList',
        blocks: [
          {
            alias: 'rteBlock',
            blockProps: mockBlocks.staff
          },
        ]
      };
      break;
    }
    case 'home': {
      pageData = {
        pageId: 'pageBlockList',
        blocks: [
          {
            alias: 'rteBlock',
            blockProps: mockBlocks.home
          },
          {
            alias: 'buttonBlock',
            blockProps: mockBlocks.home
          },
          {
            alias: 'imageBlock',
            blockProps: mockBlocks.home
          }
        ]
      };
      break;
    }
    case 'test': {
      pageData = {
        pageId: 'pageHero',        
        blocks: [
          {
            alias: 'rteBlock',
            blockProps: mockBlocks.test
          },
          {
            alias: 'bannerBlock',
            blockProps: mockBlocks.test
          }
        ]
      };
      break;
    }
  }
  return pageData;
}




// Mock data for blocks
const mockBlocks = {
  test: {
    rteBlock: (
      <div style={{ textAlign: 'center' }}>
        <h2>Test banner for hero page</h2>
      </div>
    ),
    bannerBlock: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <img style={{ width: '100%', marginBottom: '650px', marginTop: '20px' }} src="https://placehold.co/1000x300" />
      </div>
    )
  },
  contact: {
    rteBlock: (
      <div style={{ textAlign: 'center' }}>
        <h2>Kontakt os</h2>
        <p>Du kan kontakte os via email eller telefon.</p>
      </div>
    )
  },
  staff: {
    rteBlock: (
      <div style={{ textAlign: 'center' }}>
        <h2>Hvem er vi?</h2>
      </div>
    )
  },
  home: {
    rteBlock: (
      <div>
        <div style={{ textAlign: 'center', fontSize: '4.5rem' }}>
          <h1>Din Lokale Frisør</h1>
        </div>
        <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>
          <h2>Studievenlige priser</h2>
        </div>
      </div>
    ),
    buttonBlock: (
      <div style={{ textAlign: 'center' }}>
        <button style={{ backgroundColor: 'lightgrey', color: 'black', fontWeight: 'bold', padding: '14px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', marginTop: '50px' }}>
          Book Tid
        </button>
      </div>
    ),
    imageBlock: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{marginBottom: '20px'}} src="https://placehold.co/600x400" />
        <img src="https://placehold.co/600x400" />
      </div>
    )
  }
}


