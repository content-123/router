import { Button, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import Stack from '@mui/material/Stack';
export function Allpages({items}) {
  return (
    <div className="card-container">
      <Stack direction="row" spacing={6} className="Stack">
      <Card sx={{ maxWidth: 345 }} className="custom-card">
        <CardActionArea>
          <CardMedia
          component="img"
            height="140"
            image={items.display}  // Use the 'image' prop for specifying the image source
            alt={items.heading}  /> 
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {items.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {items.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read me
          </Button>
        </CardActions>
      </Card>
      </Stack>
    </div>
  );
}
