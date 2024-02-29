import { QueryFunctionContext, QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { IResponseHelper } from "../types/response";

interface IUseQueryHookProps<TQueryKey extends QueryKey, TData = unknown> {
    queryKey: TQueryKey;
    queryFn: (context: QueryFunctionContext<TQueryKey>) => Promise<IResponseHelper<TData>>;
    options?: Omit<
        UseQueryOptions<IResponseHelper<TData>, unknown, IResponseHelper<TData>, TQueryKey>,
        "queryKey" | "queryFn"
    >;
}

export function useQueryHook<TQueryKey extends QueryKey = QueryKey, TData = unknown>({
    queryKey,
    queryFn,
    options = {},
}: IUseQueryHookProps<TQueryKey, TData>) {
    const result = useQuery<IResponseHelper<TData>, unknown, IResponseHelper<TData>, TQueryKey>({
        ...options,
        queryKey,
        queryFn,
    });

    return {
        ...result,
        data: result.data as IResponseHelper<TData>,
    };
}
