import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

  poster: {
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgb(64,64,70)',
    width: '80%',
    marginLeft: '70px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '100px',
      width: '50%',
      height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      height: '350px',
      marginBottom: '30px',
    },
  },
}));
