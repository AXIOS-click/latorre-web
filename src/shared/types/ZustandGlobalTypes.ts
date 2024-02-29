export type Set<StoredActions = unknown> = (
    partial:
        | StoredActions
        | Partial<StoredActions>
        | ((state: StoredActions) => StoredActions | Partial<StoredActions>),
    replace?: boolean | undefined
) => void;

export type Get<StoredActions = unknown> = () => StoredActions;

export type Action<T, StoredActions = unknown> = (set: Set<StoredActions>, get: Get<StoredActions>) => T;
