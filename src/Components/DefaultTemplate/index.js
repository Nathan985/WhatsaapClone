import React from 'react';
import Imagetemplate from '../../img/Connect.png';
import { 
    Container,
    Context,
    ImageConect,
    TitleTemplate,
    SubTitle
} from './styles';

function DefaultTemplate() {
  return (
    <Container>
        <Context>
            <ImageConect src={Imagetemplate} />
            <TitleTemplate>Mantenha seu celular conectado</TitleTemplate>
            <SubTitle>O WhatsApp conecta o seu telefone para sincronizar suas mensagens.</SubTitle>
            <SubTitle>Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</SubTitle>
        </Context>
    </Container>
  );
}

export default DefaultTemplate;