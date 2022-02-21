import styled from 'styled-components';

// Themes
import { themes } from 'themes';

// Helpers
import { pxToRem } from 'styled';


/**
 * Styled Components
 */

export const Hero = styled.section`
  align-items: center;
  background-color: ${themes.default.colors.hero};
  color: ${themes.default.colors.font.light};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  order: 1;
  padding-top: ${pxToRem(24)};
  text-align: center;
  width: calc(40% - 6px);

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
