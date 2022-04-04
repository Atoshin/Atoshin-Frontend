import classes from '../styles/FAQ/FAQ.module.scss'
import {Collapse} from "@mui/material";
import {useEffect, useState} from "react";
import Head from "next/head";
import * as React from "react";

export default function FAQ() {
    const [state, setState] = useState({})

    console.log(state)

    const qAndAs = [
        {
            question: 'What is a Non-Fungible Token (NFT)?',
            answer: 'NFTs are digital certificates that establish and authenticate ownership of an asset and place it on the Blockchain network which makes them immutable, easily verifiable, and secure.  Think of them as digital deeds establishing the ownership of an asset.\n' +
                'The term "non-fungible token" refers to a token that is not fungible. It does sound technical, however, simply put NFTs are nothing more than digital certificates of authenticity.\n' +
                'When you buy a tangible asset being it artwork, a music CD, a movie or even an automobile you can tell it\'s genuine since the information about it is easily verifiable and can be seen. Digital assets are different in that at one level they are represented by code which is then addresses them as combinations of 0s, and 1s.  At other levels they are seen on your computer or mobile or TV screen and at another level the way they are put together determines their full character, such as JPEG, MPEG,… which are methods of compression used for digital codes.\n' +
                'Also, unlike other assets digital assets do not provide information about who owns them and where they were created.\n' +
                'NFTs are similar to digital signatures: They verify who owns digital assets such as art, collectibles, music, films, in-game assets, and more. They document the same things that physical certificates do:\n' +
                'Who designed it?\n' +
                'When was it created?\n' +
                'Who purchased it? (and when)\n' +
                'The price(s) at which it was sold\n' +
                'Who currently owns it?\n' +
                '(Technically, NFTs can contain any data the developer desires, but the information above is the most important.)\n' +
                'All of this is made public via a blockchain, so anyone (including your investment advisors or friends) can track each of your NFTs from the original originator all the way to your wallet and verify their legitimacy.\n' +
                'Some NFTs give premium access to software items, grant access to restricted communities, allow you to contribute to projects, and unlock digital (or real) experiences.\n' +
                'NFTs offered at ATOSHIN are for digital assets (artwork, games, music,…) and also for actual physical artwork!  Yes, ATOSHIN allows Museums and galleries with permanent collections to create a digital certificate of ownership or a deed for their art work, transfer the ownership of that artwork to their Digital Wallets and then sell fractions to anyone who wants to own an NFT of a masterpiece!\n' +
                'ATOSHIN also allows artists and collectors of Digital Assets to create, sell and trade their NFTs on its platform.\n' +
                'So the key characteristic of NFTs is that they are put on a Blockchain network, so what is a blockchain, and how does it work?\n' +
                '\n' +
                'A blockchain is a network of computers that keeps track of transactions and creates a massive database of who owns what. This network which is based on sophisticated authentication processes is distributed globally and once a data set is accepted by it (Minted) then it will not allow any change to it!\n' +
                '\n' +
                'So, if you buy an NFT on ATOSHIN it gets registered on the largest and most used Blockchain network called Ethereum and on those computers all over the world will validate that you are the new owner of the NFT—and that it stays in your wallet.\n' +
                'NFTs can be found on the following blockchains:\n' +
                'Flow\n' +
                'Tezos\n' +
                'Polygon\n' +
                'Ethereum\n' +
                'Solana\n' +
                'ATOSHIN’s NFTs are put on Ethereum Blockchain for the time being and soon will be also offered on Polygon.\n'
        },{
            question: 'What exactly is a wallet? What\'s the point of having one?',
            answer: 'Your physical wallet most likely contains cash, identification, and other forms of identification or credit cards.\n' +
                'On a blockchain, your crypto wallet performs  pretty much the same function as your physical wallet. It contains an "ID" (a long string of numbers and letters), as well as your cryptocurrencies and any NFTs you purchased with them. There are many wallet providers, including Metamask the most popular and user-friendly which we use at ATOSHIN.\n' +
                '\n' +
                'When you create a cryptocurrency wallet, you\'ll be given a "seed phrase" – a string of words that will allow you to recover your coins or NFTs if you lose access.\n' +
                '\n' +
                'NEVER EVER EVER  give or share that seed phrase with anyone!   Anyone who knows your seed phrase has complete access to your wallet and has the ability to purchase, sell, or transfer any dollars or assets. ATOSHIN support, as well as any other legitimate entities, people or business, will never ask for your seed phrase.\n' +
                'You must connect your wallet to log in to transact with cryptocurrencies or NFTs on ATOSHIN or anywhere else.\n' +
                'MetaMask, is the only available wallet on ATOSHIN but we will soon be allowing Rainbow, Coinbase, Fortmatic, Portis, and more wallet connect options on ATOSHIN in the coming months.\n' +
                'Wallets are Free of charge and do not cost you anything to use them.\n' +
                'MetaMask, which is available as a mobile app and a browser plugin, is one of the most popular Ethereum blockchain choices. \n'
        },{
            question: 'What is the cost of creating an NFT?',
            answer: 'You "mint" an NFT with a few clicks when you first create it, which may require you to pay a charge to the network (none of this goes to ATOSHIN).\n' +
                'The fees are determined by the blockchain and minting method. For minting, buying, and selling, blockchains levy a fee. Consider it similar to freeways for cars. Some of them are completely free. Others will charge you a toll, which might be inexpensive or costly.\n' +
                'Two interactions are required to create a new NFT:\n' +
                'Preparing your NFT\n' +
                'Putting your NFT on the market\n' +
                'Ethereum, as one of the most popular blockchains, has higher fees, however, don\'t let fees be the most significant aspect; the most important thing is minting where your audience\'s wallets are. Each chain has its own set of them.\n'
        },{
            question: 'What\'s the best way to get my first NFT on ATOSHIN?',
            answer: 'Buying Physical Art NFTs is just like buying the real thing! First you must like, then you can check out what the art world calls provenance: who is the artist, his history and backstory, valuations if any, location where it is permanently housed, and of course the price.\n' +
                'If the NFT has a set price, click "Buy" like you would in any online store. You can pay with crypto (you\'ll need some cryptocurrency in your wallet for the correct blockchain) and soon by a credit card.\n' +
                'Once our Auction site is ready you can Click "Place a bid" to bid on a timed auction, then follow the steps and hope you\'re the winner! \n' +
                'If you\'re not sure what to get, go to the Explore section of ATOSHIN and look around at the artwork offered by reputable museums and galleries and check out the artists and their work.\n' +
                'Remember once you own an ATOSHIN NFT you can always track the location of the art piece via GPS set on the artwork, and also view the art piece via live video feed anytime, anywhere that you have internet access.\n'
        },
    ]

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#FFFFFF';
        style.backgroundImage = 'none';
        //endregion
    }, [])


    return <div>
        <Head>
            <title>FAQ</title>
        </Head>
        <div className={classes.faqTitleSec}>
            <p className={classes.FAQ}>FAQ</p>
            <h1 className={classes.faqTitle}>Frequently Asked Questions</h1>
        </div>

        <div className={classes.QaContainer}>
            {qAndAs.map((q, idx) => {
                return <div key={idx} className={classes.item} onClick={() => setState({...state, [idx]: !state[idx]})}>
                    <div className={classes.number}>
                        {idx + 1}
                    </div>
                    <div className={classes.qMainSection}>
                        <h3 className={classes.question}>{q.question}</h3>
                        {state[idx] ?
                            <img src={"/icons/arrowDown.svg"} alt="" style={{marginRight: 15}}/>
                            :
                            <img src={"/icons/arrowRight.svg"} alt="" style={{marginRight: 15}}/>
                        }
                    </div>
                    <Collapse in={state[idx]}>
                        <div className={classes.answer}>{q.answer}</div>
                    </Collapse>
                </div>
            })}
        </div>
    </div>
}