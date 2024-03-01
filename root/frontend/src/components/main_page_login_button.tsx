import { Button, Box } from '@mui/material';

export default function LoginButton() {
  return (
    <>
      <Box
        height={50}
        width={200}
        alignItems={'center'}
        justifyContent={'center'}
        display={'flex'}>
        <Button variant='contained'>Login</Button>
      </Box>
    </>
  );
}
