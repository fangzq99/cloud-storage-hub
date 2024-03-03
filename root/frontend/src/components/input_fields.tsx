import { Container, TextField, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

interface UserDetailsBoxProps {
  onSetUsername?: React.Dispatch<React.SetStateAction<string>>;
  onSetPassword?: React.Dispatch<React.SetStateAction<string>>;
}
interface RememberMeCheckBoxProps {
  onSetRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UserDetailsBox({ onSetUsername, onSetPassword }: UserDetailsBoxProps) {
  // const [username, setUsername] = React.useState<string>('');
  // const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setUsername(event.target.value);
    if (onSetUsername) {
      onSetUsername(event.target.value);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSetPassword) {
      onSetPassword(event.target.value);
    }
  };

  return (
    <Container
      component='main'
      maxWidth='xs'>
      <TextField
        id='username'
        label='Username'
        variant='outlined'
        autoComplete='username'
        fullWidth
        margin='normal'
        // value={username}
        onChange={handleUsernameChange}
      />
      <TextField
        id='password'
        label='Password'
        variant='outlined'
        type='password'
        autoComplete='current-password'
        fullWidth
        margin='normal'
        onChange={handlePasswordChange}
      />
    </Container>
  );
}

export function RememberMeCheckBox({ onSetRememberMe }: RememberMeCheckBoxProps) {
  const handleRememberMeBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSetRememberMe(event.target.checked);
  };

  return (
    <Container>
      <FormControlLabel
        control={
          <Checkbox
            id='login-remember-checkbox'
            defaultChecked={false}
            onChange={handleRememberMeBoxChange}
          />
        }
        label='Remember Me'
        sx={{
          marginRight: '240px'
        }}
      />
    </Container>
  );
}
