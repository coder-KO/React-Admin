import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../../theme';

let primary = customTheme.palette.secondary.main;

const drawerWidth = 240;

const sidebarStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  sideBrand: {
    height: '64px',
    // width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: primary,
    color: '#fff',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default sidebarStyles;
