import styled,{css} from 'styled-components';
import {Search, DotsVerticalRounded, InsertEmoticon, Paperclip, Microphone} from '../../Styles/Icons';
import BackgroundImage from '../../img/BackgroundChat.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HeaderChat = styled.div`
    display: flex;
    width: 100%;
    height: 61px;
    justify-content: space-between;
    align-items: center;
    background: var(--header);
    border-bottom: 2px solid #D9D3D0;
    padding: 0 15px;
`;
export const ContainerProfile = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;
export const ImageProfile = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
`;
export const TitleProfile = styled.div`
    font-size: 1rem;
    font-weight: 500;
`;
export const ContainerIcons = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;

const StyledIcons = css`
    width: 24px;
    height: 24px;
    fill: var(--icons);
    margin: 0 15px;
    cursor: pointer;
`;

export const SerachIcon = styled(Search)`${StyledIcons}`;
export const DotsVerticalIcon = styled(DotsVerticalRounded)`${StyledIcons}`;

export const BodyChat = styled.div`
    flex: 1;
    background: url(${BackgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow-y: auto;
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

export const ContainerControlle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 62px;
    background: #F0F0F0;
`;
export const EmotionIcon = styled(InsertEmoticon)`${StyledIcons}
    margin: 0 5px;
`;
export const ClipIcon = styled(Paperclip)`${StyledIcons}
    margin: 0 5px;
`;
export const InputWriteMessage = styled.input`
    display: flex;
    flex: 1;
    border-radius: 20px;
    padding: 15px;
    background: var(--received);
`;
export const MicrofoneIcon = styled(Microphone)`${StyledIcons}`;