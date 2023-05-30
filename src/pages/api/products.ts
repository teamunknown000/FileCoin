import type { NextApiRequest, NextApiResponse } from 'next';
import Errors from "~/errors/main";
import Product from "~/models/product";
import { IApiResponse } from "~/types";
import connect from "~/utils/db-connect";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IApiResponse>
) {
    await connect()
    const data = await Product.find()
    console.log(data)
    res.status(data ? 200 : 400).send(Errors.generateResponse(data ? data : Errors.DB_ERROR, data !== undefined))
}