import type { NextApiRequest, NextApiResponse } from 'next';
import Errors from "~/errors/main";
import Product from "~/models/product";
import { IApiResponse } from "~/types";
import connect from "~/utils/db-connect";
import { HttpMethods } from '~/utils';
import IProduct from '~/types/product';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IApiResponse>
) {
    if(req.method === HttpMethods.put) {
        await connect()
        const { id } = req.query
        const body = req.body as IProduct
        const data = await Product.findByIdAndUpdate(id, {
            ...(body.name && { name: body.name }),
            ...(body.description && { description: body.description })
        } as IProduct)
        return res.status(data?200:400).send(Errors.generateResponse(data?data:Errors.DB_ERROR, data !== undefined))
    }
    else if(req.method === HttpMethods.delete) {
        await connect()
        const { id } = req.query
        const data = await Product.findByIdAndRemove(id)
        return res.status(data?200:400).send(Errors.generateResponse(data?data:Errors.DB_ERROR, data !== undefined))
    }
    else {
        res.redirect("/404")
    }
}