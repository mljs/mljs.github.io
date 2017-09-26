// eslint-disable-next-line
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';

import SideBar from './SideBar';

const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};

const contentStyle = {
    display: 'flex',
    flex: '1 1 0%'
};

export default function () {
    return (
        <MuiThemeProvider>
            <div style={appStyle}>
                <AppBar title="ml.js" />
                <div style={contentStyle}>
                    <SideBar />
                    <div>content</div>
                </div>
            </div>
        </MuiThemeProvider>
    );
}
