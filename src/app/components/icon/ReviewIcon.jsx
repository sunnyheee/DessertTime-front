import React from 'react'

const ReviewIcon = ({ stroke }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 16.9619L17.9999 18.0559C17.4695 18.636 16.7501 18.9619 16.0001 18.9619C15.2501 18.9619 14.5308 18.636 14.0004 18.0559C13.4692 17.477 12.75 17.152 12.0002 17.152C11.2504 17.152 10.5311 17.477 9.99997 18.0559M1 18.9619H2.67454C3.16372 18.9619 3.40832 18.9619 3.63849 18.9066C3.84256 18.8576 4.03765 18.7768 4.2166 18.6672C4.41843 18.5435 4.59138 18.3705 4.93729 18.0246L17.5 5.4619C18.3285 4.63347 18.3285 3.29032 17.5 2.4619C16.6716 1.63347 15.3285 1.63347 14.5 2.4619L1.93726 15.0246C1.59136 15.3705 1.4184 15.5435 1.29472 15.7453C1.18506 15.9243 1.10425 16.1194 1.05526 16.3234C1 16.5536 1 16.7982 1 17.2874V18.9619Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ReviewIcon