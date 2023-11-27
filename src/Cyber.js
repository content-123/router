import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

export function Cyber({ cyber }) {
  return (
    <Stack direction="row" spacing={6} className="Stack">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cyber.display}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cyber.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cyber.content}
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
