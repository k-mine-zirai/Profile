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

const Categories = [
    { name: "About Me",
      link: "#about_me-anchor",
    },
    { name: "Skills",
      link: "#skills-anchor",
    },
    { name: "Contact",
      link: "#contact-anchor",
    },
];

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
                {Categories.map((category) => (
                    <Button color="inherit" href={category.link} > {category.name} </Button>
                ))}
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* ↓Topに戻るための目印 */}
      <div id="back-to-top-anchor" />
    </React.Fragment>
  );
}
