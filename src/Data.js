import { Button, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
export function Data({ data }) {
  return (
    <Stack direction="row" spacing={6} className="Stack">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.display}
          alt=" " />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.content}
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
