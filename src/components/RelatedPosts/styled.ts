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
  height: ${pxToRem(250)};
  justify-content: flex-start;
  padding-top: ${pxToRem(24)};
  text-align: center;
  width: calc(30% - 6px);

  @media screen and (max-width: 1360px) {
    height: ${pxToRem(180)};
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;