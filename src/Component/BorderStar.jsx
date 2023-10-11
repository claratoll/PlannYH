import { useState } from 'react';

function BorderStar() {
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle the click event and toggle the fill color
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <svg
        width='20'
        height='19'
        viewBox='0 0 20 19'
        xmlns='http://www.w3.org/2000/svg'
        onClick={handleClick}
      >
        <path
          d='M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z'
          fill={isClicked ? 'black' : 'none'} // Toggle fill color
          stroke='black' // Toggle border color
        />
      </svg>
    </>
  );
}

export default BorderStar;
