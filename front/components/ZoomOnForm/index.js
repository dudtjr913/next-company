import React, { useCallback, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { CloseOutlined } from '@ant-design/icons';
import {
  ZoomOnWrapper,
  HeaderWrapper,
  ButtonWrapper,
  SliderWrapper,
  GlobalStyle,
  PagesWrapper,
} from './styles';

const ZoomOnForm = ({ images, setZoom }) => {
  const buttonRef = useRef();
  const [page, setPage] = useState(1);
  const HandleOnClose = useCallback(() => {
    setZoom(false);
  }, []);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const handleOnFocus = useCallback(() => {
    buttonRef.current.focus();
  }, [buttonRef.current]);

  return (
    <ZoomOnWrapper onMouseOut={handleOnFocus}>
      <GlobalStyle />
      <HeaderWrapper>
        <div>상세 이미지</div>
        <ButtonWrapper
          ref={buttonRef}
          onKeyDown={(v) => {
            if (v.key === 'Escape') {
              setZoom(false);
            }
          }}
          onClick={HandleOnClose}
        >
          <CloseOutlined className="closeBtn" />
        </ButtonWrapper>
      </HeaderWrapper>
      <SliderWrapper>
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
        <PagesWrapper>{`${page} / ${images.length}`}</PagesWrapper>
      </SliderWrapper>
    </ZoomOnWrapper>
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
