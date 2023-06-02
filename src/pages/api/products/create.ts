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
    if (req.method === HttpMethods.post) {
        await connect()
        const body = req.body as IProduct
        const product = await new Product({
            name: body.name,
            description: body.description,
            images: body.images,
        } as IProduct)
        const data = (await product.save());
        res.status(data ? 200 : 400).send(Errors.generateResponse(data ? data : Errors.DB_ERROR, data !== undefined))
    }
    else {
        res.redirect("/404")
    }
}