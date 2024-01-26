import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    maxWidth: '75%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genereImage: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
  },
}));
