import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: '30px 2px',
    borderRadius: '50%',
  },
  pageNumber: {
    fontSize: '16px !important',
    margin: ' 0 20px !important',
    color: theme.palette.text.primary,
  },
}));
