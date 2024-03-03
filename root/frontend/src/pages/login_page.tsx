import { Container } from '@mui/material';
import { UserDetailsBox, RememberMeCheckBox } from '../components/input_fields';
import LoginButton from '../components/login_button';
import React from 'react';

export default function LoginPage() {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);

  // Debugging
  const handleLogin = () => {
    console.log('Logged in: ' + username + ' ' + password + ' ' + rememberMe);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Center children horizontally
        justifyContent: 'center', // Center children vertically (if the container has a set height)
        minHeight: '100vh',
        gap: 2, // space between children
        textAlign: 'center'
      }}>
      <UserDetailsBox
        onSetUsername={setUsername}
        onSetPassword={setPassword}
      />
      <RememberMeCheckBox onSetRememberMe={setRememberMe} />
      <div style={{ marginTop: '20px' }}>
        <LoginButton onClick={handleLogin} />
      </div>
    </Container>
  );
}
