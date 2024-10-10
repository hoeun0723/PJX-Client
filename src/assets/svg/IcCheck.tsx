import React from 'react';

interface CheckProps {
  fill: string;
}

const IcCheck = ( fill: CheckProps) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="icon/check">
      <path id="icon" d="M6.75 12.1275L3.6225 9L2.5575 10.0575L6.75 14.25L15.75 5.25L14.6925 4.1925L6.75 12.1275Z" {...fill}/>
    </g>
  </svg>
);

export default IcCheck;