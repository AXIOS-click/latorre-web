/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Action as TAction } from "../types/ZustandGlobalTypes";

export const useZustandFunctions = <StoredActions, StateActions extends Partial<StoredActions>>() => {
    type Actions<T> = TAction<T, StoredActions>;
    /**
     * Genera una acción para cambiar (toggle) un valor booleano en el estado.
     * @param {K} key - La clave del estado que se desea cambiar.
     * @returns {Actions<() => void>} - Una función que, cuando se invoca, cambia el valor booleano del estado.
     */
    const toggleValue =
        <K extends keyof StateActions>(key: K): Actions<() => void> =>
        set => {
            return () => {
                set((state: any) => {
                    const currentValue = state[key];
                    if (typeof currentValue === "boolean") {
                        return { [key]: !currentValue };
                    }
                    return state;
                });
            };
        };
    /**
     * Genera una acción para establecer un valor en el estado.
     * @param {K} key - La clave del estado que se desea establecer.
     * @returns {Actions<(value: boolean) => void>} - Una función que, cuando se invoca, establece el valor del estado.
     */
    const setValue =
        <T = boolean, K extends keyof StateActions = keyof StateActions>(key: K): Actions<(value: T) => void> =>
        set =>
        (value: T) => {
            set(_ => ({ [key]: value }) as any);
        };

    return {
        toggleValue,
        setValue,
    };
};
