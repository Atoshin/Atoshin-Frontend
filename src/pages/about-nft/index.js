import classes from '../../styles/AboutNft/AboutNft.module.scss'
import {Collapse} from "@mui/material";
import {useEffect, useState} from "react";
import Head from "next/head";
import * as React from "react";

export default function FAQ() {
    const [state, setState] = useState({})


    const qAndAs = [
        {
            question: 'First we need to describe what is an NFT?',
            answer: 'Non-fungible tokens, or NFTs, herald a new era of decentralized and transparent asset ownership. One of the most distinguishing characteristics of NFTs is the promise of exclusive ownership. An NFT is a one-of-a-kind token that cannot be duplicated or fabricated.\n' +
                'This exclusivity, on the other hand, greatly restricts what NFT holders can do with their assets. As a result, innovators in the industry are pushing the boundaries of what\'s feasible for NFTs, including fractional ownership alternatives.\n' +
                'Fractionalization allows crypto investors to possess a little piece of a larger pie while minimizing the risk of being duped. It\'s analogous to having stock in a corporation. It allows small and mid-tier investors to own NFTs instead of merely whales with deep pockets.\n'
        }, {
            question: 'So What Is a Fractional NFT?',
            answer: 'A fractional NFT is a full NFT that has been divided into smaller fractions, allowing multiple people to claim ownership of the same NFT. A smart contract is used to fractionalize the NFT, which generates a specified number of tokens tied to the indivisible original. These fractional tokens are sold or exchanged on secondary marketplaces and provide each holder a share of ownership in an NFT.\n' +
                'Non-fungible tokens (or NFTs) are ERC-721 tokens created on the Ethereum blockchain by an indivisible smart contract. The tokens are ideal for tracing individual intellectual property because they are indivisible and impossible to duplicate.\n' +
                'Multiple record-setting auctions of NFT projects propelled NFT assets to new heights in 2021.\n' +
                'Digital art, in-game objects, virtual real estate, and a slew of other virtual assets are among them.\n' +
                'The most expensive was the $69 million sale of digital artist Beeple\'s work Everydays: The First 5000 Days at Christie\'s auction house in February 2021. That historic transaction paved the way for a slew of new NFT ventures, like CryptoPunks\' NFT avatars and Bored Ape Yacht Club\'s NFT avatars, some of which are now worth millions of dollars on secondary market.\n'
        },
        {
            question: 'Why ATOSHIN platform is the best for physical art & asset  fractional ownership?',
            answer: <>
                <div style={{
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '25px',
                }}>“I wish I could own a Monet! Only if I lived when he did and where he did!” this is what many of us
                    would say when see one of Monet’s masterpieces. Well with ATOSHIN fractional ownership tokens you
                    may be able to own a “piece” of Monet!
                </div>
                <div>
                    ATOSHIN is a platform that offers fractionalized NFTs for Physical Art. It is unique in its approach
                    since it provides for a digital title for an artpiece which is placed on the Blockchain and then
                    through its smart contract it offers fractional ownership of that art piece.<br/>
                    ATOSHIN is unique in that it provides for physical location certainty, security and always visible
                    access to the art pieces that are fractionalized on its site.
                    The Museums, and permanent collections agree to create fractionalize NFTS by commiting a digital
                    deed/title of their art piece to be put on the blockchain which makes it immutable and permanent.
                    That title (to the art piece) is then divided between the buyers of the NFT with the Museum or the
                    Gallery owning some of it also.<br/>
                    The location of the artpiece is always known because a GPS is attached to it and a video stream
                    allows for the owners of the NFT to see their investment from anywhere and on any device that is
                    connected to the internet.<br/>
                    All the attributes such as location and accessibility will be permenantly assigned and
                    non-changeable. So the Museum or the gallery can never sell or change the location of the art piece
                    that has been sold at ATOSHIN without the consent of 100% owners of the NFTs for that art piece.
                </div>
            </>
        },
        {
            question: 'Making NFT Ownership More Accessible',
            answer: 'NFTs have exploded in prominence as a rising asset class. Some collections have grown in value to the point that possessing a single NFT is too expensive. While not every NFT collection has the notoriety of Beeple\'s paintings or the cartoon ape avatars from Bored Ape Yacht Club, the ones that are worth collecting can be extremely expensive. It also doesn\'t help that NFTs are one-of-a-kind tokens, making them difficult to acquire on crypto marketplaces due to a lack of liquidity.\n' +
                'With such high entrance hurdles, fractionalization could be a viable solution to all of these issues. Breaking down an NFT into smaller pieces democratizes this new market, making it more accessible to those with little financial resources. This benefits not only investors, but also NFTs in general, because it increases market liquidity. Fractional NFTs flood the market with a large number of low-cost tokens that give you a piece of popular NFTs.Essentially, buyers with limited funds are able to buy fractional NFTs for a small proportion of the total market value. This enables multiple investors to each gain partial ownership of the same asset.\n' +
                'The physics of fractionalization are straightforward: Take a whole NFT and divide it into a predetermined number of shares (1,000, 10,000, or even 10 billion) that are sold at a predetermined price. On secondary markets, these shares can be purchased and sold without affecting the value of the original NFT. The sale of NFT art by musician Grimes named Newborn 1 & 3, which was auctioned  in July 2021 with prices starting at $10 per share, is a well-known example of fractionalization in this domain.  \n' +
                'Another well-known example is the selling of an NFT of the famed "Doge" meme, which spawned the meme cryptocurrency Dogecoin. In June 2021, an NFT of the meme sold for $4 million (it\'s currently worth several hundred million dollars). PleasrDAO, the buyer, fractionalized the NFT 17 billion times, making it possible for everyone to own a piece of it for pennies.\n'
        },
        {
            question: 'Fractionalized Assets',
            // answer: 'include image'
            answer: <div className={classes.realBenefits}>
                <div style={{marginBottom: 16}}>
                    Asset fractional ownership  isn&apos;t a new concept. The concept has been successfully used in a variety
                    of industries, from real estate to fashion, and for a variety of physical assets, including stock,
                    designer items, and high-end assets such as yachts and private jets.
                </div>
                <div className={classes.imageSec}><img className={classes.image} src={'/images/the-dog-nft.png'}/></div>
                <div style={{
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '300;',
                    lineHeight: '25px',
                    marginBottom: 16,
                    textAlign: 'center'
                }}>The Doge NFT was fractionalized into 17 billion tokens called DOG. Image source: Fractional.art
                </div>
                <div style={{marginBottom: 24}}>
                    Fractionalization is a popular strategy for groups of individuals to affordably purchase holiday
                    homes in the real estate business. Owners who purchase fractional ownership of a property receive a
                    deed indicating their part, as opposed to a timeshare, which simply promises a certain period of
                    time at a property every year.
                    All of the benefits and costs that come with owning property are shared by fractional owners. The
                    revenue, usage rights, and access to the shared property are split proportionally to the percentage
                    of the asset that each coowner owns. Individual shares will improve in value if the vacation home&apos;s
                    total value increases over a decade. Of course, if the value of the property depreciates, the value
                    of the shares will likewise depreciate.
                </div>
            </div>
        },
        {
            question: 'How Does NFT Fractionalization Work?',
            answer: 'An NFT is essentially a token that follows Ethereum\'s ERC-721 standard. Before the NFT can be fractionalized, it must first be locked in a smart contract, which is a blockchain-based software that is written to operate automatically when certain circumstances are satisfied.\n' +
                'Based on the instructions provided by the NFT owner, the smart contract splits the ERC-721 token into numerous fractions in the form of ERC-20 tokens. The owner specifies the quantity of ERC-20 tokens to be produced, as well as their price, metadata, and other characteristics. Each fraction, or ERC-20 token, represents a portion of the NFT\'s ownership. After that, the fractions are put up for sale at a xed price for a defined amount of time, or until they\'re all gone.\n' +
                'Imagine if we could fractionalize the classic work The Scream by Norwegian artist Edvard Munch, which sold for about $120 million at Sotheby\'s in 2011. An NFT representing the artwork would be extremely expensive, and only a few affluent investors would be able to bid on it. However, if an NFT of The Scream was fractionalized into 10,000 ERC-20 tokens via a smart contract, it would be possible to purchase a fraction of the famous artwork for just $12,000 each, making it far more accessible and attracting buyers.\n' +
                'It\'s worth noting that NFTs and fractionalized NFTs are not exclusive to the Ethereum network. Any blockchain network that supports smart contracts and NFTs can use fractionalization. Smart contracts are supported by alternative networks such as Polygon (MATIC), Cardano (ADA), and Solana (SOL), which can help with the production and transfer of NFTs. Fast transaction speeds and no gas prices are also advantages of these networks.\n'
        },
        {
            question: 'What are the real benefits of fractionalized NFTs?',
            answer: <div className={classes.realBenefits}>
                <div style={{marginBottom: 8}}>F-NFTs are of value for three primary reasons:</div>
                <div style={{marginBottom: 16}}>1. Smaller investors may be unable to participate due to the excessive
                    pricing of some NFTs. Fractionalizing a costly NFT lowers ownership expenses and opens it up to a
                    wider group of investors. It&apos;s also worth noting that when the price of an NFT rises, the value of
                    all of its fractions climbs in lockstep. If its value falls abruptly, as it often does in the crypto
                    market, the value of all fractions falls with it.
                </div>
                <div style={{marginBottom: 16}}>2. Price discovery: Fractionalized NFTs can give mechanisms for
                    determining how much a specific NFT is worth. Because fractionalized ERC-20 tokens are traded on the
                    open market, their prices can aid in determining the price of a tokenized asset.
                </div>
                <div style={{marginBottom: 24}}>3. More liquidity: One of the most distinguishing characteristics of
                    NFTs is that they are one-of-a-kind tokens that cannot be duplicated or divided. Only a few wealthy
                    investors have access to NFTs, especially the most valuable ones, due to their rarity. Because
                    ERC-20 tokens may be freely sold in secondary markets, F-NFTs alleviate this lack of liquidity.
                    Rather of waiting weeks or months for a single NFT to sell, many investors may be more eager to
                    acquire fractions of an NFT right away, at a lower price, addressing market liquidity difficulties.
                </div>
            </div>,
        },
        {
            question: 'How about Fractionalized NFTs as Investments?',
            answer: 'NFTs that are fractional are unquestionably a solid investment. They\'re assisting in the unlocking of liquidity for NFTs, as well as improving participation and inclusiveness in the burgeoning NFT market. They open up new opportunities for the NFT market by delivering liquidity, price discovery, and democratization.\n' +
                'Fractionalized NFTs, are not without risk: They confront the same challenges that beset NFTs in general, such as publicity rights, contracts, and intellectual property rights. Furthermore, while the sale and acquisition of complete NFTs as digital collectibles may not be in violation of securities laws, the creation of F-NFTs is more likely to raise red flags with financial regulators, as their creation might be considered as improper initial coin offerings (ICOs).\n' +
                'SEC Commissioner Hester Peirce warned at the Security Token Summit 2021 that fractional NFTs could be considered securities. However, the Securities and Exchange Commission (SEC) of the United States has yet to issue any explicit legislative or regulatory guidelines on NFTs.\n' +
                'As the market for NFTs and F-NFTs grows, so will the legal laws governing the assets. \n'
        },
        {
            question: 'Final Words on NFT Fractionalization',
            answer: 'The NFT industry continues to grow in popularity and demand, and as blockchain technology advances, we should expect to see even more fascinating advancements and application cases.\n' +
                'Fractional NFTs are still a new concept, but they appear to be the next big thing in the ever-growing crypto sector. NFT fractionalization allows for higher liquidity and, as a result, limitless investing ideas. It brings a significantly larger pool of investors into the market, assuring that F-NFTs will be at the forefront of the next wave of digital asset monetization. Find out more about how NFT loans work or NFT staking to learn more about investing in NFTs.\n'
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


    return <>
        <Head>
            <title>About NFT</title>
        </Head>
        <div style={{fontFamily: 'Roboto'}}>
            <div className={classes.faqTitleSec}>
                {/*<p className={classes.FAQ}>FAQ</p>*/}
                <h1 className={classes.faqTitle}>What is Fractional NFT?</h1>
            </div>
            <div className={classes.txt}>
                “Oh, how I wish I could shut up like a telescope! I think I could, if only I knew how to begin.” For, you
                see, so many out-of-the-way things had happened lately, that Alice had begun to think that very few things
                indeed were really impossible. —Chapter 1, Down the Rabbit-Hole-Alice in the Wonderland!
            </div>
            <div className={classes.QaContainer}>
                {qAndAs.map((q, idx) => {
                    return <div key={idx} className={classes.item} onClick={() => setState({...state, [idx]: !state[idx]})}>
                        <div className={classes.number}>
                            {idx + 1}
                        </div>
                        <div className={classes.qMainSection}>
                            <h3 className={classes.question}>{q.question}</h3>
                            {state ?
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
                <div className={classes.referencesTitle}>
                    References and Notes: We have greatly benefitted from the material provided in the following web sites
                    and research papers for the above information:
                </div>
                <div className={classes.url}>
                    https://learn.bybit.com/nft/what-are-fractional-nfts/
                </div>
                <div className={classes.referencesTxt}>
                    {` “Understanding Security Issues in the NFT Ecosystem Dipanjan” Das, Priyanka Bose, Nicola Ruaro,
                Christopher Kruegel, and Giovanni Vigna {dipanjan, priyanka, ruaronicola, chris, vigna}@cs.ucsb.edu
                University of California, Santa Barbara`}
                </div>
                <div className={classes.referencesTxt}>
                    “Non-Fungible Tokens (NFT)”. The Analysis of Risk and Return. Mieszko Mazur, IESEG School of Management
                    This version: 31 October 2021
                </div>
                <div className={classes.url}>
                    https://www.argent.xyz/learn/fractionalized-nfts/
                </div>
                <div className={classes.referencesTxt} style={{marginBottom:0}}>
                    https://hackernoon.com/fractionalized-nfts-are-the-future-of-fractionalized-assets
                </div>
            </div>
        </div>
    </>
}