import { Container } from '@mui/material';
import UserDetailsBox from './user_details_input_box';
import LoginButton from './main_page_login_button';

function LoginPage() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Center children horizontally
        justifyContent: 'center', // Center children vertically (if the container has a set height)
        height: '100vh',
        gap: 2, // space between children
        textAlign: 'center' // Can remove in the future probably
      }}>
      <UserDetailsBox />
      <LoginButton />
    </Container>
  );
}

export default LoginPage;
