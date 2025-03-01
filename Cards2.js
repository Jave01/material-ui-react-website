import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function CardVariants() {
  return (
    <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
      {/* Heading */}
      <Typography level="h2" sx={{ fontSize: '2rem', fontWeight: 'bold', mb: 3 }}>
        My Services
      </Typography>

      {/* Cards Container */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        {cardData.map((card, index) => (
          <Card key={index} variant={card.variant} sx={{ width: 260 }}>
            <img
              src={card.img}
              alt={card.title}
              style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
            />
            <CardContent>
              <Typography level="title-md">{card.title}</Typography>
              <Typography>{card.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

const cardData = [
  {
    variant: 'plain',
    title: 'Website Development',
    description: 'I create responsive and fast websites.',
    img: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    variant: 'outlined',
    title: 'SEO Optimization',
    description: 'Boost your website ranking on search engines.',
    img: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    variant: 'soft',
    title: 'Digital Marketing',
    description: 'Grow your business with smart marketing strategies.',
    img: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];
