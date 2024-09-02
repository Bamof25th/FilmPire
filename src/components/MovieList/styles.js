import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItem : 'center',
   justifyContent: 'center',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      // marginLeft: -350,
    },
  },
}));
