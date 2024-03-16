import React from 'react';
const hocComponent = (Newcomponent) => {
  return () => <Newcomponent name="supriya" age="27" />;
};

export default hocComponent;
