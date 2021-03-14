import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: 6px solid #4ADF83;
  justify-content: center;
  align-items: center;
`;

export const Context = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: center;
    width: 50%;
`;

export const ImageConect = styled.img``;

export const TitleTemplate = styled.div`
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 15px;
`;

export const SubTitle = styled.div`
    color: var(--gray);
    font-size: 0.90rem;
    margin: 2px;
`;