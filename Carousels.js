import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={1}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ position: 'relative', maxHeight: '500px', overflow: 'hidden' }}>
          {/* Image */}
          <img
            srcSet={`${item.img}?w=800&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=800&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Overlay with text and button */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'white',
              textAlign: 'center',
              p: 2,
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '4rem', mb: 2 }}>
              {item.title}
            </Typography>
            {/* Button under text */}
            <Button variant="contained" disableElevation sx={{ bgcolor: ' rgb(85, 85, 234)', color: 'white', fontSize: '1rem' }}>
              View More
            </Button>
          </Box>
      
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Hi.. I am Javeria Mumtaz, Full Stack Developer',
  },
];
