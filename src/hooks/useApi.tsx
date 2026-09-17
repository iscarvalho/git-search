import { apiCall } from "../services/api";
import type { AxiosResponse } from "axios";
import type { ApiCallParams } from "../types";

export function useApi() {
    const apiFetch = async ({ method, url, config }: ApiCallParams): Promise<AxiosResponse> => {
        try {
            const res = await apiCall({
                method,
                url,
                ...config
            })

            return res
        } catch (error: unknown) {
            console.log(error)
            throw new Error('An error occurred while fetching the data', { cause: error })
        }
    }

    return apiFetch
}