import axios from "axios";
import {parseCookies} from "../../../functions/parseCookies";

export default async (req, res) => {
    const {headers, body, query} = req;
    try {
        const token = parseCookies(req).token
        if (!token) {
            res.status(401).json({
                'message': 'unauthorized'
            })
            return;
        }
        if (req.method === 'GET') {
            const {
                data,
                headers: returnedHeaders
            } = await axios.get(`${process.env.BACKEND_BASE_URL}/user/${query.walletAddress}/show`, {
                headers: {
                    Authorization: token
                }
            })
        } else {
            const {
                data,
                headers: returnedHeaders
            } = await axios.post(`${process.env.BACKEND_BASE_URL}/user/${query.walletAddress}/show`, {
                headers: {
                    Authorization: token
                }
            })
        }

        Object.entries(returnedHeaders).forEach((keyArr) =>
            res.setHeader(keyArr[0], keyArr[1])
        )
        res.send(data)
    } catch ({response: {status, data}}) {
        res.status(status).json(data)
    }
}