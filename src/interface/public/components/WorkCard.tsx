import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import React from 'react';

interface CardContentProps {
  content: {
    title: string;
    picture: string;
    description: string;
  };
}
const WorkCard = ({
  content: { title, picture, description },
}: CardContentProps) => {
  return (
    <div className="flex-1">
      <Card variant="outlined">
        <CardMedia
          component="img"
          height="200"
          image={picture}
          alt={title.toLowerCase().split(' ').join('-').concat('-picture')}
        />
        <CardHeader title={title} />
        <CardContent>{description}</CardContent>
      </Card>
    </div>
  );
};

export default WorkCard;
