import { makeStyles } from '@mui/styles';

const drawerWidth = 240;
export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    marginLeft: 220,
    justifyContent: ' space-between',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-240px',
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },

}));
