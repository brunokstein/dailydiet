import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
      
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 64px;
    height: 64px;
`;

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;

    border-radius: 90px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-width: 1px;
`;