import styled from 'styled-components';

// Themes
import { themes } from 'themes';

// Helpers
import { pxToRem } from 'styled';


/**
 * Styled Components
 */

export const Header = styled.section`
  background-color: ${themes.default.colors.header};
  color: ${themes.default.colors.font.light};
  padding: ${pxToRem(24, 0)};
  text-align: center;
  width: 100%;
`;
