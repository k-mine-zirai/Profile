import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button } from '@material-ui/core';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const CategoryList = [
    {
        name: "About Me",
        anchor: "about-me-anchor"
    },
    {
        name: "Skills",
        anchor: "skills-anchor"
    },
    {
        name: "Contact",
        anchor: "contact-anchor"
    },
]

// const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

export default function Header(classes) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll >
        <AppBar>
            <Toolbar >
                <Typography
                style = {{flexGrow: 1}}
                variant="h6">
                    K.Minematsu's Page
                </Typography>
                {/* <Button color="inherit" onClick={handleClick()}>About Me</Button> */}
                <Button color="inherit">About Me</Button>
                <Button color="inherit">Skills</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* ↓Topに戻るための目印 */}
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}
