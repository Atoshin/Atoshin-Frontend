import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import classes from '../../styles/Header/LeftDrawer.module.scss';
import Link from 'next/link';
import {useRouter} from "next/router";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function LeftDrawer({state, setState}) {
    const router = useRouter();

    const ActiveLink = ({title, href = undefined}) => {
        if (href === router.pathname) {
            return <Link href={href}>
                <ListItemText className={classes.activeLink} primary={title}/>
            </Link>
        }
        return <Link href={href}>
            <ListItemText primary={title}/>
        </Link>
    }

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
            <div className={classes.menuTopSec} style={{border:'solid red'}}>
                <img className={classes.logoImg} src="/images/Atoshin-logo.png" alt=""/>
                <img onClick={() => setState(false)} className={classes.vectorXIcon} src="/icons/vector-x.svg" alt=""/>
            </div>
            <List>
                <ListItem button>
                    <ActiveLink title={"Marketplace"} href={"/marketplace"}/>
                </ListItem>
                <ListItem button>
                    <ActiveLink title="Museums and Galleries" href={'/gallery-list'}/>
                </ListItem>
                <ListItem button>
                    <ActiveLink title="Artists" href='/artists'/>
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
