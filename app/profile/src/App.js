import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header'
import About from './components/About'
import CardObject from './components/CardObject'
import FloatGoTop from './components/FloatGoTop'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  headerTitle: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    Height: '0',
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header classes={classes} />
      <main>
        <About classes={classes} />
        <CardObject classes={classes}/>
      </main>
      <FloatGoTop />
    </React.Fragment>
  );
}