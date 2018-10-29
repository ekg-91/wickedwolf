import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
  	color: 'white',
    marginLeft: -12,
    marginRight: 20,
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const menuList = (
      <div className={classes.list}>
        <List>
          <Link to='/'>
            <ListItem button key='Home'>
              <ListItemIcon><Home /></ListItemIcon>            
              <ListItemText>
                Home
              </ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {['Traditional Media', 'Photography', 'Jewelry', 'Costumes', 'AromatheraPets', 'Taxidermy', 'Commissions'].map((text, index) => (
            <Link to={'/'+text}>
              <ListItem button key={text}>
                <ListItemText>
                  {text}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['About the Artist', 'Contact' ].map((text, index) => (
            <Link to={'/'+text}>
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)} className={classes.menuButton} >
        	<MenuIcon />
        </Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {menuList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);