import logo from "./logo.svg";
import { Stack, Box, Container, Typography } from "@mui/material";
import Clicker from "./components/Clicker";
import Store from "./components/Store";
import Misc from "./components/Misc";
import Upgrade from "./components/Upgrade";
import { sizing } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Stack
        direction="row"
        justifyContent="baseline"
        alignItems=""
        sx={{ p: "1%" }}
      >
        <Box
          id="clicker-left"
          sx={{ width: "25%", height: "98%", padding: "0 1% 0 0" }}
        >
          {" "}
          {/*item 1*/}
          <Clicker />
        </Box>

        <Box
          style={{
            flex: 1,
            backgroundColor: "purple",
          }}
        >
          <Stack direction="column" justifyContent="left" alignItems="left">
            <Box style={{ width: '100%', backgroundColor: "blue" }}>
              <Typography variant="h1">Store!</Typography>
            </Box>
            <Stack direction="row">
              <Stack direction="column">
                <Box style={{ backgroundColor: "red" }}>
                  <Misc />
                </Box>
                <Box style={{ backgroundColor: "green" }}>
                  <Store />
                </Box>
              </Stack>
              <Box style={{ flex: 1, backgroundColor: "yellow" }}>
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
