import React from 'react';
import RecivedMessage from '../RecivedMessage';
import SendMessage from '../SendMessage';

import { 
    Container,
    HeaderChat,
    ContainerProfile,
    ImageProfile,
    TitleProfile,
    ContainerIcons,
    SerachIcon,
    DotsVerticalIcon,
    BodyChat,
    ContainerControlle,
    EmotionIcon,
    ClipIcon,
    InputWriteMessage,
    MicrofoneIcon
} from './styles';

function WindowChat() {
  return (
      <Container>
          <HeaderChat>
              <ContainerProfile>
                  <ImageProfile src="https://avatars.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4" />
                  <TitleProfile>Meu Anjinho</TitleProfile>
              </ContainerProfile>
              <ContainerIcons>
                  <SerachIcon />
                  <DotsVerticalIcon />
              </ContainerIcons>
          </HeaderChat>
          <BodyChat>
            <SendMessage />
            <RecivedMessage />
            <SendMessage />
            <RecivedMessage />
            <SendMessage />
            <RecivedMessage />
          </BodyChat>
          <ContainerControlle>
              <ContainerIcons>
                  <EmotionIcon />
                  <ClipIcon />
              </ContainerIcons>
                  <InputWriteMessage placeholder="Digite uma mensagem" />
                <MicrofoneIcon />
          </ContainerControlle>
      </Container>
  );
}

export default WindowChat;