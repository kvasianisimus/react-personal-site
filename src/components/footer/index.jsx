import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from './styles/footer';

function Footer() {
  const classes = useStyles();
  return (
    <div width="auto" style={{ background: '#222' }}>
      <Typography className={classes.root} style={{ color: 'tomato' }}>
        <span> Made with</span>
          <img
            src="/images/love.png"
            alt="love"
            className={classes.love}
          />
        <span> for development</span>
      </Typography>
    </div>
  );
}

export default Footer;
