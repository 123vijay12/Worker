import React, { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6';

const Stars = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      console.log(isMobile)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {props.Rating >= index + 1 ? (
          <FaStar className='icon' style={{ color: 'gold', fontSize: isMobile ? '12px' : '16px' }} />
        ) : props.Rating >= number ? (
          <FaStarHalfStroke className='icon' style={{ color: 'gold', fontSize: isMobile ? '12px' : '16px' }} />
        ) : (
          <AiOutlineStar className='icon' style={{ color: 'gold', fontSize: isMobile ? '12px' : '16px' }} />
        )}
      </span>
    );
  });

  return (
    <div>
      <div className='icon-style'>{ratingStar}</div>
    </div>
  );
};

export default Stars;
