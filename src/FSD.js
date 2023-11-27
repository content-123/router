import { Button, Typography, CardActionArea, CardActions, CardContent, CardMedia, Card } from '@mui/material';
import Stack from '@mui/material/Stack';
export function FSD({ items1 }) {
  return (
    <Stack direction="row" spacing={6} className="Stack">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={items1.display}
          alt="...." />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {items1.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {items1.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read Me
        </Button>
      </CardActions>
    </Card>
    </Stack>
  );
}
