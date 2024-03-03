import { Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        gap: 2, // space between children
        textAlign: 'center',
        paddingTop: '20px'
      }}>
      <h1>Storage</h1>
    </Container>
  );
}
