import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  padding: 5px 15px;
  border-bottom: 1px solid var(--focus);
  cursor: pointer;
`;
export const Context = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 72px;
    justify-content: center;
`;

export const ImageProfile = styled.img`
    display: flex;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 15px;
`;

export const ContainerInfoContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min(180px, 68%);
`;

export const TitleContact = styled.div`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1px;
`;

export const LastMessage = styled.div`
    font-size: 0.85rem;
    overflow: hidden;
    white-space: nowrap;
    color:  var(--gray);
    text-overflow: ellipsis;
`;

export const Datelast = styled.div`
    display: flex;
    color:  var(--gray);
    font-size: 0.85rem;
    flex: 1;
    justify-content: flex-end;
`;
