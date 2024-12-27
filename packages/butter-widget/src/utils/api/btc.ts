import axios from "axios";

export function getBtcBalance(address: string) {
    const key = "8fdccb40acc7930ea7824a3f5466398e8ef260087e63ef8113ce326361ccef99";
    const url = `https://open-api.unisat.io/v1/indexer/address/${address}/balance`
    return axios.get(url,{
        headers: {
            "Authorization": `Bearer ${key}`
        }
    })
}
