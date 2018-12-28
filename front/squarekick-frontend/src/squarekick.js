import React, {Component} from 'react';
import './squarekick.css';
import {SkAppBar} from './components/common/SkAppBar';
import theme from "./config/theme"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class Squarekick extends Component  {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <SkAppBar></SkAppBar>
            </MuiThemeProvider>
        );
    }
}

export default Squarekick;
