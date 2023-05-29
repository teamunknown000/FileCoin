"use server";
import Product from "~/models/product"
import type { FilterQuery } from "mongoose";
import type IProduct from "~/types/product";
import type { NextApiRequest, NextApiResponse } from 'next'
import { IApiResponse } from "~/types";
import Errors from "~/errors/main";


export const getProducts = async (filter: FilterQuery<IProduct> = {}) => {
    return await Product.find(filter)
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IApiResponse>
) {
    const data = await Product.find()
    res.status(data ? 200 : 400).send(Errors.generateResponse(data ? data : Errors.DB_ERROR, data !== undefined))
}