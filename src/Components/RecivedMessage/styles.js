import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    height: auto;
    padding: 8px;
`;

export const BallonText = styled.div`
    display: flex;
    max-width: 68%;
    background: var(--received);
    padding: 10px;
    border-radius: 15px;
    
`;

export const ContainerText = styled.div`
    display: flex;
`;

export const ContainerData = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 0.85rem;
    color: var(--gray);
`;
