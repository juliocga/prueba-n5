import { css, styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 50px;
  left: 0;
  background-color: var(--background-color-sidemenu);
  overflow-x: hidden;
  transition: width 0.5s;
  ${({ $showmenu }) => ($showmenu === "show" ?
    css`
    width: 100%;
  `
    : css`
    width: 0;
  `)}

  & a{
    padding: 20px 10px;
    width: 100%;
    font-size: 18px;
    text-align: initial;
  }

`;