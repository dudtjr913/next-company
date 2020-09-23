import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.slick-slide{
  display:inline-block;
}

.ant-card-bordered .ant-card-cover{
  transform : none;
}
`;

export const ZoomOnWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  text-align: center;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: center;
  background-color: white;
  font-size: 20px;
  user-select: none;
  div {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.button`
  float: right;
  border: none;
  outline: none;
  border: none;
  z-index: 3500;
  background-color: white;
  margin-right: 10px;
  .closeBtn {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const SliderWrapper = styled.div`
  background-color: #191e0c;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  place-content: center;
`;

export const PagesWrapper = styled.div`
  color: white;
  position: absolute;
  bottom: 35px;
  width: 100%;
  font-size: 20px;
`;
