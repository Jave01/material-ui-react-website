import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';


export default function ImageWithSliders() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', py: 4 }}>
      <Stack
        spacing={4}
        direction="row"
        alignItems="center"
        sx={{ maxWidth: '90%', width: '100%', justifyContent: 'center' }}
      >
        {/* Left Side - Image */}
        <Box
          component="img"
          src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Example"
          sx={{
            width: '50%', // Equal width as text area
            height: '100%', // Adjust height to match text area
            maxHeight: 600, // Adjust max height
            borderRadius: 2,
            objectFit: 'cover',
          }}
        />
        <Box sx={{ width: '50%', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ fontSize: '2rem', fontWeight: 'bold', mb: 2 }}>
            Hi.. I am Javeria Mumtaz, Full Stack Developer
          </Box>

          <Box sx={{ fontSize: '1.2rem', color: 'gray', mb: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
            Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Sed malesuada lobortis pretium.
          </Box>

          {/* Sliders Section */}
          <Box>
            <h3>Website Development</h3>
            <Slider
              disabled={false}
              marks={false}
              size="md"
              valueLabelDisplay="on"
              variant="solid"
              defaultValue={85}
              sx={{ width: '90%', color: 'primary.main' }}
            />
          </Box>

          <Box>
            <h3>UI/UX Design</h3>
            <Slider
              disabled={false}
              marks={false}
              size="md"
              valueLabelDisplay="on"
              variant="solid"
              defaultValue={75}
              sx={{ width: '90%', color: 'secondary.main' }}
            />
          </Box>

          <Box>
            <h3>SEO Optimization</h3>
            <Slider
              disabled={false}
              marks={false}
              size="md"
              valueLabelDisplay="on"
              variant="solid"
              defaultValue={90}
              sx={{ width: '90%', color: 'success.main' }}
            />
          </Box>
          <Button variant="contained" disableElevation sx={{ bgcolor: ' rgb(85, 85, 234)', color: 'white', fontSize: '1rem' }}>
              View More
            </Button>
        </Box>
      </Stack>
    </Box>
  );
}
