import styled from 'styled-components';

// Themes
import { themes } from 'themes';

// Helpers
import { pxToRem } from 'styled';


/**
 * Styled Components
 */

export const Extra = styled.section`
  align-items: center;
  background-color: ${themes.default.colors.extra};
  color: ${themes.default.colors.font.light};
  display: flex;
  flex-direction: column;
  height: ${pxToRem(350)};
  justify-content: flex-start;
  padding-top: ${pxToRem(24)};
  text-align: center;
  width: calc(60% - 6px);
  order: 4;

  @media screen and (max-width: 1360px) {
    height: ${pxToRem(250)};
  }

  @media screen and (max-width: 1080px) {
    height: ${pxToRem(200)};
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;