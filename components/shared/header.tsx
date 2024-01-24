import Container from './container';
import Logo from './logo';
import MainMenu from './main-menu';

const Header = () => {
    return (
        <header className='bg-red-100 fixed left-0 top-0 w-full'>
            <Container className='flex items-center justify-between'>
                <section>
                    <Logo />
                </section>
                <section>
                    <MainMenu />
                </section>
            </Container>
        </header>
    );
}

export default Header;