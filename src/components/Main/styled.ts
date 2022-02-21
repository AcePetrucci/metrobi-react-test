import styled from 'styled-components';

// Themes
import { themes } from 'themes';

// Helpers
import { pxToRem, fontSize } from 'styled';


/**
 * Styled Components
 */

export const Main = styled.section`
  align-items: center;
  background-color: ${themes.default.colors.main};
  color: ${themes.default.colors.font.light};
  display: flex;
  flex-direction: column;
  height: ${pxToRem(850)};
  justify-content: flex-start;
  padding-top: ${pxToRem(24)};
  text-align: center;
  width: calc(60% - 6px);
  order: 3;

  @media screen and (max-width: 1360px) {
    height: ${pxToRem(650)};
  }

  @media screen and (max-width: 1080px) {
    height: ${pxToRem(500)};
  }

  @media screen and (max-width: 600px) {
    order: 2;
    width: 100%;
  }
`;