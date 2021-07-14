import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rowHead: {
    backgroundColor: theme.palette.primary.main,
  },
  colHead: {
    color: 'white',
  },
  voidContainer: {
    display: 'flex',
    minHeight: '350px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  voidMessage: {
    fontSize: 22,
  },
  voidIcon: {
    marginTop: 16,
    fontSize: 40,
  },
}));

export default useStyles;
