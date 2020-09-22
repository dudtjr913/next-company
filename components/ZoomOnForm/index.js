import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Button } from 'antd';
import { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

const GlobalStyle = createGlobalStyle`
  .slick-slide{
    display:flex;
    width: 500px;
    height : 250px;
  }

  .ant-card-bordered .ant-card-cover{
    transform : none;
  }
`;

const ZoomOnForm = ({ images, setZoom }) => {
  const HandleOnClose = useCallback(() => {
    setZoom(false);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        zIndex: '3000',
        textAlign: 'center',
      }}
    >
      <GlobalStyle />
      <header
        style={{
          position: 'absolute',
          width: '100%',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'center',
          backgroundColor: 'white',
          fontSize: '20px',
        }}
      >
        <div style={{ width: '100%' }}>상세 이미지</div>
        <Button
          style={{
            float: 'right',
            border: 'none',
            zIndex: '3500',
          }}
          onClick={HandleOnClose}
        >
          <CloseOutlined style={{ fontSize: '25px' }} />
        </Button>
      </header>
      <Slider>
        {images.map((v) => (
          <img src={v.src} alt={v.src} key={v.id} />
        ))}
      </Slider>
    </div>
  );
};

ZoomOnForm.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setZoom: PropTypes.func.isRequired,
};

export default ZoomOnForm;
