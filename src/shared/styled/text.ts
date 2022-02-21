import styled from 'styled-components';

// Themes
import { themes } from 'themes';

// Helpers
import { fontSize, pxToRem } from './helpers';

/**
 * Styled Components
 */

export const Description = styled.p`
  ${fontSize(24)};
  color: ${themes.default.colors.font.light};
  font-weight: 400;
  line-height: ${pxToRem(28)};
  margin-top: ${pxToRem(32)};

  @media screen and (max-width: 1360px) {
    ${fontSize(20)};
    line-height: ${pxToRem(24)};
    margin-top: ${pxToRem(28)};
  }

  @media screen and (max-width: 880px) {
    ${fontSize(18)};
    line-height: ${pxToRem(22)};
    margin-top: ${pxToRem(26)};
  }
`;
