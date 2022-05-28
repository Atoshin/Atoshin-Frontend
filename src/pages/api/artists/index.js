import axios from "axios";

export default async function handler(req, res) {
    const {headers, body, query} = req;
    try {
        const {
            data,
            headers: returnedHeaders
        } = await axios.get(`${process.env.BACKEND_BASE_URL}/artists`)
        Object.entries(returnedHeaders).forEach((keyArr) =>
            res.setHeader(keyArr[0], keyArr[1])
        )
        res.send(data)
    } catch ({response: {status, data}}) {
        res.status(status).json(data)
    }
}