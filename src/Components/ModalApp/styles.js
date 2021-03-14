import styled, {css} from 'styled-components';
import {Chat, DotsVerticalRounded, AmpStories, Search} from '../../Styles/Icons';

export const Container = styled.div`
  display: flex;
  width: 10vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  display: flex;
  width: 80vw;
  height: 95vh;
  position: absolute;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
  @media(max-width: 1425px){
    width: 100vw;
    height: 100vh;
  }
`;

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  width: max(300px, 30%);
  height: 100%;
  background: var(--header);
  border-right: 1px solid #D9D3D0;
`;
export const HeaderProfile = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 7px 15px;
`;
export const ImageProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const IconsContainer = styled.div`
  display: flex;
  height: auto;
  justify-content: flex-end;
  align-items: center;
`;

const StyledIcons = css`
  fill: var(--icons);
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin: 0 5px;
`;

export const IconStats = styled(AmpStories)`${StyledIcons}`;
export const IconChat = styled(Chat)`${StyledIcons}`;
export const IconDotVertical = styled(DotsVerticalRounded)`${StyledIcons}`;

export const ContainerSeach = styled.div`
  display: flex;
  background: #F6F6F6;
  height: 50px;
  padding: 7px 15px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #D9D3D0;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 97%;
  height: 97%;
  background: var(--received);
  border-radius: 20px;
  align-items: center;
  padding: 0 5px;
`;
export const IconInput = styled(Search)`
${StyledIcons}
  width: 20px;
  height: 20px;
`;
export const InputSearch = styled.input`
  background: none;
  outline: 0;
  display: flex;
  flex: 1;
  font-size: 1rem;
  padding: 5px;
`;

export const ContainerListContacts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  background: var(--received);
  overflow-y: auto;
  max-height: 100%;
  &::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  &::-webkit-scrollbar {
      width: 6px;
      background: #F4F4F4;
  }
  &::-webkit-scrollbar-thumb {
      background: #dad7d7;
  }
`;

export const ContainerApp = styled.div`
  display: flex;
  flex: 1;
  background: var(--template);
  flex-direction:  column;
  width: max(340px, 100%);
`;