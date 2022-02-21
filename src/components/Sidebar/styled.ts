import styled from 'styled-components';

// Themes
import { themes } from 'themes';

// Helpers
import { pxToRem } from 'styled';


/**
 * Styled Components
 */

export const Sidebar = styled.section`
  align-items: center;
  background-color: ${themes.default.colors.sidebar};
  color: ${themes.default.colors.font.light};
  display: flex;
  flex-direction: column;
  height: ${pxToRem(700)};
  justify-content: flex-start;
  padding-top: ${pxToRem(24)};
  text-align: center;
  width: calc(40% - 6px);
  order: 2;

  @media screen and (max-width: 1360px) {
    height: ${pxToRem(550)};
  }

  @media screen and (max-width: 1080px) {
    height: ${pxToRem(450)};
  }

  @media screen and (max-width: 600px) {
    order: 3;
    width: 100%;
  }
`;