import axios from "axios";
import {parseCookies} from "../../../../functions/parseCookies";
import AES from 'crypto-js/aes';

export default async (req, res) => {
    const {headers, body, query} = req;
    console.log(query, body)
    try {
        const token = parseCookies(req).token
        //todo implement authorization

        // if (!token) {
        //     res.status(401).json({
        //         'message': 'unauthorized'
        //     })
        //     return;
        // }
        let {
            data,
            headers: returnedHeaders
        } = await axios.post(`${process.env.BACKEND_BASE_URL}/asset/information/${query.id}`, body,
            // {
            // headers: {
            //     Authorization: token
            // }
            // }
        )
        Object.entries(returnedHeaders).forEach((keyArr) =>
            res.setHeader(keyArr[0], keyArr[1])
        )
        const stringify = JSON.stringify(data);
        let encrypted = AES.encrypt(stringify, process.env.CRYPT_KEY)
        res.send(encrypted.toString())
    } catch ({response: {status, data}}) {
        res.status(status).json(data)
    }
}