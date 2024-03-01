import { Container, TextField, Checkbox, FormControlLabel } from '@mui/material';

// UsernameField Component
function UsernameField() {
  return (
    <TextField
      id='username'
      label='Username'
      variant='outlined'
      autoComplete='username'
      fullWidth
      margin='normal'
    />
  );
}

// PasswordField Component
function PasswordField() {
  return (
    <TextField
      id='password'
      label='Password'
      variant='outlined'
      type='password'
      autoComplete='current-password'
      fullWidth
      margin='normal'
    />
  );
}

export function UserDetailsBox() {
  return (
    <Container
      component='main'
      maxWidth='xs'>
      <UsernameField />
      <PasswordField />
    </Container>
  );
}

export function RememberMeCheckBox() {
  return (
    <Container>
      <FormControlLabel
        control={<Checkbox defaultChecked={false} />}
        label='Remember Me'
      />
    </Container>
  );
}
