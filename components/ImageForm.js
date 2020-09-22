import React from 'react';
import PropTypes from 'prop-types';

const ImageForm = ({ images }) => {
  if (images.length === 1) {
    return (
      <img
        style={{ width: '100%', maxHeight: '250px' }}
        src={images[0].src}
        alt={images[0].src}
      />
    );
  }
  if (images.length === 2) {
    return (
      <div style={{ display: 'flex' }}>
        <img
          style={{ width: '50%', maxHeight: '250px' }}
          src={images[0].src}
          alt={images[0].src}
        />
        <img
          style={{ width: '50%', maxHeight: '250px' }}
          src={images[1].src}
          alt={images[1].src}
        />
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        style={{ width: '50%', maxHeight: '250px' }}
        src={images[0].src}
        alt={images[0].src}
      />
      <div
        style={{
          width: '50%',
          textAlign: 'center',
          fontSize: '25px',
          maxHeight: '250px',
        }}
      >
        {images.length - 1}개 더 보기
      </div>
    </div>
  );
};

ImageForm.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageForm;
