import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 224px;
    height: 288px;

    margin-top: 32px;
    margin-bottom: 32px;
`;