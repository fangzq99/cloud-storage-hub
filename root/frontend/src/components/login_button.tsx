import { Button, Container } from '@mui/material';

interface LoginButtonProps {
  onClick: () => void;
}

export default function LoginButton(props: LoginButtonProps) {
  return (
    <>
      <Container
        sx={{
          alignItems: 'center' // Center children horizontally
        }}>
        <Button
          variant='contained'
          type='submit'
          onClick={props.onClick}>
          Login
        </Button>
      </Container>
    </>
  );
}
