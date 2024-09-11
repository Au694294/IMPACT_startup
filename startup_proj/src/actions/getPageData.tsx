import ImageBlock from "@/app/components/blocks/imageBlock";
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
          {
            alias: 'imageBlock',
            blockProps: mockBlocks.staff
          }
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
            alias: 'heroBlock',
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
    rteBlock: {
      content: 'Test hero banner for hero page',
    },
    heroBlock: {
      imageUrl: 'https://placehold.co/1000x300',
    }
  },
  contact: {
    rteBlock: {
      title: 'Kontakt os',
      content: 'Du kan kontakte os via email eller telefon.',
    }
  },
  staff: {
    rteBlock: {
      title: 'Hvem er vi?',
      content: 'Vi er et team af erfarne frisører, der er klar til at hjælpe dig med en klipning til en god pris.',
    },
    imageBlock: {
      imageUrl: './team.jpg',
    }
  },
  home: {
    rteBlock: {
      title: 'Din Lokale Frisør',
      content: 'Studievenlige priser',
    },
    buttonBlock: {
      text: 'Book tid nu'
    },
    imageBlock: {
      imageUrl: 'https://placehold.co/600x400',
    }
  }
}


