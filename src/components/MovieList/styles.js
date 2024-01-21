import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: ' 250px',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: '',
      marginLeft: -200,

    },
  },
}));
