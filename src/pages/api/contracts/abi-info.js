import axios from "axios";
import {parseCookies} from "../../../functions/parseCookies";
import AES from 'crypto-js/aes';

export default async function handler(req, res) {
    const {headers, body, query} = req;
    try {
        // const token = parseCookies(req).token

        // if (!token) {
        //     res.status(401).json({
        //         'message': 'unauthorized'
        //     })
        //     return;
        // }
        let {
            data,
            headers: returnedHeaders
        } = await axios.get(`${process.env.BACKEND_BASE_URL}/contract/info/U2FsdGVkX19II91sk2bUAmHaWGKBe3qaK37VJskHkMI/Y7tKqwo+Ax0tBtExuUkDN8PjmJPxilwde39QMdubV6HeDp4s5auWtSd07T/yIT/KapYnO+lT2sTPLME7M2JnU+pEMNsks0DL1ivwK3tMxh0AC78RgfyJcXiRWIQnZZise5PYI2Xpn2cx1EJvbKPsox8KBY9VCW4IazQnVejA0nU9+MJuPRZ4oLKqgWLtticjTzrEughhad5wQcok6ctllPSAHBjpYTQqgOWk4aYTF92BhmZvAhT+FrPztYIfu4vIhmHClYcEBWeXEtcfldj7Qi9PE1cGa+UWpAibf6TyqpkjFliNDBXrHBW3bVWHNp97yueTPeRDa2tzeSTz4G5zYiv4LPSalN1H0tUgyCo/xnhTpvL0iKDVvvjiXvQ9jyCneMaaZw5YtFqIYX6sYfPOesvn+u01GutAFaHOAvH+kkQsX09/wp3VJSKviwzQQ0AD2sas/vI/UkCX3N8WwNShsJYImkPVjZcxHuDUtzxuzePbdsJB2AWMgZmAyZS+o7lVmg330KJYr6ukWrVcyWLaw6n7VwklsL3825OVJ+6BZZWct+HaSWutcp1xUtuK0LkkZ6lt8S0wVQCA85mWyUUdsErclXUGTT1s0JX00XNj9WLvTxYnAB14e1gbnUNPMXJUm2tMbmXrxYeq5OHx0+R01IDEvYXPith66SxbdDO4vLG7wB0FQ3gliN08AUoFMpa0ZrhAT4Cy/PQ0iM3rHr8S4TjCqOU+XmBD0whGkrbgjEa7bKlzqRWXrAVx402sY0E1OHBcLX/HEPnuY9wW29EOHPa1HY7yKbOYXvzsV3ZKfUi97s6fGY0I9ojYTOBsFkrJNrn+du9UEKpLtBPgLdZ+Zb9AfD+ATCC/fyukHSQFLY1mYQmL6YJ0WQ0HPaI32zP9Oc+X9K9Gilho/+JHcaEaRrWVgsUH1eY2UBQM/3E/th/14irgQp+Z6VYPWpwVGryta4KMPLPHdFY4y+/GvMo/xhkkLLYalkwAD9tCWT3i1CJsLFWc3N3cKIRdgIJwqwxh0oSlHKsODpxEfCeP5Cohf0mFfiCFQ1V4z9HMFvRZBez30nc6rC9eaqRc7wKzrJ/jynXvDlC1eE+tet9pqBRfDW7qQIKR9rQqta8qN2V1AscKzFI+nLz+OLFIXjDQLaa24Sgc7wpt4GARYDE/+Bi2oS9kT/LVrRl1Vp0xe1ZPNIK9SxUGNC1WaQjzhXLfsOhPiSnnGnIevCofsDPrgpaozkhrYt3Bo=`, {
            // headers: {
            //     Authorization: token
            // }
        })
        Object.entries(returnedHeaders).forEach((keyArr) =>
            res.setHeader(keyArr[0], keyArr[1])
        )
        const stringify = JSON.stringify(data);
        data = AES.encrypt(stringify, process.env.CRYPT_KEY)
        data = data.toString();

        res.send(data)
    } catch ({response: {status, data}}) {
        res.status(status).json(data)
    }
}