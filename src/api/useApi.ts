import { useState, useEffect } from "react";
import api from ".";

type RequestMethod = "get" | "post" | "put" | "delete";

interface ApiResult<T> {
    loading: boolean;
    data: T | null;
    error: Error | null;
    refetch: () => void;
}

interface ApiConfig {
    url: string;
    method: RequestMethod;
    data?: object;
}

export const useApi = <T>(config: ApiConfig): ApiResult<T> => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await api(config);
            setData(response.data);
            setError(null);
        } catch (error: any) {
            setError(error);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        fetchData();
    };

    return {
        loading,
        data,
        error,
        refetch,
    };
};
