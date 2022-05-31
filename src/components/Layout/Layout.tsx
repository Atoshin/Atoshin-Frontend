import LeftDrawer from "./LeftDrawer";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import AppSnackbar from "./Snackbar";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Header from './Header';
import ConnectWalletDialog from './ConnectWalletModal';
import {selectAddress, setAddress, setBalance, setCurrency} from "../../redux/slices/accountSlice";
import {ethers} from "ethers";
import Web3 from "web3";
import {useCookies} from "react-cookie";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import axios from 'axios';
import {selectAlert, setAlert} from "../../redux/slices/alertSlice";

export default function Layout({children}) {
    const [drawerState, setDrawerState] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [_, __, removeCookie] = useCookies()
    const dispatch = useAppDispatch()
    const router = useRouter()
    const snackbarState = useAppSelector(selectAlert)
    const userAddress = useAppSelector(selectAddress)

    useEffect(() => {
        const getAccountAndBalance = (web3) => {
            web3.eth.getAccounts()
                .then(async (addr) => {
                    if (addr[0]) {
                        dispatch(setAddress(addr[0]));
                        web3.eth.getBalance(addr[0]).then(balance => {
                            web3.eth.net.getId()
                                .then(async chainId => {
                                    axios.post('/api/networks', {chainId}).then(({data: network}) => {
                                        // @ts-ignore
                                        dispatch(setBalance(ethers.utils.formatEther(balance)))
                                        dispatch(setCurrency(network.currency))
                                        dispatch(setAlert({
                                            open: false,
                                            message: '',
                                            severity: undefined,
                                        }))
                                    }).catch(e => {
                                        dispatch(setAlert({
                                            open: true,
                                            message: 'Current Network is not supported, please change your network',
                                            severity: 'error',
                                            alwaysOn: true
                                        }));
                                    });
                                });
                        });
                    } else {
                        //@ts-ignore
                        removeCookie(['token'])
                    }
                });
        }

        const checkConnection = async () => {
            let web3;
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                providerEventListener(web3);
                getAccountAndBalance(web3);
            } else if (window.web3) {
                web3 = new Web3(window.web3.currentProvider);
                providerEventListener(web3);
                getAccountAndBalance(web3);
            }
        };

        const providerEventListener = (web3) => {
            window.ethereum.on('accountsChanged', async function (accounts) {
                if (accounts.length > 0) {
                    dispatch(setAddress(accounts[0]));
                    web3.eth.getBalance(accounts[0]).then(balance => {
                        // @ts-ignore
                        dispatch(setBalance(ethers.utils.formatEther(balance)))
                    });
                } else {
                    //@ts-ignore
                    removeCookie(['token'])
                    dispatch(setAddress(''))
                }
            })

            window.ethereum.on('networkChanged', async function (chainId) {
                getAccountAndBalance(web3);
                // try {
                //     const {data: network} = await axios.post('/api/networks', {chainId});
                //     web3.eth.getBalance(userAddress.toLowerCase()).then(balance => {
                //         // @ts-ignore
                //         dispatch(setBalance(ethers.utils.formatEther(balance)))
                //         dispatch(setCurrency(network.currency))
                //         if (snackbarState.alwaysOn) {
                //             dispatch(setAlert({
                //                 open: false,
                //                 message: undefined,
                //                 severity: 'error',
                //             }))
                //         }
                //     });
                // } catch (e) {
                //     console.log(e)
                //     dispatch(setAlert({
                //         open: true,
                //         message: 'Current Network is not supported, please change your network',
                //         severity: 'error',
                //         alwaysOn: true
                //     }));
                // }
            });
        }
        checkConnection();
    }, [])


    useEffect(() => {
        const setScroll = (e) => {
            if (window.scrollY > 300) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }


        window.addEventListener('scroll', setScroll)

        return function cleanup() {
            window.removeEventListener('scroll', setScroll)
        }
    }, [])

    return <>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
            {router.pathname !== '/welcome' &&
                <Header setDrawerMenu={setDrawerState} isScrolled={scrolled}/>
            }
            <LeftDrawer state={drawerState} setState={setDrawerState}/>
            {router.pathname === '/welcome' ?
                {children}
                :
                <Container className="main-mui-container">
                    {children}
                </Container>
            }
            {router.pathname !== '/welcome' &&
                <Footer/>
            }
        </div>
        <AppSnackbar/>
        <ConnectWalletDialog/>
    </>
}