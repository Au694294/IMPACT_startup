import React from 'react';

const ButtonBlock = ({ text }: { text: string }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <button style={{ backgroundColor: 'lightgrey', color: 'black', fontWeight: 'bold', padding: '14px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', marginTop: '50px' }}>
        {text}
      </button>
    </div>
  );
};

export default ButtonBlock;