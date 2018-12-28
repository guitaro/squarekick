import React, {Component} from 'react';
import './SkAppBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SkAppBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton className="menuButton" color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className="grow">
                            Square Kick
                        </Typography>
                        <IconButton color="inherit" aria-label="Login">
                            <FontAwesomeIcon icon="user-circle" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default SkAppBar;