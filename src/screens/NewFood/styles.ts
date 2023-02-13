import { SafeAreaView } from "react-native-safe-area-context";
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Body = styled.View`
    flex: 8;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
`;

export const SecondContainer = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;



