import axios from "axios";
import {parseCookies} from "../../../functions/parseCookies";

export default async function handler(req, res) {
    const {token} = parseCookies(req);
    try {
        res.send({
            token
        })
    } catch ({response: {status, data}}) {
        res.status(status).json(data)
    }
}