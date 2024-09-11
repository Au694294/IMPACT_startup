import React from 'react';

const RteBlock = ({ content, title }: { content: string, title: string }) => {
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          { /* Render RTE content from CMS */}
            <h1>{title}</h1>
            <h3>{content}</h3> 
        </div>
      </div>
    );
  };

  export default RteBlock;


