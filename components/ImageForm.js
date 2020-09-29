import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ZoomOnForm from './ZoomOnForm';

const ImageForm = ({ images }) => {
  const [zoom, setZoom] = useState(false);
  const handleOnZoom = useCallback(() => {
    setZoom((prev) => !prev);
  }, []);

  if (images.length === 1) {
    return (
      <>
        {zoom && <ZoomOnForm images={images} setZoom={setZoom} />}
        <img
          style={{ width: '70%', maxHeight: '250px', margin: '0 auto' }}
          src={images[0].src}
          alt={images[0].src}
          onClick={handleOnZoom}
          role="presentation"
        />
      </>
    );
  }
  if (images.length === 2) {
    return (
      <div style={{ display: 'flex' }}>
        {zoom && <ZoomOnForm images={images} setZoom={setZoom} />}
        <img
          style={{ width: '50%', maxHeight: '250px' }}
          src={images[0].src}
          alt={images[0].src}
          onClick={handleOnZoom}
          role="presentation"
        />
        <img
          style={{ width: '50%', maxHeight: '250px' }}
          src={images[1].src}
          alt={images[1].src}
          onClick={handleOnZoom}
          role="presentation"
        />
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {zoom && <ZoomOnForm images={images} setZoom={setZoom} />}
      <img
        style={{ width: '50%', maxHeight: '250px' }}
        src={images[0].src}
        alt={images[0].src}
        onClick={handleOnZoom}
        role="presentation"
      />
      <div
        onClick={handleOnZoom}
        role="presentation"
        style={{
          width: '50%',
          textAlign: 'center',
          fontSize: '25px',
          maxHeight: '250px',
          cursor: 'pointer',
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
