import classes from '../../styles/TermsAndConditions/TermsAndConditions.module.scss'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from '@mui/material';
import {useEffect} from 'react';
import * as React from 'react';

export default function TermsAndConditions() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#FFFFFF';
        style.backgroundImage = 'none';
        //endregion
    }, [])

    return (
        <>
            <div className={classes.pageTitle}>Terms and Conditions</div>
            <div className={classes.lastUpdate}>LAST UPDATED – March 2022</div>
            <div className={classes.firstP}>
                If you choose to utilize the Services and your visit to ATOSHIN.art, any privacy dispute are governed by
                this our Terms of Use and Privacy Protection listed on this Web site, which include restrictions on
                damages, dispute resolution, and the applicability of California law and European General Data
                Protection Rules.
            </div>
            <div className={classes.paragraphTitle}>
                Welcome
            </div>

            <div className={classes.paragraph}>NEEI LLC, Atoshin.com
                (&quot;ATOSHIN,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) makes its marketplace and
                services (described below) available to you (&quot;you&quot; or &quot;User&quot;) via its website,
                platform, and marketplace at www.ATOSHIN.art (the &quot;Platform&quot;), subject to the following Terms
                of Service (as amended from time to time, the &quot;Terms&quot;). You confirm that you have read and
                agree to these Terms by creating an account on the Platform or otherwise using or accessing the
                Platform. The User expressly agrees to and acknowledges the Privacy Policy and all other terms,
                guidelines, and rules set forth on the Platform, which are hereby incorporated by reference into these
                Terms. PLEASE READ THESE PLATFORM TERMS CAREFULLY, AS THEY CONTAIN AN ARBITRATION AGREEMENT AND OTHER
                IMPORTANT INFORMATION ABOUT YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS. THE ARBITRATION AGREEMENT
                REQUIRES (WITH LIMITED EXCEPTION) THAT YOU SUBMIT ANY CLAIMS YOU MAY HAVE AGAINST ATOSHIN TO BINDING AND
                FINAL ARBITRATION, AND FURTHER THAT (1) YOU WILL ONLY BE PERMITTED TO PURSUE CLAIMS AGAINST ATOSHIN ON
                AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION At any
                time, we reserve the right to update or modify elements of these Terms of Service at our sole
                discretion. If we do this, we will post the modifications on this page and mention the date these terms
                were last changed at the top of the page. We&apos;ll also let you know via the Platform&apos;s user
                interface, an
                email message, or some other appropriate way. Any such changes will take effect fourteen (14) days after
                they are posted, with the exception of changes addressing new Platform functions, which will take effect
                immediately. Continued use of the Platform after the effective date of any such modifications signifies
                acceptance of the amended Terms of Service.
            </div>
            <div className={classes.paragraphTitle}>
                What is the definition of ATOSHIN?
            </div>
            <div className={classes.paragraph}>
                ATOSHIN is a platform that allows Museums, Permanent collection and artists (&quot;Creators&quot;) and
                collectors (&quot;Collectors&quot;) to sell, buy, list for auction, make offers, and bid on Non-fungible
                tokens(NFTs) for Physical arts and collectibles, digital art that is represented by non-fungible
                Ethereum-based tokens (&ldquo;Physical Assets&rdquo; &amp; &quot;Digital Artwork&quot;). Smart-Contract
                Supporting the NFTs on ATOSHIN is represented on the Ethereum blockchain through smart contracts, which
                offer an immutable ledger of all ATOSHIN transactions (&quot;Smart Contracts&quot;). This means that all
                Physical Assets and Digital Artwork is uncontrollable by any single entity, including ATOSHIN, and is
                susceptible to several dangers and uncertainties. MetaMask, Coinbase, the Ethereum network, your
                browser, or any other third-party site, product, or service that you could access, visit, or utilize to
                enable you to enjoy the Platform&apos;s different features are not owned or controlled by us. We will
                not be
                liable for any damage you may incur as a result of your transactions or other interactions with such
                third parties, nor will we be liable for any acts or omissions of such third parties. The User
                acknowledges that every time you engage in a transaction on the Platform, your Ethereum public address
                will be made publicly visible.
                <div style={{fontWeight: 700}}>Noncustodial:</div>
                While ATOSHIN provides a NFT for Physical Assets and digital art marketplace, it does not buy, sell, or
                otherwise take custody or possession of any Physical or digital art. The Platform makes it easier for
                Users to acquire NFTs for Physical Assets or Digital Artwork, but neither the NEEI LLC, nor the Platform
                are responsible for any Physical Asset or Digital Artwork. The User recognizes and accepts that the
                Smart Contracts do not give the ATOSHIN custody, possession, or control of any Physical Asset or Digital
                Artwork or cryptocurrency at any time for the purpose of conducting Platform transactions. You confirm
                that you are aware and acknowledge that ATOSHIN is a non-custodial service provider who has built this
                Platform to be directly accessible by Users without ATOSHIN or any third-party involvement or
                activities. ATOSHIN, as a marketplace, cannot guarantee or indicate that Creators will achieve any
                certain result as a result of listing their NFTs for Physical Assets or Digital Artwork on ATOSHIN.
            </div>
            <div className={classes.paragraphTitle}>
                What is the best way to apply ATOSHIN?
            </div>
            <div className={classes.paragraph}>
                <div style={{fontWeight: 700}}> Your Registration Requirements:</div>
                Anyone can browse ATOSHIN without having to create an account. To access and use specific Platform
                services, such as engaging as a Creator or Collector, you may need to register with ATOSHIN. You
                undertake to submit and maintain true, accurate, current, and complete information about yourself as
                required by our registration form if you choose to register for the Platform. Our Privacy Policy governs
                your registration data as well as certain other personal information. To register as a Creator, you must
                be at least 13 years old, and you must be at least 18 years old to bid on any Digital Artwork. You must
                have the express approval of a parent or legal guardian who can accept these Terms on your behalf if you
                are between the ages of 13 and 18. You are responsible for anything that happens when someone else uses
                your account, as well as the account&apos;s security.
                <div style={{fontWeight: 700}}> Member Account, Password, and Security:</div>
                You are solely responsible for the security of your account and password, if any, and for any and all
                activities carried out under your password or account. When visiting ATOSHIN, you undertake to (a)
                promptly notify ATOSHIN of any unauthorized use of your password or account, or any other security
                breach, and (b) ensure that you leave from your account at the conclusion of each session. ATOSHIN will
                not be held liable for any loss or damage incurred as a result of your failure to comply with this
                Section.
                <div style={{fontWeight: 700}}> Connecting your Wallet:</div>
                To engage in the marketplace as a Creator or Collector, you must first connect to MetaMask, a browser
                plugin. MetaMask is an electronic wallet that lets you to buy, store, and conduct transactions with the
                Ethereum native money, ETH. The native Ethereum cryptocurrency, ETH, is used for all ATOSHIN
                transactions.
                <div style={{fontWeight: 700}}> Modifications to the Platform:</div>
                The ATOSHIN retains the right, with or without warning, to modify or discontinue the Platform (or any
                portion of it) temporarily or permanently. You agree that ATOSHIN will not be liable to you or any third
                person if the Platform is modified, suspended, or discontinued.
            </div>
            <div className={classes.paragraphTitle}>What are the ATOSHIN&apos;s guidelines?</div>
            <div style={{
                fontSize: 14,
                fontWeight: 400,
                textAlign: 'justify',
                color: '#232323',
                marginBottom: 10
            }}>
                When utilizing ATOSHIN, no User is permitted to do the following:
            </div>
            {/*<div className={classes.guidelinesItem}>*/}
            {/*    tamper with the price of a NFT for Physical Asset or Digital Artwork in any manner, including bidding on*/}
            {/*    your own things, restricting bids, or hiding economic activities with ATOSHIN.*/}
            {/*</div>*/}
            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    tamper with the price of a NFT for Physical Asset or Digital Artwork in any manner, including
                    bidding on
                    your own things, restricting bids, or hiding economic activities with ATOSHIN.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>send or otherwise upload any content that (i) infringes on any
                    party&apos;s intellectual property or other proprietary rights; (ii) you don&apos;t have a legal or
                    contractual or fiduciary right to post; (iv) constitutes unsolicited or unauthorized advertising,
                    promotional materials, commercial activities and/or sales, &quot;junk
                    mail,&quot; &quot;spam,&quot; &quot;chain letters,&quot; &quot;pyramid
                    schemes,&quot; &quot;contests,&quot; &quot;sweepstakes,&quot; or an equivalent; (v) constitutes
                    unsolicited or unauthorized advertising, promotional materials, commercial activities and/or
                    sales, &quot;junk mail,&quot; &quot;spam,&quot; &quot;chain letters,&quot; &quot;pyramid
                    schemes,&quot; &quot;contests,&quot; &quot;sweep
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    interfere with or disrupt the Platform, its servers or networks, or disobey any requirements,
                    procedures, rules, or regulations of networks linked to the Platform; or
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    breach any applicable local, state, national, or international law, or any laws with legal force,
                    including but not limited to the Office of Foreign Assets Control (&quot;OFAC&quot;) of the United
                    States
                    Department of Treasury, or include proceeds of any illicit action;
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    impersonate someone or something, or fraudulently assert or otherwise misrepresent your affiliation
                    with someone or something;
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    ask anyone under the age of 18 for personal information;
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    use electronic or other means to harvest or collect email addresses or other contact information
                    from other Users on the Platform for the purpose of sending unsolicited emails or other
                    communications;
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    sell or acquire any goods or services for any business purpose that isn&apos;t officially approved;
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    support or promote any criminal activity or enterprise, or offer instructional material on illegal
                    activities, including to hide economic activity, launder money, or finance terrorism;
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    access or attempt to access or gain any items or information through any means other than those made
                    available or provided for by the Platform;
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    retrieve or index any portion of the Platform or the material posted on the Platform, or gather
                    information about its Users for any unlawful purpose, using any robot, spider, site search/retrieval
                    program, or other technology;
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    establish user accounts by automated means or on the basis of inaccurate or fraudulent information;
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    access or use the Platform in order to develop a product or service that is competitive with any of
                    ours.
                </div>
            </div>

            <div className={classes.paragraphTitle}>
                What steps do I need to take to become a creator?
            </div>
            <div className={classes.paragraph}>
                To join ATOSHIN as a Creator, Museums, Permanent collections and artists must first get an invitation.
                It is definitely forbidden to sell invitations in exchange for ETH or any other favor. ATOSHIN may
                suspend or cancel your access to ATOSHIN if it becomes aware that any invitation is being sold to a
                third party.
                Even if ATOSHIN sought the request, ATOSHIN retains total discretion in selecting the artists in its
                marketplace and offers no guarantees or promises that any artists will be authorized as Creators.
            </div>
            <div className={classes.paragraphTitle}>
                What are the Platform&apos;s intellectual property rights?
            </div>
            <div style={{
                fontSize: 18,
                fontWeight: 500,
                textAlign: 'left',
                marginTop: 2,
                marginBottom: 8
            }}>
                Rights of the Creator
            </div>
            <div className={classes.paragraph} style={{marginBottom: 10}}>
                All intellectual property rights underlying Physical Asset or the Digital Artwork created by the Creator
                on the Platform, including but not limited to copyrights and trademarks, are owned by the Creator. The
                Creator has the right to reproduce, generate derivative Digital Artwork, distribute, and exhibit or
                perform the Physical Asset and or Digital Artwork as the copyright owner.
                Creators acknowledge, understand, and agree that selling a NFT for Physical Asset or Digital Artwork on
                ATOSHIN constitutes an express representation, warranty, and covenant that the Creator has not, will
                not, or will cause another to sell, tokenize, or create another cryptographic token representing a
                digital collectible for the same Physical Asset or Digital Artwork.
                The Creator acknowledges, understands, and agrees that launching a NFT for Physical Assets and or
                Digital Artwork on ATOSHIN constitutes an express and affirmative grant to ATOSHIN, its affiliates, and
                successors of a non-exclusive, world-wide, assignable, sublicensable, perpetual, and royalty-free
                license to make copies of, display, perform, reproduce, and distribute the representation of Physical
                Asset or Digital Artwork on any media now known or later discovered for the broad purpose of operating,
                promoting, sharing, and distributing the information about Physical Asset or Digital Artwork on any
                media.
                Creators expressly represent and warrant that their Physical Asset NFT or Digital Artwork listed on
                ATOSHIN only contains original content otherwise authorized for use by the Creator, and does not contain
                unlicensed or unauthorized copyrighted content, such as any imagery, design, audio, video, human
                likeness, or other unoriginal content not created by the Creator, not authorized for use by the Creator,
                not in the public domain, or otherwise without a valid claim of fair use.
            </div>
            <div style={{
                fontSize: 18,
                fontWeight: 500,
                textAlign: 'left',
                marginBottom: 8,
            }}>
                Rights of Collectors
            </div>
            <div className={classes.paragraph}>
                Collectors acquire a cryptographic token that serves as a piece of property representing the
                Creator&apos;s
                Physical Asset or portion thereof and Digital Artwork, but they do not own the creative work itself.
                Collectors may display and share the representation of the Physical Asset or Digital Artwork, but they
                do not have any legal ownership, right, or title to the copyrights, trademarks, or other intellectual
                property rights, with the exception of the limited license given by these Terms. Collectors acquire a
                limited, global, non-assignable, non-sublicensable, royalty-free permission to display the
                representation of the Physical Asset as provided in the NFT or Digital Artwork lawfully owned and
                properly obtained by the Collector upon purchasing an NFT on ATOSHIN.
                The Collector&apos;s limited license to display the Information about the Physical Asset including
                videos and
                photographs, Digital Artwork includes, but is not limited to, the right to display the Digital Artwork
                privately or publicly (i) for the purpose of promoting or sharing the Collector&apos;s purchase,
                ownership,
                or interest; (ii) for the purpose of sharing, promoting, discussing, or commenting on the NFT’s value;
                and (iii) on third-party marketplaces, exchanges, platforms, or applications in connection with an offer
                to sell, or trade, the NFT.
                Collectors have the right to sell, trade, transfer, or utilize their NFT, but they are not permitted to
                use it for &quot;commercial purposes.&quot;
                Without the Creator&apos;s express prior written agreement in each circumstance, the Collector
                acknowledges
                that it may not do or attempt to do any of the following, nor may it permit any third party to do so:
                (i) use the NFT and or its related information and content in connection with images, videos, or other
                forms of media that depict hatred, intolerance, violence, cruelty, or anything else that could
                reasonably be found to constitute hate speech or otherwise infringe; (ii) use the NFT or its related
                information and content to advertise, market, or sell any third-party product or service; (iii) use the
                Digital Artwork in connection with images, videos, or other forms of media that depict hatred,
                intolerance, violence, cruelty, or anything (iv) use the NFT and or its related information and content
                for commercial purposes in movies, videos, video games, or other forms of media, save to the extent that
                such use is specifically approved by these Terms or solely for your Collector&apos;s personal,
                non-commercial
                use; (v) sell, distribute for profit, or otherwise commercialize merchandise that includes, contains, or
                consists of the NFT and or its related information and content ; (vi) attempt to trademark, copyright,
                or otherwise acquire additional intellectual property rights in or to the NFT and or its related
                information and content ; (vii) attempt to mint, tokenize, or create an additional cryptographic token
                representing the same Physical Asset or Digital Artwork, whether on or off the ATOSHIN Platform; (viii)
                falsify, misrepresent, or conceal the Physical Asset or Digital Artwork;
                Collectors release, acquit, and forever discharge NEEI, LLC and ATOSHIN, its subsidiaries, affiliates,
                executives, and successors from any and all liability for direct or indirect copyright or trademark
                infringement as a result of ATOSHIN&apos;s use of a Physical Asset or Digital Artwork in line with these
                Terms.
                <div style={{fontWeight: 700}}>Platform Information, Software, and Trademarks:</div>
                You acknowledge and agree that the Platform may contain copyright, patent, trademark, trade secret, or
                other proprietary rights and laws-protected content or features (&quot;Platform Content&quot;). You
                undertake not
                to modify, copy, frame, scrape, rent, lease, loan, sell, distribute, or create derivative works based on
                the Platform or Platform Content, in whole or in part, unless ATOSHIN expressly authorizes you to do so.
                You will not engage in or utilize any data mining, robots, scraping, or similar data collection or
                extraction activities in conjunction with your use of the Platform. If ATOSHIN prevents you from using
                the Platform (for example, by restricting your IP address), you undertake not to take any steps to
                circumvent this restriction (e.g., by masking your IP address or using a proxy IP address). Any use of
                the Platform or Platform Content that is not expressly permitted above is strictly prohibited. NEEI LLC,
                ATOSHIN, our affiliates, and our partners own the technology and software that underpins the Platform or
                is distributed in connection with it (the &quot;Software&quot;). You undertake not to duplicate, alter,
                adapt,
                translate, create a derivative work from, reverse engineer, reverse assemble, or otherwise seek to
                discover any source code, sell, assign, sublicense, or otherwise transfer any right in the Software.
                ATOSHIN reserves all rights not expressly granted herein.
                NEEI’s name, & Atoshin’s name and emblems are trademarks and service marks (collectively,
                the &quot;ATOSHIN
                Trademarks&quot;). Other company, product, and service names and logos that appear on the Platform may
                be
                trademarks or service marks of their respective owners, who may or may not endorse, be affiliated with,
                or be related to ATOSHIN. Without our prior written permission in each instance, nothing in these Terms
                of Service or the Platform should be regarded as providing, by implication, estoppel, or otherwise, any
                license or right to use any of the ATOSHIN Trademarks displayed on the Platform. All goodwill accrued as
                a result of the usage of ATOSHIN Trademarks will be used solely for our benefit.
                <div style={{fontWeight: 700}}>Third-Party Material:</div>
                ATOSHIN will not be liable in any way for any third-party (including user) content or materials,
                including, but not limited to, any mistakes or omissions in any content, or any loss or damage of any
                kind incurred as a consequence of the use of any such content. You recognize that ATOSHIN does not
                pre-screen content, but that ATOSHIN and its designees will have the right (but not the obligation) to
                decline or delete any content made available through the Platform in their sole discretion. Without
                limiting the foregoing, ATOSHIN and its designees will have the right to delete any content that
                violates these Terms of Service or that Platform deems to be otherwise objectionable in its sole
                discretion. You agree to assess and assume all risks associated with the use of any content and the
                purchase of any NFT for Physical Assets or Digital Artwork, including any reliance on such
                content&apos;s
                accuracy, completeness, or usefulness.
                <div style={{fontWeight: 700}}>User Content Transmitted Through the Platform:</div>
                You represent and warrant that you own all right, title, and interest in and to the content, Digital
                Artwork, or other materials you upload through the Platform or share with other users or recipients
                (collectively, &quot;User Content&quot;), including, without limitation, all copyrights and rights of
                publicity
                contained therein. By uploading any User Content, you grant and will grant ATOSHIN and its affiliated
                companies a nonexclusive, worldwide, royalty-free, fully paid up, transferable, sublicensable,
                perpetual, irrevocable license to copy, display, upload, perform, distribute, store, modify, and
                otherwise use your User Content in connection with the Platform&apos;s operation, promotion,
                advertising, and
                marketing in any form, medium, or technology now known or later developed.
                Any questions, comments, suggestions, ideas, feedback, or other information you provide to ATOSHIN about
                the Platform (&quot;Submissions&quot;) is non-confidential, and ATOSHIN will be entitled to use and
                disseminate
                these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to
                you.
                If required by law or in the good faith belief that such preservation or disclosure is reasonably
                necessary to: (a) comply with legal process, applicable laws, or government requests; (b) enforce these
                Terms of Service; (c) respond to claims that any content violates the rights of third parties; or (d)
                protect the rights, property, or personal safety of ATOSHIN, its users, or the public, ATOSHIN, its
                users, and the public may preserve and disclose content. You acknowledge that the Platform&apos;s
                technical
                processing and transmission, including your content, may entail (a) transmissions over multiple
                networks; and (b) adjustments to conform and adapt to technical requirements of connecting networks or
                devices.
                <div style={{fontWeight: 700}}>Copyright Complaints:</div>
                The ATOSHIN respects the intellectual property of others, and we expect our users to do so as well. If
                you believe your work has been duplicated in a way that constitutes copyright infringement or that your
                intellectual property rights have been violated in any other way, you should contact ATOSHIN via the
                procedure outlined below.
                With respect to any claimed or actual infringement, the ATOSHIN will process and investigate reports of
                alleged infringement and take necessary action under the Digital Millennium Copyright Act
                (&quot;DMCA&quot;) and
                other applicable intellectual property laws. A copyright infringement notification should be addressed
                to ATOSHIN&apos;s at Legal@atoshin.art (Subject line: &quot;DMCA Takedown Request&quot;).
                The notification must be in written and include the following details to be effective:
            </div>
            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    the signature of the person authorized to act on behalf of the owner of the copyright or other
                    intellectual property rights, whether electronic or physical;
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    a description of the allegedly infringed copyrighted work or other intellectual property;
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    a description of where the allegedly infringing material is located on the Platform, with enough
                    specificity that we can locate it;
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    your name, mailing address, phone number, and email address;
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    a statement from you that the disputed use is not authorized by the copyright or intellectual
                    property owner, its agent, or the law;
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    a statement signed under penalty of perjury that the above information in your Notice is correct and
                    that you are the copyright or intellectual property owner or authorized to act on behalf of the
                    copyright or intellectual property owner.
                </div>
            </div>
            <div className={classes.paragraph}>
                <div style={{fontWeight: 700}}>Counter-Notice:</div>
                If you believe your removed (or disabled) User Content is not infringing, or that you have permission
                from the copyright owner, the copyright owner&apos;s agent, or the law to upload and use the content in
                your
                User Content, you may send a written counter-notice to the Copyright Agent containing the following
                information:
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    your signature (physical or electronic);
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    the content that has been removed or to which access has been disabled, as well as the place where
                    the content was available before it was removed or disabled;
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    a statement if you believe the item was removed or disabled due to a mistake or misidentification of
                    the content; and
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    your name, address, phone number, and email address, as well as a statement that you consent to the
                    jurisdiction of the federal court in the State of Delaware and that you will accept serving of
                    process from the individual who reported the alleged infringement.
                </div>
            </div>
            <div className={classes.paragraph}>
                If the Copyright Agent receives a counter-notice, ATOSHIN will send a copy of the counter-notice to the
                original complaining party, alerting them that the removed content may be replaced or disabled in 10
                business days. The withdrawn content may be replaced, or access to it restored, in 10 to 14 business
                days or more following receipt of the counter-notice, at our exclusive discretion, unless the copyright
                owner launches an action seeking a court order against the content provider, member, or user.
                <div style={{fontWeigth: 700}}>Repeat Infringer Policy:</div>
                In compliance with the DMCA and other applicable law, ATOSHIN has adopted a policy of terminating Users
                who are found to be repeat infringers in suitable circumstances and at ATOSHIN&apos;s sole discretion.
                In
                addition, ATOSHIN may, in its sole discretion, restrict access to the Platform and/or terminate the
                memberships of any users who infringe on the intellectual property rights of others, whether or not the
                violation is repeated.
            </div>

            <div className={classes.paragraphTitle}>The user agrees to work with the ATOSHIN.</div>
            <div className={classes.paragraph}>
                Creators expressly agree to refund the entire portion of Fees received from the sale of an NFT for
                Physical Assets or Digital Artwork that was later removed from the Site as a result of an effective DMCA
                request for which the Creator failed to timely submit an effective DMCA Counternotification to the
                Collector and/or ATOSHIN. For deleting allegedly infringing works from the Platform or otherwise
                satisfying its legal obligations under the DMCA, the ATOSHIN will not be held accountable to any User.
                Creators, Collectors, and all Users expressly agree to assist with the ATOSHIN&apos;s investigations,
                requests, and enquiries relating to DMCA disputes or allegations of infringement, and to react in a
                timely manner. Users agree to conduct a &quot;burn&quot; transaction for the NFT of the Physical Asset
                or Digital
                Artwork that has been permanently removed from the ATOSHIN marketplace due to a valid DMCA Take-Down
                Notice, or that is otherwise suspected to be infringing, at ATOSHIN&apos;s request.
            </div>
            <div className={classes.paragraphTitle}>What are the ATOSHIN&apos;s fees?</div>
            <div className={classes.paragraph}>
                Auction. The Auctions&apos; terms and mechanics are detailed in our Help Center and are integrated into
                these
                Terms.
            </div>
            <div className={classes.paragraphTitle} style={{marginBottom: 10}}>
                Fees. The following are the fees for an initial sale NFT of a Physical Asset or of Digital Artwork on
                ATOSHIN:
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    In the case of an Initial Sale, creators receive 85% of the entire sale price.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    The ATOSHIN receives 15% of the entire sale price from an Initial Sale.
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 10}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    You acknowledge and agree that any fees, commissions, and royalties will be transferred, processed,
                    or triggered directly through one or more of the Ethereum blockchain network&apos;s smart contracts.
                </div>
            </div>
            <div className={classes.paragraph}>
                The following are the fees for a secondary sale of NFTs for Physical Assets or Digital Artwork on
                ATOSHIN:
            </div>
            <div className={classes.paragraphTitle} style={{marginBottom: 10}}>Fees. The following are the fees for an
                initial sale NFT of a Physical Asset or of Digital Artwork on ATOSHIN:
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    In the case of an Initial Sale, creators receive 85% of the entire sale price.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    The ATOSHIN receives 15% of the entire sale price from an Initial Sale.
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    You acknowledge and agree that any fees, commissions, and royalties will be transferred, processed,
                    or triggered directly through one or more of the Ethereum blockchain network&apos;s smart contracts.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    The following are the fees for a secondary sale of NFTs for Physical Assets or Digital Artwork on
                    ATOSHIN:
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    In a Secondary Transaction, the seller receives 90% of the entire sale price.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    In the case of a Secondary Sale, the Original Creator receives 6% of the total sale price.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    The ATOSHIN receives 4% of the entire sale price from a Secondary Sale.
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 10}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    You acknowledge and agree that any fees, commissions, and royalties will be transferred, processed,
                    or triggered directly through one or more of the Ethereum blockchain network&apos;s smart contracts.
                </div>
            </div>
            <div className={classes.paragraph}>For transactions that take place outside of ATOSHIN, no fees,
                commissions, or royalties are usually collected. Users release, acquit, and forever discharge ATOSHIN,
                its subsidiaries, affiliates, executives, and successors from any and all liability for royalties,
                fines, or fees not collected from any off-market transaction. Smart contracts on the Ethereum network
                facilitate all ATOSHIN transactions, including but not limited to minting, tokenizing, bidding, listing,
                offering, purchasing, or verifying. Every transaction that occurs on the Ethereum network, and thus
                every transaction that occurs on ATOSHIN, involves the payment of a transaction fee (a &quot;Gas
                fee&quot;). The value of the Gas Fee fluctuates, frequently unpredictably, and is completely outside
                ATOSHIN&apos;s control. The User agrees that a contract, agreement, offer, sale, bid, or other ATOSHIN
                transaction will not be invalidated, revocable, retractable, or otherwise unenforceable because the Gas
                Fee for the transaction was unknown, too expensive, or otherwise inappropriate. Taxes. Users are liable
                for all sales, use, value-added, and other taxes, fees, and levies now or in the future claimed or
                imposed by any governmental entity &quot;related with your use of ATOSHIN&quot; (including, without
                limitation, any taxes that may become payable as the result of your ownership, transfer, purchase, sale,
                or creation of any artworks). Platforms in beta. Certain ATOSHIN features may be available while they
                are still in &quot;beta&quot; version (&quot;Beta Platforms&quot;). By designating Beta Platforms on its
                Platform, the ATOSHIN will make every attempt to identify them. You understand and agree that the Beta
                Platforms are supplied as a &quot;Beta&quot; version and made available on a &quot;As
                Is&quot; or &quot;As Available&quot; basis by accepting these Terms or using the Beta Platforms. Bugs,
                mistakes, and other issues may exist on the Beta Platforms. YOU ASSUME ALL RISKS AND COSTS ASSOCIATED
                WITH YOUR USE OF THE BETA PLATFORMS, INCLUDING ANY INTERNET ACCESS FEES, BACK-UP EXPENSES, COSTS
                INCURRED FOR THE USE OF YOUR DEVICE AND PERIPHERALS, AND ANY DAMAGE TO ANY EQUIPMENT, SOFTWARE,
                INFORMATION, OR DATA. Furthermore, we are not bound to provide any Beta Platforms maintenance,
                technical, or other assistance.
            </div>
            <div className={classes.paragraphTitle}>What about my personal space?</div>
            <div className={classes.paragraph}>
                These Terms include our privacy policy. Please take a look at the ATOSHIN Privacy Policy, which also
                controls the Platform and informs Users about our data gathering methods.
            </div>
            <div className={classes.paragraphTitle}>Other Legal Terminologies</div>
            <div className={classes.paragraph}>
                You agree to release, indemnify, and hold NEEI LLC, ATOSHIN and its affiliates, as well as their
                officers, employees, directors, and agents (collectively, &quot;Indemnitees&quot;), harmless from any
                and all
                losses, damages, expenses, including reasonable attorneys&apos; fees, rights, claims, actions of any
                kind,
                and injury (including death) arising out of or relating to your use of the Platform, any User Content,
                your connection to the Platform, or your violation of these Terms and Conditions. Despite the foregoing,
                you will not be obligated to indemnify or keep any Indemnitee harmless from or against any liabilities,
                losses, damages, or expenditures incurred as a result of such Indemnitee&apos;s actions or inactions. If
                you
                live in California, you agree to waive California Civil Code Section 1542, which states: &quot;A general
                release does not extend to claims that the creditor or releasing party does not know or suspect to exist
                in his or her favor at the time of execution of the release and that, if known, would have materially
                affected his or her settlement with the debtor or released party.&quot; You waive any analogous statute
                or
                doctrine if you are a resident of another jurisdiction.
                <div style={{fontWeight: 700}}>Disclaimer of Warranties:</div>
                Platform transactions, such as primary and secondary market sales, listings, offers, bids, acceptances,
                and other operations, make use of experimental smart contract and blockchain technology, such as
                non-fungible tokens, cryptocurrencies, consensus algorithms, and decentralized or peer-to-peer networks
                and systems. Users acknowledge and agree that such technologies are experimental, speculative, and
                inherently risky, and that they may be subject to bugs, malfunctions, timing errors, hacking and theft,
                or changes to the Ethereum blockchain protocol rules (i.e., &quot;forks&quot;), all of which can
                negatively affect
                smart contracts and expose you to the risk of total loss, forfeiture of your digital currency or Digital
                Artwork, or lost opportunities to buy or sell Digital Artwork. THE PLATFORM IS USED SOLELY AT YOUR OWN
                RISK. THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTY OF ANY
                KIND. ATOSHIN
                EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT
                LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                NON-INFRINGEMENT.
                ATOSHIN MAKES NO WARRANTY THAT (I) THE PLATFORM WILL MEET YOUR EXPECTATIONS, (II) THE PLATFORM WILL BE
                UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE
                PLATFORM WILL BE ACCURATE OR RELIABLE, OR (IV) THE QUALITY OF ANY PRODUCTS, PLATFORM
                <div style={{fontWeight: 700}}>LIMITATION OF LIABILITY:</div>
                YOU EXPRESSLY UNDERSTAND AND AGREE THAT ATOSHIN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS, INCLUDING BUT
                NOT LIMITED TO, LOSS IN VALUE OF ANY DIGITAL ARTWORK, DAMAGES FOR LOSS OF GOODWILL, USE, ATOSHIN&apos;S
                TOTAL
                LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, OR CAUSES OF ACTION WILL IN NO EVENT EXCEED THE AMOUNT YOU
                HAVE PAID ATOSHIN IN THE LAST SIX (6) MONTHS, OR, IF GREATER, ONE HUNDRED DOLLARS ($100).
                THE DISCLAIMER OR EXCLUSION OF CERTAIN WARRANTIES, AS WELL AS THE LIMITATION OR EXCLUSION OF LIABILITY
                FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, ARE PROHIBITED IN SOME JURISDICTIONS. SOME OF THE ABOVE
                LIMITATIONS MAY NOT APPLY TO YOU OR BE ENFORCEABLE WITH RESPECT TO YOU, AS A RESULT. YOUR SOLE AND
                EXCLUSIVE REMEDY IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE PLATFORM OR WITH THESE TERMS OF
                PLATFORM IS TO STOP USING THE PLATFORM.
                IF YOU ARE A NEW JERSEY USER, THE ABOVE SECTIONS TITLED &quot;DISCLAIMER OF
                WARRANTIES&quot; AND &quot;LIMITATION OF
                LIABILITY&quot; ARE INTENDED TO BE ONLY AS GENERAL AS THE STATE OF NEW JERSEY ALLOWS. THE INVALIDITY OF
                ANY
                PORTION OF THESE SECTIONS WILL NOT AFFECT THE VALIDITY OF THE REMAINING PORTIONS OF THE APPLICABLE
                SECTIONS UNDER THE LAWS OF THE STATE OF NEW JERSEY.
                Here are our options for terminating our contract.
                You agree that ATOSHIN may suspend or terminate your account (or any part thereof) or use of the
                Platform, as well as remove and discard any content within the Platform, for any reason, including,
                without limitation, if ATOSHIN believes you have violated or acted inconsistently with the letter or
                spirit of these Terms of Service. Any suspected fraudulent, abusive, or illegal behavior that could lead
                to the termination of your Platform use may be reported to the appropriate law enforcement authorities.
                ATOSHIN may also, at any time and without notice, terminate supplying the Platform, or any part of it,
                in its sole discretion. You understand and agree that ATOSHIN may immediately deactivate or delete your
                account and all connected information and files in your account, and/or restrict any further access to
                such files or the Platform, if any provision of this Terms of Service is violated. You further agree
                that ATOSHIN will not be liable to you or any third party if your access to the Platform is terminated.
                We don&apos;t get involved in disagreements between users.
                You acknowledge that you are solely responsible for your interactions with other Users on the Platform,
                and that the ATOSHIN has no obligation or responsibility in this regard. ATOSHIN reserves the right, but
                not the duty, to intervene in any way in disputes between you and other Platform users.
            </div>
            <div className={classes.paragraphTitle}>Terms of Law in General</div>
            <div className={classes.paragraph}>
                These Terms of Service govern your use of the Platform and supersede all earlier agreements between you
                and ATOSHIN with respect to the Platform. When you utilize affiliate or third-party services,
                third-party content, or third-party software, you may be subject to additional terms and restrictions.
                The laws of the State of California, without respect to its conflict of law rules, will govern these
                Terms of Service. You and ATOSHIN agree to submit to the personal and exclusive jurisdiction of the
                state and federal courts located in Delaware in any disputes or claims not subject to arbitration as set
                forth above. The failure of ATOSHIN to exert or enforce any right or term of these Terms of Service does
                not imply that such right or provision has been waived. If a court of competent jurisdiction finds any
                provision of these Terms of Service to be invalid, the parties agree that the court should endeavor to
                give effect to the parties&apos; intentions as reflected in the provision, and the remaining provisions of
                these Terms of Service will remain in full force and effect. You agree that, regardless of any
                legislation or law to the contrary, any claim or cause of action arising out of or related to the
                Platform or these Terms of Service must be filed within one (1) year of the day the claim or cause of
                action began, otherwise it will be irrevocably barred. In judicial or administrative proceedings based
                on or relating to this agreement, a printed version of this agreement and any notice given in electronic
                form will be admissible to the same extent and subject to the same conditions as other business
                documents and records originally generated and maintained in printed form. You may not assign these
                Terms of Service without ATOSHIN&apos;s prior written agreement, but ATOSHIN may assign or transfer this
                Terms of Service without restriction, in whole or in part. The section titles in these Terms of Service
                are merely descriptive and have no legal or contractual significance. Email or traditional mail may be
                used to send you notices. By displaying notifications or links to notices on the Platform, the Platform
                may also provide you with notices of changes to these Terms of Service or other topics.
            </div>
            <div className={classes.paragraphTitle}>Your Personal Information</div>
            <div className={classes.paragraph} style={{marginBottom: 10}}>
                The privacy of our users is important to us at ATOSHIN. Please visit our Privacy Policy for more
                information. You consent to our collection and use of personal data as defined in the Platform by using
                it.
                Users in California Should Be Aware
                Users of the Platform from California are entitled to the following special consumer rights notification
                under California Civil Code Section 1789.3: The Complaint Assistance Unit of the California Department
                of Consumer Affairs&apos; Division of Consumer Platforms can be reached by mail at 1625 North Market Blvd.,
                Suite N 112, Sacramento, CA 95834, or by phone at (916) 445-1254 or (800) 952-5210. ATOSHIN, Inc., 11420
                Santa Monica Blvd, PO Box 252111, Los Angeles, CA 90025, or (657) 229-1518 are the places to contact.
                <div style={{fontWeight: 700}}>Binding Arbitration for Dispute Resolution:</div>
                THIS SECTION AFFECTS YOUR RIGHTS, SO READ IT CAREFULLY.
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Arbitration Agreement This portion of the Terms of Service titled &quot;Dispute Resolution by
                    Binding
                    Arbitration&quot; is referred to as the &quot;Arbitration Agreement.&quot; You agree that any and
                    all disputes or
                    claims that have arisen or may arise between you and ATOSHIN, whether arising out of or relating to
                    this Terms of Service (including any alleged breach thereof), the Platforms, any advertising, or any
                    aspect of our relationship or transactions, shall be resolved exclusively through final and binding
                    arbitration, rather than a court, in accordance with the terms of this Arbitration Agreement.
                    Furthermore, this Arbitration Agreement does not prevent you from bringing matters to the notice of
                    federal, state, or municipal agencies, which can seek remedies against us on your behalf if the law
                    allows it. By agreeing to these Terms of Service, you and ATOSHIN are each renouncing the right to a
                    jury trial or to join a class action lawsuit. A neutral arbitrator, not a judge or jury, will decide
                    your rights. The interpretation and enforcement of this Arbitration Agreement are governed by the
                    Federal Arbitration Act.
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 10}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Non-Individualized Relief and Class and Representative Actions are Prohibited
                </div>
            </div>

            <div className={classes.paragraph} style={{marginBottom: 10}}>
                YOU AND THE ATOSHIN AGREE THAT WE MAY BRING CLAIMS AGAINST EACH OTHER ONLY ON AN INDIVIDUAL BASIS, NOT
                AS A PLAINTIFF OR CLASS MEMBER IN ANY PRETENDED CLASS OR REPRESENTATIVE ACTION OR PROCEEDING. THE
                ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE THAN ONE PERSON&apos;S OR PARTY&apos;S CLAIMS AND MAY NOT OTHERWISE
                PRESIDE OVER ANY FORM OF CONSOLIDATED, REPRESENTATIVE, OR CLASS PROCEEDING UNLESS BOTH YOU AND THE
                ATOSHIN AGREE OTHERWISE. ALSO, THE ARBITRATOR MAY ONLY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND
                DECLARATORY RELIEF) IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO
                PROVIDE RELIEF NECESSITATED BY THAT PARTY&apos;S INDIVIDUAL CLAIM(S), WITH THE EXCEPTION THAT YOU MAY PURSUE
                A
            </div>
            <div className={classes.guideline} style={{marginBottom: 10}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Non-Individualized Relief and Class and Representative Actions are Prohibited
                </div>
            </div>
            <div className={classes.paragraph} style={{marginBottom: 10}}>
                Most customer complaints can be resolved promptly and to the client&apos;s satisfaction by emailing customer
                service at help@ ATOSHIN.art . ATOSHIN is always interested in resolving disputes politely and
                expeditiously. If those attempts fail, a party who wants to go to arbitration must first send a formal
                Notice of Dispute (&quot;Notice&quot;) to the other party via certified mail.
                ____________________________________________________ (&quot;Notice Address&quot;). The Notice must I
                outline the
                claim or dispute&apos;s nature and basis, and (ii) state the precise relief requested. You or ATOSHIN may
                initiate an arbitration action if ATOSHIN and you do not resolve the issue within sixty (60) calendar
                days of receiving the Notice. The amount of any settlement offer made by ATOSHIN or you during the
                arbitration shall not be disclosed to the arbitrator until the arbitrator determines the amount to which
                you or ATOSHIN is entitled, if any.
            </div>
            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Dispute Resolution Procedures The arbitration shall be conducted by a neutral arbitrator in
                    accordance with the rules and procedures of the American Arbitration Association (&quot;AAA&quot;),
                    including
                    the AAA&apos;s Consumer Arbitration Rules (collectively, the &quot;AAA Rules&quot;), as amended by this
                    Arbitration
                    Agreement. Visit the AAA&apos;s website at http://www.adr.org for further information. The AAA&apos;s consumer
                    arbitration page, http://www.adr.org/, contains information regarding the AAA Rules and costs for
                    consumer disputes, which may be changed from time to time. If any term of the AAA Rules conflicts
                    with a term of this Arbitration Agreement, the applicable terms of this Arbitration Agreement will
                    take precedence unless the arbitrator determines that applying the contradictory Arbitration
                    Agreement terms would result in a fundamentally unfair arbitration. In the same way as a court
                    would, the arbitrator must observe the provisions of these Terms of Service. All questions,
                    including but not limited to matters relating to the scope, enforcement, and arbitrability of this
                    Arbitration Agreement, are for the arbitrator to decide. Although arbitration hearings are typically
                    less formal and time-consuming than trials and other judicial proceedings, an arbitrator can award
                    the same damages and relief to an individual as a court can under the Terms of Service and
                    applicable legislation. Arbitrator decisions are enforceable in court and can only be overturned by
                    a court for very specific grounds.
                    Unless ATOSHIN and you agree otherwise, any arbitration hearings will be held at a location that is
                    fairly convenient for both parties, taking into account their capacity to travel and other relevant
                    factors. If the parties are unable to agree on a location, AAA will make the decision. If your claim
                    is for $10,000 or less, ATOSHIN undertakes to let you select whether the arbitration will be
                    conducted purely on the basis of papers presented to the arbitrator, through a telephonic hearing,
                    or through an in-person hearing, as set forth in the AAA Rules. If your claim is worth more than
                    $10,000, the AAA Rules will assess whether you have a right to a hearing. The arbitrator must give a
                    reasoned written decision sufficient to explain the fundamental findings and conclusions on which
                    the award is based, regardless of how the arbitration is conducted.
                </div>
            </div>
            <div className={classes.paragraphTitle}>Why Arbitration Fees?</div>
            <div className={classes.paragraph} style={{marginBottom: 10}}>
                Unless otherwise specified in this Arbitration Agreement, all filing, administration, and arbitrator
                fees (collectively, the &quot;Arbitration Fees&quot;) will be regulated by the AAA Rules. And paid
                respectively by
                the parties.
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Confidentiality
                    For the advantage of all parties, all aspects of the arbitration proceeding, as well as any ruling,
                    decision, or award made by the arbitrator, will be kept totally confidential.
                </div>
            </div>
            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Severability
                    If a court or arbitrator rules that any term or provision of this Arbitration Agreement is invalid
                    or unenforceable (other than subsection (b) above titled &quot;Prohibition of Class and
                    Representative
                    Actions and Non-Individualized Relief&quot;), the parties agree to replace it with a term or
                    provision
                    that is valid and enforceable and comes closest to expressing the invalid or unenforceable term or
                    provision, and this Arbitration Agreement will be void. If any of the provisions of subsection (b)
                    above titled &quot;Prohibition of Class and Representative Actions and Non-Individualized
                    Relief&quot; are
                    found to be invalid or unenforceable by a court or arbitrator, then the entire Arbitration Agreement
                    will be null and void, unless such provisions are found to be invalid or unenforceable solely with
                    respect to claims for public injunctive relief. The rest of the Terms of Service will remain in
                    effect.
                </div>
            </div>

            <div className={classes.lastGuideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Future Modifications to the Arbitration Agreement
                    Regardless of any other provision in these Terms of Service, ATOSHIN agrees that you may reject any
                    future change to this Arbitration Agreement (other than a change to the Notice Address) while you
                    are a user of the Platforms by sending ATOSHIN written notice within thirty (30) calendar days of
                    the change to the Notice Address provided above. You agree to arbitrate any disagreement between us
                    in accordance with the language of this Arbitration Agreement as of the date you initially accepted
                    these Terms of Service by rejecting any future amendment (or accepted any subsequent changes to
                    these Terms of Service).
                </div>
            </div>


        </>
    )
}