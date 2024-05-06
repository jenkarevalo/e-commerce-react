import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import logo from '../assets/Logo.png';
import Button from '@mui/material/Button';
import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
  },
  appBar: {
    backgroundColor: 'red',
    boxShadow: 'none,'
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginleft: theme.spacing(2),
  },
  image: {
    marginRight: '10px',
    height: '2rem',
  },
}));

export default function Navbar(){
  const classes = useStyles();
/* const Navbar = () => {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = React.useStateValue();
  const history = useHistory();

  const HandleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      history.push('/');
    }
  }; */

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
            <IconButton>
              <img src={logo} alt='commerce.js' height='25px' className={classes.image} />
            </IconButton>
    

          <div className={classes.grow} />
          <Typography variant='h6' color='textPrimary' component='p'>
            Hello Guest {/*{user ? user.email : 'Guest'} */}
          </Typography>
          <div className={classes.button}>
            {/*<link to={!user && '/signin'}>*/}
              <Button variant='outlined' >
                <strong>Sign In{/*{user ? 'Sign Out' : 'Sign In'}*/}</strong>
              </Button> 
            {/*</link>*/}

            {/*<link to='/checkout-page'>*/}
              <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={3} color='secondary'>
                  <ShoppingCart fontSize='large' color='primary' />
                </Badge>
              </IconButton>
            {/*</link>*/}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
