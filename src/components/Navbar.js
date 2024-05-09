import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import logo from '../assets/Logo.png';
import { Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link as RouteLink } from 'react-router-dom';
import { useStateValue } from '../stateProvider';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import { useNavigate } from 'react-router-dom';

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

const Navbar = () => {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      navigate('/');
    }
  }; 

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <RouteLink to='/'>
            <IconButton>
              <img src={logo} alt='commerce.js' height='25px' className={classes.image} />
            </IconButton>
          </RouteLink>

          <div className={classes.grow} />
          <Typography variant='h6' color='textPrimary' component='p'>
            Hello {user ? user.email : 'Guest'}
          </Typography>
          <div className={classes.button}>
            <RouteLink to='/signin'>
              <Button variant='outlined' onClick={handleAuth}>
                <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
              </Button>
            </RouteLink>

            <RouteLink to='checkout-page'>
              <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={basket?.length} color='secondary'>
                  <ShoppingCart fontSize='large' color='primary' />
                </Badge>
              </IconButton>
            </RouteLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar