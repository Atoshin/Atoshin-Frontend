import classes from "../../styles/PrivacyPolicy/PrivacyPolicy.module.scss"
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import * as React from "react";
import {useEffect} from "react";

export default function PrivacyPolicy() {

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
            <div className={classes.pageTitle}>Privacy Policy</div>
            <div className={classes.lastUpdate}>LAST UPDATED – March 2022</div>

            <div className={classes.paragraph}>
                Thank you for visiting with ATOSHIN.com (hereinafter referred to as the "Website"). We value your
                privacy very much. This Privacy Policy (the "Policy") explains the sorts of information that NEEI, LLC
                (the "Company," "us," "we," or "our") may collect from you or that you may supply when you use the
                Website and the products, features, materials, and services we provide (collectively, the "Services").
                This Policy also explains our rules and practices for gathering, using, retaining, protecting, and
                releasing that data.
                This Policy covers information we collect on the Website and through your use of the Services in general
                (including when you create an account), as well as interactions between you and the Website (including
                email, text, and other electronic messages).
                This Policy does not cover information collected by third parties, such as any websites, services, or
                applications you choose to access through the Services. [It also does not apply to any information
                obtained by the Company offline or by any other means, including any other website we or any third party
                (including our affiliates and subsidiaries) operates.]
                Please read this policy thoroughly. You agree to the terms of this Policy on behalf of yourself or the
                entity or organization that you represent by accessing or using the Services (or by clicking "accept" or
                "agree" to this Policy when prompted). If you do not agree to any of the terms in this Policy, you
                should stop using our Services.
            </div>
            <div className={classes.paragraphTitle}>1. Children who use or have access to the services</div>
            <div className={classes.paragraph}>
                The Services and its content are not intended for minors under the age of thirteen (13) and are not
                directed at them. No one under the age of thirteen (13) is permitted to use or provide personal
                information to the Services. We do not intentionally collect personally identifiable information from
                children under the age of thirteen (13). Please do not attempt to use or register for the Services or
                provide any information about yourself to us, including your name, address, telephone number, or email
                address, if you are under the age of thirteen (13). If we discover that we have unintentionally
                collected or received personally identifiable information from a child under the age of thirteen (13),
                we will take urgent steps to ensure that such information is removed from our database. You can contact
                us at Info@atoshin.art if you are a parent or legal guardian and believe your child under the age of
                thirteen (13) has given us information.
            </div>
            <div className={classes.paragraphTitle}>2. Modifications to Our Privacy Policy</div>
            <div className={classes.paragraph}>
                The date at the top of this page indicates when this Policy was last updated. This Policy may be
                updated from time to time. If we make significant changes, we will update this page and notify you by an
                email to the email address indicated in your account, a message on the Services, or a notice on the
                Website home page. If you continue to use the Services after we make changes, you are believed to have
                accepted those changes, so please check the Policy for updates on a regular basis.
            </div>
            <div className={classes.paragraphTitle}>3. The Information We Gather</div>
            <div className={classes.paragraph}>
                We obtain information about you from a variety of sources, including (A) information and material that
                you provide to us; (B) automatically gathered information; and (C) publicly available information. (C)
                demographic or other aggregate data; and (D) data from additional sources. Each is detailed in further
                depth later down.
            </div>
            <div className={classes.paragraphTitle}>A. The data and content you provide.</div>
            <div className={classes.paragraph} style={{marginBottom: 10}}>
                Personal information that you deliberately choose to disclose is collected by us. This could involve the
                following:
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Personally Identifiable Information. Personal data, such as your name, address, e-mail address,
                    username, password, and any other information you provide us directly on or through the Services.
                    This includes information you submit when you register for a service or create an account, as well
                    as information you provide when you contact customer care.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Correspondence via email. If you want to correspond with us by email, we will keep records and
                    copies of your emails, as well as your email address and our responses.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    User-Generated Content. You may submit information or content to be published or displayed in public
                    parts of the Services, or to be communicated to other users of the Services or third parties
                    (collectively, "User Content"). You are solely responsible for the User Content you upload and send
                    to others. The Company has no control over what other users of the Services do with your User
                    Content if you choose to share it with them. As a result, we cannot and do not guarantee that
                    unauthorized parties will not read your User Content.
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 45}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Information on transactions. Any purchases or transactions performed through the Services will be
                    recorded. Payment information, such as your credit or debit card number and other card information;
                    account and authentication information; and billing, shipping, and contact information are all
                    included.
                </div>
            </div>
            <div className={classes.paragraph} style={{marginBottom: 10}}>
                When you interact with the Services, we may use a range of technologies to gather information about your
                equipment, browsing activity, and patterns, including:
            </div>
            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Information about the activity. Details of your visits to our Services, such as the types of content
                    you view or engage with; the features you use; the actions you take; the people or accounts with
                    whom you interact; the time, frequency, and duration of your activities; and other information about
                    your use of and actions on the Services.
                </div>
            </div>
            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    (ii) Equipment Specifications Your computer's operating system, IP address, browser type, and
                    browser language, as well as information about your computer and internet connection.
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 10}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    (iii) Information about the location. For the purpose of improving or facilitating the Services,
                    information about your device's location, including GPS position. Such information, for example, may
                    be used to enable the functionality or features of the Services that provide you with information
                    about stores near you or allow you to order and pay for the Services remotely. We may also utilize
                    information about your device's location to better understand how you use the Services and
                    functionality, as well as to deliver more relevant advertising.
                </div>
            </div>
            <div className={classes.paragraph}>
                This information may be collected in order to maintain the quality of the Services we provide, as well
                as to provide broad general statistics about how the Services are used. We may use the following
                technologies to collect data automatically:
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Cookies A cookie is a small data file that is stored on your computer's hard disk for the length of
                    your visit to a website ("session cookies") or for a set amount of time ("permanent cookies")
                    ("persistent cookies"). Cookies store information that a web server can read later. Cookies may be
                    used to give you a more personalized and interactive experience while using the Services.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Web Beacons Web beacons are little files that can be found on websites, in apps, and in emails (also
                    known as "clear gifs", "pixel tags", "web bugs", and "single-pixel gifs"). Web beacons, for example,
                    allow the Company to track who has visited particular webpages or opened an email, as well as to
                    analyze the efficiency of our marketing and gather other website statistics.
                </div>
            </div>


            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    JavaScripts are a type of scripting language. JavaScripts are bits of code that are inserted in
                    various portions of websites and applications to help with a number of tasks, such as speeding up
                    the refresh rate of specific functionality or tracking the usage of various online components.
                </div>
            </div>
            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Entity Tags are HTTP code mechanisms that allow portions of websites to be stored or "cached" within
                    your browser and validate these caches when the website is opened, allowing the web server to avoid
                    sending a full response if the content has not changed. This speeds up website performance because
                    the web server does not need to send a full response if the content has not changed.
                </div>
            </div>
            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Local Storage in HTML5. HTML5 local storage allows data from websites to be saved or "cached" within
                    your browser so that material in HTML5 pages can be preserved and retrieved when the website is
                    visited again.
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 10}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Device Identifiers That Can Be Reset Resettable device identifiers (also known as "advertising
                    identifiers") are similar to cookies and are found on many mobile and tablet devices (for example,
                    the "Identifier for Advertisers" or "IDFA" on Apple iOS devices and the "Google Advertising ID" on
                    Android devices), as well as some streaming media devices. Resettable device identifiers, like
                    cookies, are used to make internet advertising more relevant.
                </div>
            </div>

            <div className={classes.paragraph}>
                The use of tracking technologies by third parties is not covered by this policy. Advertisers, ad
                networks and servers, content providers, and application providers may provide connections, content,
                advertising, or references to other websites through the Services. When you use the Services, these
                third parties may use cookies or other tracking technologies to collect information about you. They may
                correlate the information they gather with your personal information, or they may collect data about
                your online activity over time and across multiple websites. Please be aware that we have no control
                over the tracking technologies used by these third parties or when and how they are used. As a result,
                the Company makes no claim to or accepts responsibility for any third-party privacy policies, practices,
                or procedures. We recommend that you read the privacy statements and terms and conditions of any
                websites you visit that are linked or referenced. You should contact the responsible source directly if
                you have any questions about an ad or other targeted content.
            </div>
            <div className={classes.paragraphTitle}>C. Information on the demographics of the population.</div>
            <div className={classes.paragraph}>
                We may gather demographic, statistical, or other aggregate information about you, but none of this
                information identifies you specifically. Although some of this information is obtained from personal
                data, it is not personal data and cannot be linked to you. Gender, age, race, household income, and
                political affiliation are examples of aggregate data.
            </div>
            <div className={classes.paragraphTitle}>D. Other Sources of Information</div>
            <div className={classes.paragraph}>
                We may get information about you from other sources and combine it with the information we have on file
                about you. We safeguard this information using the processes outlined in this Policy, as well as any
                additional constraints imposed by the data's source. Online and offline data providers from which we
                obtain demographic, interest-based, and online advertising-related data; publicly-available sources such
                as open government databases or social networks; and service providers who provide us with information,
                or updates to that information, based on their relationship with you are examples of these sources. We
                can correct faulty information, improve the security of your transactions, and provide you with product
                or service recommendations and special offers that are more likely to interest you by obtaining extra
                information about you.
            </div>
            <div className={classes.paragraphTitle}>4. How We Make Use of Your Data</div>
            <div className={classes.paragraph} style={{marginBottom: 10}}>
                The information we collect about you may be used in a variety of ways, including to:
            </div>
            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    offer you with the Services and their content;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    answer to inquiries and comments, as well as providing customer assistance;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    carry out any other purpose for which you have provided such information;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    contact you with regards to your order, transaction, account, or subscription;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    notify you of significant changes to the Services or any of their features or content, as well as
                    other news;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    use the Services to run, maintain, improve, personalize, and analyze them;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    for marketing or advertising reasons, monitor and analyze trends, usage, and activities;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    detect, prevent, or investigate security breaches, fraud, and other illegal or unauthorized
                    activities;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    carry out our responsibilities and enforce our rights under any contracts we may have with you,
                    including billing and collection;
                </div>
            </div>
            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    keep proper records for internal administrative purposes.
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    permit you to use interactive elements on the Services;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    deliver promotional messages such as feature information, newsletters, offers, promotions,
                    sweepstakes, and events;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    share information across the Company's goods and devices to give you a more personalized and
                    consistent experience across all of the Company's products;
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 16}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    create, test, and improve new products or services, including performing surveys and research, as
                    well as testing and debugging new features and products;
                </div>
            </div>
            <div className={classes.paragraphTitle}>5. How We Disseminate Your Data</div>
            <div className={classes.paragraph}>
                We have no limits on disclosing aggregated or anonymized information about our users. Except in the
                following circumstances, we will not share your personal information that we collect or that you supply
                as outlined in this Policy:
            </div>

            <div className={classes.guideline}>
                <div className={classes.symbol}>A</div>
                <div className={classes.guidelinesItem}>
                    share information across the Company's goods and devices to give you a more personalized and
                    consistent experience across all of the Company's products;
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.symbol}>B</div>
                <div className={classes.guidelinesItem}>
                    In our interactions with service providers. To service providers, contractors, and other third
                    parties who provide support services for us, such as credit card processing, website hosting, email
                    and postal delivery, location mapping, product and service delivery, or analytics services, and who
                    are bound by contractual obligations to keep personal information confidential and use it only for
                    the purposes for which we disclose it to them.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.symbol}>C</div>
                <div className={classes.guidelinesItem}>
                    In the event that the Company is sold or transferred. If we become involved in a merger,
                    divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of
                    the Company's assets to business entities or people involved in the negotiation or transfer (whether
                    as a going concern or as part of bankruptcy, liquidation, or similar proceeding).
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.symbol}>D</div>
                <div className={classes.guidelinesItem}>
                    When we are legally obligated to do so. To abide by any court order, law, or legal procedure,
                    including any government or regulatory request.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.symbol}>E</div>
                <div className={classes.guidelinesItem}>
                    When we make use of our legal rights. For the purposes of enforcing or applying this Policy, our
                    Terms of Service ([link]), and other agreements, including billing and collection.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.symbol}>F</div>
                <div className={classes.guidelinesItem}>
                    To assist in the protection of legitimate interests. If we feel that disclosing information may aid
                    in the protection of the Company's, our users', partners', agents', and others' rights, property, or
                    safety. This involves exchanging information with other businesses and organizations to guard
                    against fraud and avoid spam and malware.
                </div>
            </div>

            <div className={classes.guideline}>
                <div className={classes.symbol}>G</div>
                <div className={classes.guidelinesItem}>
                    With your consent or to fulfill the purpose for which the information was collected. To carry out
                    the purpose for which you provided the information, or for any other reason disclosed by us at the
                    time you provided the information, or with your consent.
                </div>
            </div>

            <div className={classes.guideline} style={{marginBottom: 10}}>
                <div className={classes.symbol}>H</div>
                <div className={classes.guidelinesItem}>
                    When we're collaborating with marketing service providers. To marketing service providers in order
                    for them to assess, develop, and supply you with promotions and special offers that may be of
                    interest to you, as well as to administer contests, sweepstakes, and events, and for other
                    promotional purposes.
                </div>
            </div>
            <div className={classes.paragraph}>
                Information you submit in or through the Services' public areas (e.g., chat rooms, bulletin boards, and
                discussion groups) is usually accessible to, and may be collected and utilized by, others, and may
                result in unsolicited messages or other interactions. When providing personal information about
                themselves in public or interactive places, users of the Services are reminded to use caution.
            </div>
            <div className={classes.paragraphTitle}>6. Your Decisions</div>
            <div className={classes.paragraph} style={{marginBottom: 8}}>6.1 Controlling Your Information Mechanisms
            </div>
            <div className={classes.paragraph} style={{marginBottom: 10}}>
                We make every effort to give you options when it comes to the personal information you supply to us.
                We've put in place measures to provide you the following control over your data:
            </div>

            <div className={classes.guideline}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    Cookies and other tracking technologies; By altering the proper settings in your browser, you may be
                    able to enable your browser to reject cookies and some other technologies. Although each browser is
                    different, many common browsers offer settings that allow you to accept or reject cookies and other
                    technologies before they are set or installed, as well as remove or reject the usage or installation
                    of certain technologies entirely. To understand how to change your browser settings, we recommend
                    using the Help menu on your browser. Please keep in mind that changing your browser settings will
                    not remove Flash cookies. Visit the Adobe website's Flash player settings page to discover how to
                    manage your Flash cookie settings. Please be aware that if you disable or refuse cookies, some
                    elements of the Services may become inaccessible or stop working properly.
                </div>
            </div>
            <div className={classes.guideline} style={{marginBottom: 10}}>
                <div className={classes.bullet}></div>
                <div className={classes.guidelinesItem}>
                    The Company's Promotional Communications. If you do not want your contact information to be used by
                    the Company to promote our own or third-party products or services, you can opt-out by (i) informing
                    us of your preference when you sign up for our newsletter or fill out any other form on or through
                    the Services where we collect your data; (ii) modifying your user preferences in your account
                    profile by checking or unchecking the relevant boxes; or (iii) following the opt-out instructions in
                    the promotional materials. Please keep in mind that even if you choose not to receive promotional
                    emails from us, we may still send you transactional emails, such as those regarding your account or
                    purchases.
                </div>
            </div>
            <div className={classes.paragraph} style={{marginBottom: 8}}>
                6.2 What We Do When We Get Do Not Track Signals
            </div>
            <div className={classes.paragraph}>
                Most online browsers allow you to enable a privacy choice called "Do Not Track." When you enable
                this choice, it sends a signal to the websites you visit saying that you do not want to be
                monitored. Please be aware that we do not currently respond to browser Do Not Track settings.
            </div>
            <div className={classes.paragraphTitle}>7. Getting Access to and Correcting Your Data</div>
            <div className={classes.paragraph}>
                You may seek access to, modify, or erase any personal information you have supplied to us by sending us
                an email. By entering into the Website and visiting your account profile page, you can also access,
                modify, or delete your personal information. [We can only erase your personal information if your
                account is likewise deleted.]
                If we feel the change would violate any law or legal requirement or cause the information to be
                erroneous, we may refuse to comply with the request.
                Copies of your User Content may remain viewable in cached and archived pages or may have been copied or
                kept by other users of the Services, if you delete your User Content from the Services or your account.
            </div>
            <div className={classes.paragraphTitle}>8. California's Right to Privacy.</div>
            <div className={classes.paragraph}>
                California residents have the right to request a notice identifying the categories of personal customer
                information that we share with our affiliates and third parties for marketing purposes, as well as
                contact information for such affiliates and third parties, under California Civil Code sections
                1798.83-1798.84. If you are a resident of California and would like a copy of this notice, please send a
                written request to <span className={classes.link}>info@atoshin.art</span><br/>
                We will make every effort to answer to your request as soon as possible.
            </div>
            <div className={classes.paragraphTitle}>9. How Do We Keep Your Information Safe?</div>
            <div className={classes.paragraph}>
                To protect your personal information, we take reasonable precautions. We have put in place technical,
                physical, and administrative security measures to prevent the risk of your information being lost,
                misused, unauthorized access, disclosure, or modification. To protect the information we collect, we
                have implemented adequate physical, technological, and administrative safeguards. All of the information
                you send to us is kept on our secure servers, which are protected by firewalls. We encrypt the transfer
                of extremely sensitive information (such as a credit card number) through the Services using Secure
                Sockets Layer (SSL) technology.
                You are also responsible for the safety and security of your data. You are responsible for keeping your
                password secure if we have given you (or you have selected) one for access to certain portions of the
                Services. We ask that you do not reveal your password to anyone.
                While we've used security technologies and procedures to help protect your personal data, no system or
                network can be guaranteed to be completely secure. Unauthorized entrance or usage, hardware or software
                failure, and other reasons could jeopardize the security of user data at any time. Personal information
                is transmitted at your own risk. We are not liable for any unauthorized use of the Website's or other
                Services' privacy settings or security features.
            </div>
            <div className={classes.paragraphTitle}>10.GDPR</div>
            <div className={classes.lastParagraph}>
                To protect your personal information we make full effort to comply with European General Data Protection
                Rules.
            </div>
        </>
    )
}