import styled from 'styled-components';

// Themes
import { themes } from 'themes';

// Helpers
import { pxToRem } from 'styled';


/**
 * Styled Components
 */

export const RelatedImages = styled.section`
  align-items: center;
  background-color: ${themes.default.colors.relatedImages};
  color: ${themes.default.colors.font.light};
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: flex-start;
  padding-top: ${pxToRem(24)};
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;