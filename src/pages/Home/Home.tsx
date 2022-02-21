import React from 'react';

// Components
import {
  HeaderComponent,
  HeroComponent,
  MainComponent,
  SidebarComponent,
  ExtraComponent,
  RelatedImagesComponent,
  RelatedPostsComponent,
  FooterComponent
} from 'components';

// Styled
import {
  MainContainer,
  RelatedContainer
} from './styled';

/**
 * Home
 */

export const HomeComponent = (_props) => (
  <>
    <HeaderComponent />

    <MainContainer>
      <HeroComponent />
      <SidebarComponent />
      
      <MainComponent />
      <ExtraComponent />
    </MainContainer>

    <RelatedContainer>
      <RelatedImagesComponent />
      <RelatedPostsComponent />
    </RelatedContainer>

    <FooterComponent />
  </>
);
