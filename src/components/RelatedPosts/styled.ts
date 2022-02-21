import styled from 'styled-components';

// Themes
import { themes } from 'themes';

// Helpers
import { pxToRem } from 'styled';


/**
 * Styled Components
 */

export const RelatedPosts = styled.section`
  align-items: center;
  background-color: ${themes.default.colors.relatedPosts};
  color: ${themes.default.colors.font.light};
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;
  justify-content: flex-start;
  padding-top: ${pxToRem(24)};
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;