import axios from "axios";
import {parseCookies} from "../../../../functions/parseCookies";
import AES from 'crypto-js/aes';

export default async function handler(req, res) {
    const {headers, body, query} = req;
    try {
        const token = parseCookies(req).token

        if (!token) {
            res.status(401).json({
                'message': 'unauthorized'
            })
            return;
        }
        let responseData;
        let data;
        let returnedHeaders;

        if (req.method === 'POST') {
            let response = await axios.post(`${process.env.BACKEND_BASE_URL}/asset/information/${query.id}`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            data = response.data
            returnedHeaders = response.headers
            const stringify = JSON.stringify(data);
            responseData = AES.encrypt(stringify, process.env.CRYPT_KEY)
            responseData = responseData.toString();
        } else if (req.method === 'PATCH') {
            let response = await axios.post(`${process.env.BACKEND_BASE_URL}/asset/submit-information/${query.id}`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            responseData = response.data
            returnedHeaders = response.headers
        }
        Object.entries(returnedHeaders).forEach((keyArr) =>
            res.setHeader(keyArr[0], keyArr[1])
        )

        res.send(responseData)
    } catch ({response: {status, data}}) {
        res.status(status).json(data)
    }
}