import React from 'react';
import ComponentListContact from '../ComponentListContact';
import DefaultTemplate from '../DefaultTemplate';

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
  InputSearch,
  ContainerListContacts,
  ContainerApp
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
            <ContainerListContacts>
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
              <ComponentListContact 
                imageUrl="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4"
                Title="Nathan"
                LastMess="Hello World"
                DateMess="09:20"  
              />
            </ContainerListContacts>
          </ContainerContacts>
          <ContainerApp>
              <DefaultTemplate />
          </ContainerApp>
        </ContainerModal>
    </Container>
  );
}

export default ModalApp;