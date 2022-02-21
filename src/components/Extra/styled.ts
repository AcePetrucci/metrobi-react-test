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
  flex-grow: 0.5;
  justify-content: flex-start;
  order: 2;
  padding-top: ${pxToRem(24)};
  text-align: center;
  width: calc(60% - 6px);

  @media screen and (max-width: 600px) {
    order: 4;
    width: 100%;
  }
`;