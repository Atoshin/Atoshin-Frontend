import {useRouter} from 'next/router';
import axios from 'axios';
import {useEffect} from "react";
import {ethers} from "ethers";
import {nftAddress} from "../../../config";
import NFT from '../../../artifacts/contracts/NFT.sol/NFT.json'

export default function Mint(props) {
    const contractData = props.contracts
    const assetData = props.asset

    useEffect(() => {

        const mint = async () => {
            const urls = []
            for (let i = 0; i < contractData.length; i++) {
                urls.push(contractData[i].hash)
            }
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            let contract = new ethers.Contract(nftAddress, NFT.abi, signer)
            let transaction = await contract.createTokens(urls)
            let tx = await transaction.wait()
            let event = tx.events[0]
            let value = event.args[2]
        }


        mint()
    }, [])

    return <div className="minting-page">
        {/*<p>asset title: {assetData.title}</p>*/}
        {/*<img src={} alt=""/>*/}
    </div>
}


export async function getServerSideProps(ctx) {
    const assetId = ctx.params.assetId;
    const res = await axios.get(`http://localhost:8000/api/v1/asset/${assetId}/contracts`)

    return {
        props: res.data
    }
}