import React from 'react';

import { 
  Container, 
  ContainerModal,
  ContainerContacts,
  HeaderProfile,
  ImageProfile,
  IconsContainer,
  IconStats,
  IconChat,
  IconDotVertical,
  ContainerSeach,
  ContainerInput,
  IconInput,
  InputSearch
} from './styles';

function ModalApp() {
  return (
    <Container>
        <ContainerModal>
          <ContainerContacts>
            <HeaderProfile>
              <ImageProfile src="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4" />
              <IconsContainer>
                <IconStats />
                <IconChat />
                <IconDotVertical />
              </IconsContainer>
            </HeaderProfile>
            <ContainerSeach>
              <ContainerInput>
                <IconInput />
                <InputSearch />
              </ContainerInput>
            </ContainerSeach>
          </ContainerContacts>
        </ContainerModal>
    </Container>
  );
}

export default ModalApp;