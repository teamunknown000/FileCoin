import axios from "axios";
import { IApiResponse } from "~/types";

const fetcher = async<T>(url: string) => (
    await axios.get(url).then(res => (res.data as IApiResponse).data as T).catch(err => err.response.data)
)

export default fetcher