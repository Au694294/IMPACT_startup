import React from 'react';

const BannerBlock = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <img style={{ width: '100%', marginBottom: '650px', marginTop: '20px' }} src={imageUrl} alt="Banner" />
    </div>
  );
};

export default BannerBlock;
