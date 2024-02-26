import { MutationFunction, useMutation } from "@tanstack/react-query";
import { IResponseHelper } from "../types/response";

interface IUseMutationHookProps<TData = unknown> {
    mutationFn: unknown;
    receivedOnSuccess?: (data: IResponseHelper<TData>) => void;
    receivedOnError?: (error: unknown) => void;
}
export const useMutationHook = <TData = unknown>({
    mutationFn,
    receivedOnSuccess,
    receivedOnError,
}: IUseMutationHookProps<TData>) => {
    const {
        data: mutationData,
        error,
        isError,
        isSuccess,
        mutate,
        isPending: isLoading,
        status
    } = useMutation({
        mutationFn: mutationFn as MutationFunction<IResponseHelper<TData>>,
        onSuccess: (data: IResponseHelper<TData>) => {
            receivedOnSuccess?.(data);
        },
        onError: error => {
            receivedOnError?.(error);
        },
    });

    const data = mutationData as IResponseHelper<TData>;
    return {
        data,
        error,
        isError,
        isLoading,
        isSuccess,
        mutate,
        status
    };
};
