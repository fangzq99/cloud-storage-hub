import { Autocomplete, Container, FormControl, TextField, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// Move this somewhere else probably, seems will be used alot
interface StoredItemProps {
  label: string;
  misc?: string;
}

// Temporary debug array of objects
const sampleItems: StoredItemProps[] = [
  { label: '123', misc: '456' },
  { label: 'b', misc: 'd' },
  { label: 'c', misc: '2' },
  { label: 'd', misc: '4' },
  { label: 'e', misc: '1' }
];

export default function HomePage() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '0px'
      }}>
      <Container
        id='navbar-container'
        sx={{ display: 'inline-flex', height: '20vh', minWidth: '100%', marginLeft: '0px' }}>
        {/* Wrap the first two Boxes in a parent Container to stack them */}
        <Container
          id='search-bar'
          sx={{ display: 'flex', flexDirection: 'column', width: '60%', minWidth: '400px', marginLeft: '0px' }}>
          <Box sx={{ alignItems: 'flex-start' }}>
            <h1>Storage</h1>
          </Box>

          <Box sx={{ alignItems: 'flex-start' }}>
            <FormControl sx={{ width: '300px' }}>
              <Autocomplete
                id='item-search-box'
                freeSolo
                sx={{ width: '100%' }}
                options={sampleItems}
                getOptionLabel={(option) => (typeof option === 'string' ? option : `${option.label} (${option.misc})`)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='Search items...'
                  />
                )}
              />
            </FormControl>
          </Box>
        </Container>
        <Container
          id='current-user-details'
          sx={{
            display: 'flex',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '20%',
            marginRight: '0px',
            flexDirection: 'column'
          }}>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <p>User: </p>
          </Box>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <p>Current Limit: </p>
          </Box>
        </Container>
      </Container>
      <Container
        id='storage-item-container'
        sx={{ display: 'flex', flexDirection: 'column', paddingTop: '20px' }}>
        <Container id='item-category-title'>AA BB CC</Container>
        <Container id='item-list-container'>aa</Container>
      </Container>
    </Container>
  );
}
