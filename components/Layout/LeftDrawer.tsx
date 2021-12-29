import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import classes from '../../styles/Header/LeftDrawer.module.scss';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function LeftDrawer({state, setState}) {

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };

    const list = () => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className={classes.menuTopSec}>
                <img className={classes.logoImg} src="/images/atoshin-logo-hexagon.png" alt=""/>
                <img  onClick={() => setState(false)} className={classes.vectorXIcon} src="/icons/vector-x.svg" alt=""/>
            </div>
            <List>
                <ListItem button>
                    <ListItemText primary="Marketplace"/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Art Centers"/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Artists"/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="About NFT"/>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={'left'}
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
