import { Button, Container } from '@mui/material';

interface TestButtonProps {
  onClick: () => void;
}

export default function TestButton({ onClick }: TestButtonProps) {
  return (
    <>
      <Container
        sx={{
          alignItems: 'center' // Center children horizontally
        }}>
        <Button
          variant='contained'
          type='submit'
          onClick={onClick}>
          test
        </Button>
      </Container>
    </>
  );
}
