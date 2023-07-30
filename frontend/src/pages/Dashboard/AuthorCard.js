import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 120,
    position: 'relative'
  },
  avatar: {
    width: 120, // Ukuran avatar diperbesar
    height: 120, // Ukuran avatar diperbesar
    border: '2px solid white',
    position: 'absolute',
    bottom: -60, // Posisi avatar disesuaikan
    left: 'calc(50% - 60px)' // Posisi avatar disesuaikan
  },
  content: {
    paddingTop: 60 // Padding disesuaikan dengan posisi dan ukuran avatar
  },
  iconButton: {
    margin: "5px"
  }
});

export default function AuthorCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://pro.kasir.vip/img/content-1.png"
        title="Cover Photo"
      >
        <Avatar alt="Author Avatar" src="https://pro.kasir.vip/img/testi-3.jpg" className={classes.avatar} />
      </CardMedia>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          Author Name
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Author description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <div>
          <IconButton color="primary" className={classes.iconButton} component="span" onClick={() => window.open('https://www.facebook.com', "_blank")}>
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary" className={classes.iconButton} component="span" onClick={() => window.open('https://www.twitter.com', "_blank")}>
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary" className={classes.iconButton} component="span" onClick={() => window.open('https://www.linkedin.com', "_blank")}>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary" className={classes.iconButton} component="span" onClick={() => window.open('https://www.github.com', "_blank")}>
            <GitHubIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
