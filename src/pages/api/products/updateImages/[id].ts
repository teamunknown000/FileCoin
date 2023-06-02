import type { NextApiRequest, NextApiResponse } from 'next';
import Errors from "~/errors/main";
import Product from "~/models/product";
import type { IApiResponse } from "~/types";
import connect from "~/utils/db-connect";
import { HttpMethods } from '~/utils';
import type IProduct from '~/types/product';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IApiResponse>
) {
    if(req.method === HttpMethods.put) {
        await connect()
        const { id } = req.query
        const body = req.body as IProduct
        const product = await Product.findById(id)
        if(!product) {
            return res.status(400).send(Errors.generateResponse(Errors.OBJECT_NOT_FOUND, false))
        }
        product.set("images", [...(product.images || []), ...body.images])
        const data = await product.save()
        return res.status(data?200:400).send(Errors.generateResponse(data?data:Errors.DB_ERROR, data !== undefined))
    }
    else {
        res.redirect("/404")
    }
}