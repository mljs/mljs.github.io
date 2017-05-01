import React from 'react';

import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

const paperStyle = {
    width: 256
};

export default function SideBar() {
    return (
        <Paper style={paperStyle}>
            <MenuItem primaryText="PCA" />
            <MenuItem primaryText="Matrix" />
        </Paper>
    );
}
