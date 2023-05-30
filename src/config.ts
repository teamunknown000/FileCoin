
export const DB_URL = process.env.DB_URL || "";
if(!DB_URL.length) {
    throw new Error("DB_URL missing in the environment variables. Define in config.env")
}

export const WEB3_STORAGE_API_KEY = process.env.WEB3_STORAGE_API_KEY || "";
if(!WEB3_STORAGE_API_KEY.length) {
    throw new Error("WEB3_STORAGE_API_KEY missing in the environment variables. Define in config.env")
}

export const FILE_COIN_ACCOUNT = process.env.FILE_COIN_ACCOUNT || "";
if(!FILE_COIN_ACCOUNT.length) {
    throw new Error("FILE_COIN_ACCOUNT missing in the environment variables. Define in config.env")
}