import {DialogContent, useMediaQuery} from "@mui/material";
import ethProvider from "eth-provider";
import classes from '../../styles/ConnectWalletModal/ConnectWalletModal.module.scss';
import axios from 'axios';
import {useCookies} from "react-cookie";
import {selectOpen, setOpen} from "../../redux/slices/connectWalletModalSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from 'web3modal';
import {CoinbaseWalletSDK} from "@coinbase/wallet-sdk";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";
import {useRouter} from "next/router";
import Dialog from "@mui/material/Dialog";
import {ethers} from "ethers";

export default function ConnectWalletModal() {
    const open = useAppSelector(selectOpen);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [cookie, setCookie, removeCookie] = useCookies(['token'])

    const handleClose = () => {
        dispatch(setOpen(false))
        if (router.pathname === '/sign-message') {
            const intended = cookie.intended;
            removeCookie(['intended'])
            return router.push(intended)
        }
    };

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                infuraId: process.env.NEXT_PUBLIC_INFURA_ID // required
            }
        },
        coinbasewallet: {
            package: CoinbaseWalletSDK, // Required
            options: {
                appName: "My Awesome App", // Required
                infuraId: process.env.NEXT_PUBLIC_INFURA_ID, // Required
                // rpc: "", // Optional if `infuraId` is provided; otherwise it's required
                // chainId: 1, // Optional. It defaults to 1 if not provided
                // darkMode: false // Optional. Use dark theme, defaults to false
            }
        },
        // fortmatic: {
        //     package: Fortmatic, // required
        //     options: {
        //         key: "FORTMATIC_KEY", // required
        //         network: customNetworkOptions // if we don't pass it, it will default to localhost:8454
        //     }
        // },
        torus: {
            package: Torus, // required
        },
        authereum: {
            package: Authereum // required
        },
        frame: {
            package: ethProvider // required
        },
        // bitski: {
        //     package: Bitski, // required
        //     options: {
        //         clientId: "BITSKI_CLIENT_ID", // required
        //         callbackUrl: "BITSKI_CALLBACK_URL" // required
        //     }
        // },
        // venly: {
        //     package: Venly, // required
        //     options: {
        //         clientId: "VENLY_CLIENT_ID" // required
        //     }
        // }
    }

    const signMessage = async (signer) => {
        const walletAddress = await signer.getAddress();
        try {
            const signature = await signer.signMessage(process.env.NEXT_PUBLIC_SIGNATURE_PHRASE);
            await axios.post(`/api/signature`, {
                signature,
                walletAddress
            })
            setCookie('token', signature, {
                path: "/",
                sameSite: true,
                maxAge: 365 * 24 * 60 * 60
            })
            handleClose()
        } catch (error) {
            console.log(error)
        }
    }


    const connectWallet = async (selectedProvider) => {
        // if (web3Modal.cachedProvider) {
        //     web3Modal.clearCachedProvider();
        // }
        if (selectedProvider === 'injected') {
            if (!window.ethereum) {
                window.open('https://metamask.io/download', '_blank')
                return;
            }
        }
        const web3Modal = new Web3Modal({
            providerOptions,
            disableInjectedProvider: false,
            cacheProvider: true
        })

        try {
            const instance = await web3Modal.connectTo(selectedProvider)

            const provider = new ethers.providers.Web3Provider(instance);
            const signer = provider.getSigner();
            const walletAddress = await signer.getAddress();
            if (walletAddress) {
                axios.post(`/api/wallet`, {
                    walletAddress
                }).then(r => {
                    signMessage(signer)
                }).catch(e => {
                    if (typeof e.response !== 'undefined') {
                        if (!e.response.data.data) {
                            signMessage(signer)
                        }
                    }
                });
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={"body"}
        >
            <DialogContent>
                <div className={classes.connectWalletTitleSec}>
                    <div className={classes.connectWalletTitle}>
                        Connect your wallet
                    </div>
                    <div onClick={handleClose} className={classes.vectorXSec}>
                        <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                    </div>
                </div>
                <div className={classes.connectWalletDesc}>
                    For Sign up you only need to connect your MetaMask wallet
                </div>
                <div onClick={() => connectWallet('injected')} className={classes.metaMaskMainSec}>
                    <div className={classes.metaMaskLogoMain}>
                        <div className={classes.metaMaskLogoSec}>
                            <img className={classes.metaMaskLogo} src="/images/metaMask-logo.png" alt=""/>
                        </div>
                        <div className={classes.metaMaskTitle}>
                            MetaMask
                        </div>
                    </div>
                    <img className={classes.vectorRight} src="/icons/vector-right.svg" alt=""/>
                </div>
                <div onClick={() => connectWallet('walletconnect')} className={classes.metaMaskMainSec}>
                    <div className={classes.metaMaskLogoMain}>
                        <div className={classes.metaMaskLogoSec}>
                            <img className={classes.walletConnectLogo}
                                 src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAw
                                 IDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N
                                 2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyYWRpYW
                                 xHcmFkaWVudCBpZD0iYSIgY3g9IjAlIiBjeT0iNTAlIiByPSIxMDAlIj48c3RvcCBvZmZz
                                 ZXQ9IjAiIHN0b3AtY29sb3I9IiM1ZDlkZjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29
                                 sb3I9IiMwMDZmZmYiLz48L3JhZGlhbEdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcn
                                 VsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTI1NiAwYzE0MS4zODQ4OTYgMCAyNTYgMTE0LjYxN
                                 TEwNCAyNTYgMjU2cy0xMTQuNjE1MTA0IDI1Ni0yNTYgMjU2LTI1Ni0xMTQuNjE1MTA0LTI1
                                 Ni0yNTYgMTE0LjYxNTEwNC0yNTYgMjU2LTI1NnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCB
                                 kPSJtNjQuNjkxNzU1OCAzNy43MDg4Mjk4YzUxLjUzMjgwNzItNTAuMjc4NDM5NyAxMzUuMD
                                 gzOTk0Mi01MC4yNzg0Mzk3IDE4Ni42MTY3OTkyIDBsNi4yMDIwNTcgNi4wNTEwOTA2YzIuN
                                 Tc2NjQgMi41MTM5MjE4IDIuNTc2NjQgNi41ODk3OTQ4IDAgOS4xMDM3MTc3bC0yMS4yMTU5
                                 OTggMjAuNjk5NTc1OWMtMS4yODgzMjEgMS4yNTY5NjE5LTMuMzc3MSAxLjI1Njk2MTktNC4
                                 2NjU0MjEgMGwtOC41MzQ3NjYtOC4zMjcwMjA1Yy0zNS45NTA1NzMtMzUuMDc1NDk2Mi05NC
                                 4yMzc5NjktMzUuMDc1NDk2Mi0xMzAuMTg4NTQ0IDBsLTkuMTQwMDI4MiA4LjkxNzU1MTljL
                                 TEuMjg4MzIxNyAxLjI1Njk2MDktMy4zNzcxMDE2IDEuMjU2OTYwOS00LjY2NTQyMDggMGwt
                                 MjEuMjE1OTk3My0yMC42OTk1NzU5Yy0yLjU3NjY0MDMtMi41MTM5MjI5LTIuNTc2NjQwMy0
                                 2LjU4OTc5NTggMC05LjEwMzcxNzd6bTIzMC40OTM0ODUyIDQyLjgwODkxMTcgMTguODgyMj
                                 c5IDE4LjQyMjcyNjJjMi41NzY2MjcgMi41MTM5MTAzIDIuNTc2NjQyIDYuNTg5NzU5My4wM
                                 DAwMzIgOS4xMDM2ODYzbC04NS4xNDE0OTggODMuMDcwMzU4Yy0yLjU3NjYyMyAyLjUxMzk0
                                 MS02Ljc1NDE4MiAyLjUxMzk2OS05LjMzMDg0LjAwMDA2Ni0uMDAwMDEtLjAwMDAxLS4wMDA
                                 wMjMtLjAwMDAyMy0uMDAwMDMzLS4wMDAwMzRsLTYwLjQyODI1Ni01OC45NTc0NTFjLS42ND
                                 QxNi0uNjI4NDgxLTEuNjg4NTUtLjYyODQ4MS0yLjMzMjcxIDAtLjAwMDAwNC4wMDAwMDQtL
                                 jAwMDAwOC4wMDAwMDctLjAwMDAxMi4wMDAwMTFsLTYwLjQyNjk2ODMgNTguOTU3NDA4Yy0y
                                 LjU3NjYxNDEgMi41MTM5NDctNi43NTQxNzQ2IDIuNTEzOTktOS4zMzA4NDA4LjAwMDA5Mi0
                                 uMDAwMDE1MS0uMDAwMDE0LS4wMDAwMzA5LS4wMDAwMjktLjAwMDA0NjctLjAwMDA0NmwtOD
                                 UuMTQzODY3NzQtODMuMDcxNDYzYy0yLjU3NjYzOTI4LTIuNTEzOTIxLTIuNTc2NjM5MjgtN
                                 i41ODk3OTUgMC05LjEwMzcxNjNsMTguODgyMzEyNjQtMTguNDIyNjk1NWMyLjU3NjYzOTMt
                                 Mi41MTM5MjIyIDYuNzU0MTk5My0yLjUxMzkyMjIgOS4zMzA4Mzk3IDBsNjAuNDI5MTM0NyA
                                 1OC45NTgyNzU4Yy42NDQxNjA4LjYyODQ4IDEuNjg4NTQ5NS42Mjg0OCAyLjMzMjcxMDMgMC
                                 AuMDAwMDA5NS0uMDAwMDA5LjAwMDAxODItLjAwMDAxOC4wMDAwMjc3LS4wMDAwMjVsNjAuN
                                 DI2MTA2NS01OC45NTgyNTA4YzIuNTc2NTgxLTIuNTEzOTggNi43NTQxNDItMi41MTQwNzQz
                                 IDkuMzMwODQtLjAwMDIxMDMuMDAwMDM3LjAwMDAzNTQuMDAwMDcyLjAwMDA3MDkuMDAwMTA
                                 3LjAwMDEwNjNsNjAuNDI5MDU2IDU4Ljk1ODM1NDhjLjY0NDE1OS42Mjg0NzkgMS42ODg1ND
                                 kuNjI4NDc5IDIuMzMyNzA5IDBsNjAuNDI4MDc5LTU4Ljk1NzE5MjVjMi41NzY2NC0yLjUxM
                                 zkyMzEgNi43NTQxOTktMi41MTM5MjMxIDkuMzMwODM5IDB6IiBmaWxsPSIjZmZmIiBmaWxs
                                 LXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk4IDE2MCkiLz48L2c+PC9
                                 zdmc+"
                                 alt=""/>
                        </div>
                        <div className={classes.metaMaskTitle}>
                            WalletConnect
                        </div>
                    </div>
                    <img className={classes.vectorRight} src="/icons/vector-right.svg" alt=""/>
                </div>
                <div onClick={() => connectWallet('torus')} className={classes.metaMaskMainSec}>
                    <div className={classes.metaMaskLogoMain}>
                        <div className={classes.metaMaskLogoSec}>
                            <img className={classes.torusLogo}
                                 src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU3IiBoZWlnaHQ9IjI3NyIgdmlld0JveD0iMCAwID
                                 I1NyAyNzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB
                                 3aWR0aD0iMTUzLjg4OSIgaGVpZ2h0PSI4Mi4wNzQxIiBmaWxsPSIjMDM2NEZGIiAvPgogICAgPHJlY3QgeD0iNzEu
                                 ODEzNSIgd2lkdGg9IjgyLjA3NDEiIGhlaWdodD0iMjc3IiBmaWxsPSIjMDM2NEZGIiAvPgogICAgPHBhdGggZD0iTT
                                 IxNS40NDMgODIuMDc0MUMyMzguMTA3IDgyLjA3NDEgMjU2LjQ4IDYzLjcwMTIgMjU2LjQ4IDQxLjAzN0MyNTYuNDg
                                 gMTguMzcyOSAyMzguMTA3IDAgMjE1LjQ0MyAwQzE5Mi43NzkgMCAxNzQuNDA2IDE4LjM3MjkgMTc0LjQwNiA0MS4w
                                 MzdDMTc0LjQwNiA2My43MDEyIDE5Mi43NzkgODIuMDc0MSAyMTUuNDQzIDgyLjA3NDFaIiBmaWxsPSIjMDM2NEZGIiAvPgo8L3N2Zz4="
                                 alt=""/>
                        </div>
                        <div className={classes.metaMaskTitle}>
                            Torus
                        </div>
                    </div>
                    <img className={classes.vectorRight} src="/icons/vector-right.svg" alt=""/>
                </div>
                <div onClick={() => connectWallet('authereum')} className={classes.metaMaskMainSec}>
                    <div className={classes.metaMaskLogoMain}>
                        <div className={classes.metaMaskLogoSec}>
                            <img className={classes.authereumLogo}
                                 src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZ
                                 z0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzgycHgiIGhlaWdodD0iNDcycHgiIHZpZXdC
                                 b3g9IjAgMCAzODIgNDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3Lnc
                                 zLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTk
                                 veGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi42ICg2NzQ5MSkgLSB
                                 odHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU
                                 +YXV0aGVyZXVtPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9
                                 kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9
                                 IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9I
                                 mF1dGhlcmV1bSIgZmlsbD0iI0ZGNEMyRiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC
                                 IgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkwLjk1MDAwMCwgMjM1LjkwMDAwMCkgc2NhbGU
                                 oLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xOTAuOTUwMDAwLCAt
                                 MjM1LjkwMDAwMCkgdHJhbnNsYXRlKC0wLjAwMDAwMCwgMC4xMDAwMDApIj4KICAgICAg
                                 ICAgICAgICAgIDxwYXRoIGQ9Ik04MCw0NTQuMSBDNTAsNDQ0LjUgMTkuOCw0MzQuOSAxM
                                 i43LDQzMi43IEwwLDQyOC42IEwwLDM0MC40IEMwLDI4Ny42IDAuNCwyNDcuOCAxLDI0MS
                                 4yIEM1LjQsMTk1IDI1LjQsMTUxLjIgNTguOCwxMTQuOCBDNjYuNCwxMDYuNSAxODcsMS4
                                 0IDE5MC40LDAuMSBDMTkxLjgsLTAuNCAyOTcuOCw5MCAzMTUuMiwxMDYuNiBDMzQ1LjQs
                                 MTM1LjMgMzY5LDE3Ny4zIDM3Ny40LDIxNy41IEMzODEuOCwyMzguNyAzODIuMSwyNDYuN
                                 iAzODEuOCwzNDAuNiBMMzgxLjUsNDI5IEwzMTMuNiw0NTAuNCBDMjc2LjMsNDYyLjEgMj
                                 Q1LjYsNDcxLjYgMjQ1LjQsNDcxLjUgQzI0NS4zLDQ3MS4zIDI1MC45LDQ2MC4yIDI1OCw0
                                 NDYuNyBMMjcwLjksNDIyLjIgTDI5MC4yLDQxNiBDMzAwLjgsNDEyLjYgMzE2LjgsNDA3L
                                 jUgMzI1LjgsNDA0LjcgTDM0Mi4xLDM5OS42IEwzNDEuNywzMTguNCBDMzQxLjQsMjQwLj
                                 QgMzQxLjMsMjM2LjggMzM5LjMsMjI3LjcgQzMzMS43LDE5My40IDMxNiwxNjQuMyAyOTE
                                 uOSwxMzkuNyBDMjg3LjMsMTM1IDI2My45LDExNC4zIDI0MCw5My44IEMyMTYuMSw3My4y
                                 IDE5NS4zLDU1LjMgMTkzLjgsNTMuOSBMMTkxLjIsNTEuNSBMMTQ1LjMsOTEgQzg5LjIsM
                                 TM5LjQgODAuOCwxNDcuNiA2Ny40LDE2OC4yIEM1Ny4xLDE4NC4xIDQ5LjUsMjAxLjIgN
                                 DQuOSwyMTguOSBDNDAuNCwyMzYuOSA0MCwyNDMuNiA0MCwzMjMuOCBMNDAsMzk5LjUgTD
                                 U0LjMsNDA0IEM2Mi4xLDQwNi41IDc4LjEsNDExLjYgODkuOCw0MTUuMyBDMTAxLjQsNDE
                                 5IDExMSw0MjIuNCAxMTEsNDIyLjcgQzExMSw0MjMgMTE2LjYsNDM0IDEyMy41LDQ0Ny4x
                                 IEMxMzAuNCw0NjAuMyAxMzYsNDcxLjIgMTM2LDQ3MS40IEMxMzYsNDcyIDEzNC44LDQ3M
                                 S42IDgwLDQ1NC4xIFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG
                                 F0aCBkPSJNMTg4LjQsNDY4LjUgQzE4Ny41LDQ2Ni43IDE2Mi4zLDQxOC42IDEzMi41LDM
                                 2MS43IEw3OC4zLDI1OC4yIEw3OS4xLDI0OS44IEM4MC45LDIzMi42IDg3LjMsMjE0LjQg
                                 OTcuNywxOTcuOSBDMTAxLjQsMTkxLjkgMTAyLjUsMTkwLjggMTAzLjUsMTkxLjkgQzEwN
                                 C4xLDE5Mi42IDEyMy45LDIzMCAxNDcuNSwyNzUgQzE3MSwzMTkuOSAxOTAuNSwzNTYuNy
                                 AxOTAuOSwzNTYuNyBDMTkxLjIsMzU2LjcgMjExLDMyMC4zIDIzNC44LDI3NS45IEMyNT
                                 guNiwyMzEuNSAyNzguNSwxOTQuNCAyNzkuMSwxOTMuNCBDMjgwLjEsMTkxLjcgMjgwLj
                                 MsMTkxLjggMjgxLjksMTkzLjkgQzI5Mi4yLDIwNy40IDMwMC43LDIyOS43IDMwMy4xLDI
                                 0OS40IEwzMDQuMywyNTkuNCBMMjQ3LjUsMzY1LjMgQzIxNi4zLDQyMy41IDE5MC42LDQ
                                 3MS40IDE5MC40LDQ3MS41IEMxOTAuMyw0NzEuNyAxODkuNCw0NzAuNCAxODguNCw0Njg
                                 uNSBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE
                                 2MywyMTMuOCBMMTM1LjUsMTU4LjkgTDE1MSwxNDUuNCBDMTU5LjUsMTM4IDE3MiwxMjc
                                 uMyAxNzguNywxMjEuNyBMMTkxLDExMS41IEwxOTMuNywxMTMuNyBDMTk1LjMsMTE0Ljk
                                 gMjA3LjYsMTI1LjYgMjIxLjEsMTM3LjUgTDI0NS44LDE1OS4xIEwyMTguNCwyMTMuOSB
                                 DMjAzLjMsMjQ0IDE5MC45LDI2OC43IDE5MC43LDI2OC43IEMxOTAuNiwyNjguNyAxNzg
                                 uMSwyNDQgMTYzLDIxMy44IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgIDw
                                 vZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                                 alt=""/>
                        </div>
                        <div className={classes.metaMaskTitle}>
                            Authereum
                        </div>
                    </div>
                    <img className={classes.vectorRight} src="/icons/vector-right.svg" alt=""/>
                </div>
                <div onClick={() => connectWallet('frame')} className={classes.metaMaskMainSec}>
                    <div className={classes.metaMaskLogoMain}>
                        <div className={classes.metaMaskLogoSec}>
                            <img className={classes.coinbasewalletLogo}
                                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9z
                                 dmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjB
                                 weCIgdmlld0JveD0iMCAwIDE1My40IDE1Mi45Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBoYX
                                 NlIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9I
                                 nN0b3AtY29sb3I6ICMyYjI1NGYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9y
                                 OiAjMTkyZjQ1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCcjcGhhc2U
                                 nKSIgZD0iTTE0NS4xLDc1LjZ2LTU4YzAtNS4xLTQuMi05LjMtOS4zLTkuM2gwSDc3LjdjLTAuNiwwLT
                                 EuMS0wLjItMS42LTAuNmwtNy03Yy0wLjQtMC40LTEtMC43LTEuNi0wLjdIOS4zIEM0LjIsMCwwLDQuM
                                 SwwLDkuM2MwLDAsMCwwLDAsMGwwLDB2NThjMCwwLjYsMC4yLDEuMSwwLjYsMS42bDcsN2MwLjQsMC40
                                 LDAuNywxLDAuNywxLjZ2NThjMCw1LjEsNC4yLDkuMyw5LjMsOS4zYzAsMCwwLDAsMCwwaDU4LjIgYzA
                                 uNiwwLDEuMSwwLjIsMS42LDAuNmw3LDdjMC40LDAuNCwxLDAuNiwxLjYsMC42aDU4LjJjNS4xLDAsOS
                                 4zLTQuMSw5LjMtOS4zYzAsMCwwLDAsMCwwbDAsMHYtNThjMC0wLjYtMC4yLTEuMS0wLjYtMS42bC03L
                                 TcgQzE0NS40LDc2LjcsMTQ1LjEsNzYuMiwxNDUuMSw3NS42eiBNMTA1LjYsMTA2LjZINDcuOWMtMC43
                                 LDAtMS4zLTAuNi0xLjMtMS4zVjQ3LjdjMC0wLjcsMC42LTEuMywxLjMtMS4zaDU3LjcgYzAuNywwLDE
                                 uMywwLjYsMS4zLDEuM3Y1Ny42QzEwNywxMDYsMTA2LjQsMTA2LjYsMTA1LjYsMTA2LjZ6Ii8+PC9zdmc+Cg=="
                                 alt=""/>
                        </div>
                        <div className={classes.metaMaskTitle}>
                            Frame
                        </div>
                    </div>
                    <img className={classes.vectorRight} src="/icons/vector-right.svg" alt=""/>
                </div>
                <div onClick={() => connectWallet('coinbasewallet')} className={classes.metaMaskMainSec}>
                    <div className={classes.metaMaskLogoMain}>
                        <div className={classes.metaMaskLogoSec}>
                            <img className={classes.coinbasewalletLogo}
                                 src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRG
                                 LTgiPz4KPHN2ZyB3aWR0aD0iMzgzcHgiIGhlaWdodD0iMzgzcHgiIHZpZXdCb3g9IjAgMCAzODM
                                 gMzgzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG
                                 1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lc
                                 mF0b3I6IFNrZXRjaCA1NC4xICg3NjQ5MCkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAg
                                 ICA8dGl0bGU+Q29pbmJhc2UgV2FsbGV0IFNESzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIH
                                 dpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiI
                                 Hg9IjAiIHk9IjAiIHdpZHRoPSIzODMiIGhlaWdodD0iMzgzIiByeD0iNjQiPjwvcmVjdD4KICAg
                                 ICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjQ5Ljk5OTk5MzglIiB5MT0iMCUiIHgyPSI0OS45OTk
                                 5OTM4JSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0zIj4KICAgICAgICAgICAgPHN0b3
                                 Agc3RvcC1jb2xvcj0iIzJFNjZGOCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c
                                 3RvcCBzdG9wLWNvbG9yPSIjMTI0QURCIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L
                                 2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub
                                 25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgI
                                 CAgICAgPGcgaWQ9ImNvaW5iYXNld2FsbGV0Ij4KICAgICAgICAgICAgPGcgaWQ9IlBhdGgiPgogI
                                 CAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgI
                                 CAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgI
                                 CA8L21hc2s+CiAgICAgICAgICAgICAgICA8cmVjdCBzdHJva2U9IiM5Nzk3OTciIHg9IjAuNSIge
                                 T0iMC41IiB3aWR0aD0iMzgyIiBoZWlnaHQ9IjM4MiIgcng9IjY0Ij48L3JlY3Q+CiAgICAgICAgI
                                 CAgICAgICA8cG9seWdvbiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTMpIiBmaWxsLXJ1bGU9I
                                 m5vbnplcm8iIG1hc2s9InVybCgjbWFzay0yKSIgcG9pbnRzPSIwIDAgMzgzIDAgMzgzIDM4NCAwI
                                 DM4NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02M
                                 C4xMDc0LDE5MS41NzIgQzYwLjEwNzQsMjY0Ljk2NiAxMTkuNjA1LDMyNC40NjMgMTkyLjk5OCwzM
                                 jQuNDYzIEMyNjYuMzkyLDMyNC40NjMgMzI1Ljg4OSwyNjQuOTY2IDMyNS44ODksMTkxLjU3MiBDM
                                 zI1Ljg4OSwxMTguMTc5IDI2Ni4zOTIsNTguNjgxNiAxOTIuOTk4LDU4LjY4MTYgQzExOS42MDUsN
                                 TguNjgxNiA2MC4xMDc0LDExOC4xNzkgNjAuMTA3NCwxOTEuNTcyIFogTTE1OS4wMzcsMTQ4Ljc1M
                                 iBDMTU0LjE0NCwxNDguNzUyIDE1MC4xNzgsMTUyLjcxOCAxNTAuMTc4LDE1Ny42MTEgTDE1MC4xN
                                 zgsMjI1LjUzMyBDMTUwLjE3OCwyMzAuNDI2IDE1NC4xNDQsMjM0LjM5MyAxNTkuMDM3LDIzNC4zO
                                 TMgTDIyNi45NTksMjM0LjM5MyBDMjMxLjg1MiwyMzQuMzkzIDIzNS44MTgsMjMwLjQyNiAyMzUuO
                                 DE4LDIyNS41MzMgTDIzNS44MTgsMTU3LjYxMSBDMjM1LjgxOCwxNTIuNzE4IDIzMS44NTIsMTQ4L
                                 jc1MiAyMjYuOTU5LDE0OC43NTIgTDE1OS4wMzcsMTQ4Ljc1MiBaIiBpZD0iU2hhcGUiIGZpbGw9I
                                 iNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                                 alt=""/>
                        </div>
                        <div className={classes.metaMaskTitle}>
                            Coinbase
                        </div>
                    </div>
                    <img className={classes.vectorRight} src="/icons/vector-right.svg" alt=""/>
                </div>
                <div className={classes.moreInfoMainSec}>
                    <div className={classes.noAccSec}>
                        Don’t have an account?
                    </div>
                </div>
                <div className={classes.bottomMainSec}>
                    <div className={classes.downloadMainSec}>
                        <div className={classes.downloadIconSec}>
                            <img className={classes.downloadIcon} src="/icons/download-icon.svg" alt=""/>
                        </div>
                        <div className={classes.creatWalletTxt}>
                            Download extension
                        </div>
                    </div>
                    <div>
                        <img className={classes.vectorRight2} src="/icons/vector-right.svg" alt=""/>
                    </div>
                    <div className={classes.createWalletSec}>
                        <div className={classes.walletIconSec}>
                            <img className={classes.walletIcon} src="/icons/wallet-icon.svg" alt=""/>
                        </div>
                        <div className={classes.creatWalletTxt}>
                            Create wallet
                        </div>
                    </div>
                    <div>
                        <img className={classes.vectorRight2} src="/icons/vector-right.svg" alt=""/>
                    </div>
                    <div className={classes.refreshSec}>
                        <div className={classes.refreshIconSec}>
                            <img className={classes.refreshIcon} src="/icons/refresh-icon.svg" alt=""/>
                        </div>
                        <div className={classes.creatWalletTxt}>
                            Refresh web page
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
