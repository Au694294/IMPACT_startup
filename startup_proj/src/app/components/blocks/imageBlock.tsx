import React from 'react';

const ImageBlock = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img style={{ marginBottom: '20px' }} src={imageUrl} alt="Image" />
    </div>
  );
};

export default ImageBlock;