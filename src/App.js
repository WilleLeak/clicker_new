import logo from './logo.svg';
import {Stack, Box, Container, Typography} from '@mui/material';
import Clicker from './components/Clicker';
import Store from './components/Store';
import Misc from './components/Misc';
import Upgrade from './components/Upgrade';
import { sizing } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Stack direction='row'
      justifyContent='baseline'
      alignItems=''
      sx={{p: '2%'}}>
        <Box id='clicker-left' sx={{width: '25%', height: '98%', padding: '0 2% 0 0'}}> {/*item 1*/}
          <Clicker/>
        </Box>

        <Box style={{width: '75%', height: '98%', padding: '0 0 0 2%', backgroundColor: 'purple'}}>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'> 
            <Box style = {{width: '75%', backgroundColor: 'blue'}}>
              <Typography variant='h1'>
                Store!
              </Typography>
            </Box>
              <Stack
              direction='row'
              >
                <Stack
                direction='column'>
                  <Box style={{width: '50% ', backgroundColor: 'red'}}>
                    misc
                  </Box>
                  <Box style={{width: '50%', backgroundColor: 'green'}}>
                    cats
                  </Box>
                </Stack>
                <Box style={{width: '10%', backgroundColor: 'yellow'}}>
                  upgrades
                </Box>
                
                </Stack>          
          </Stack>
        </Box>



        {/* <Stack 
        direction='row'
        justifyContent='center'
        spacing={16}
        >
          <Box style={{width: '60%'}}> 
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              style = {{width: '60%', padding: '1%'}}> 
                <Box style = {{width: '60%'}}>
                <Typography variant = 'h1'>
                  Store!
                </Typography>
                </Box>

                <Box id='misc-top'> 
                  <Misc/>
                </Box>

                <Box id='store-bottom'> 
                  <Store/>
                </Box>

                <Box>
                <Upgrade/> 
                </Box>
              </Stack>
            </Box>
            </Stack> */}
            
          </Stack>



    </div>
  );
}

export default App;
