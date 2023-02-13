import { Container, Logo, Avatar } from './styles';
import logoImg from '@assets/Logo.png';
import avatarImg from '@assets/AvatarTest.png';

export function HomeHeader() {
    return (
        <Container>
            <Logo
                source={logoImg}
                resizeMode="contain"
            />
            <Avatar
                source={avatarImg}
                resizeMode="contain"
            />
        </Container>
    )
}