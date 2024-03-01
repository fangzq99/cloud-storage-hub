import { Container } from '@mui/material';
import { UserDetailsBox, RememberMeCheckBox } from './input_fields';
import LoginButton from './main_page_login_button';

export default function LoginPage() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Center children horizontally
        justifyContent: 'center', // Center children vertically (if the container has a set height)
        minHeight: '100vh',
        gap: 2, // space between children
        textAlign: 'center' // Can remove in the future probably
      }}>
      <UserDetailsBox />
      <RememberMeCheckBox />
      <LoginButton />
    </Container>
  );
}
