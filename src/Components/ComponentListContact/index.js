import React from 'react';

import { 
    Container,
    Context,
    ImageProfile,
    ContainerInfoContact,
    TitleContact,
    LastMessage,
    Datelast,
} from './styles';

function ComponentListContact({imageUrl, Title, LastMess, DateMess}) {
  return (
    <Container>
        <Context>
            <ImageProfile src={imageUrl} />
            <ContainerInfoContact>
                <TitleContact>{Title}</TitleContact>
                <LastMessage>{LastMess}</LastMessage>
            </ContainerInfoContact>
            <Datelast>{DateMess}</Datelast>
        </Context>
    </Container>
  );
}

export default ComponentListContact;