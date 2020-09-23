import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Button } from 'antd';
import { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

const GlobalStyle = createGlobalStyle`
  .slick-slide{
    display:inline-block;
  }

  .ant-card-bordered .ant-card-cover{
    transform : none;
  }
`;

const ZoomOnForm = ({ images, setZoom }) => {
  const [page, setPage] = useState(1);
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
        zIndex: '3000',
        textAlign: 'center',
      }}
    >
      <GlobalStyle />
      <header
        style={{
          position: 'relative',
          width: '100%',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'center',
          backgroundColor: 'white',
          fontSize: '20px',
          userSelect: 'none',
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
      <div
        style={{
          backgroundColor: '#191e0c',
          height: 'calc(100% - 70px)',
          display: 'flex',
          flexDirection: 'column',
          placeContent: 'center',
        }}
      >
        <Slider
          infinite
          arrows={false}
          beforeChange={(oldIndex, newIndex) => setPage(newIndex + 1)}
        >
          {images.map((v) => (
            <div key={v.id}>
              <img style={{ userSelect: 'none' }} src={v.src} alt={v.src} />
            </div>
          ))}
        </Slider>
        <div
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '35px',
            width: '100%',
            fontSize: '20px',
          }}
        >
          {`${page} / ${images.length}`}{' '}
        </div>
      </div>
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
