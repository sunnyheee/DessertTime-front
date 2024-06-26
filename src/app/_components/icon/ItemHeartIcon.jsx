import React from 'react'

const ItemHeartIcon = ({ stroke }) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.59896 8.12858L9.26562 9.79525L13.0156 6.04525M10.0933 3.24176C8.42712 1.29391 5.64875 0.76995 3.5612 2.55359C1.47366 4.33723 1.17976 7.31939 2.81912 9.42891C4.05737 11.0223 7.57504 14.221 9.2223 15.691C9.52511 15.9612 9.67652 16.0963 9.85382 16.1495C10.0077 16.1957 10.1788 16.1957 10.3327 16.1495C10.51 16.0963 10.6614 15.9612 10.9642 15.691C12.6115 14.221 16.1291 11.0223 17.3674 9.42891C19.0067 7.31939 18.7487 4.31847 16.6253 2.55359C14.5019 0.788712 11.7594 1.29391 10.0933 3.24176Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ItemHeartIcon
