import axios from "axios";
import {parseCookies} from "../../../functions/parseCookies";

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
        let data;
        let returnedHeaders;
        if (req.method === 'GET') {
            const
                response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${query.walletAddress}/show`, {
                    headers: {
                        Authorization: token
                    }
                })
            data = response.data;
            returnedHeaders = response.headers;
        } else if (req.method === "PATCH") {
            const
                response = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${query.walletAddress}/update`, body, {
                    headers: {
                        Authorization: token
                    }
                })
            data = response.data;
            returnedHeaders = response.headers;
        }
        Object.entries(returnedHeaders).forEach((keyArr) =>
            res.setHeader(keyArr[0], keyArr[1])
        )
        res.send(data)
    } catch ({response: {status, data}}) {
        res.status(status).json(data)
    }
}