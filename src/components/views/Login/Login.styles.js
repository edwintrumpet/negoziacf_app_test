import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  card: {
    width: 600,
    maxWidth: 600,
  },
  title: {
    textAlign: 'center',
  },
  input: {
    marginTop: 8,
    marginBottom: 8,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 8,
  },
});

export default useStyles;
