import { create } from "zustand";
import { useZustandFunctions as ZustandFunctions  } from "../hooks/useZustadFunctions";
enum GalaxyStoreProps {
    GalaxyRotationSpeed = "galaxyRotationSpeed",
    StarsRotationSpeed = "starsRotationSpeed",
}

interface State {
    [GalaxyStoreProps.GalaxyRotationSpeed]: number;
    [GalaxyStoreProps.StarsRotationSpeed]: number;
}

const initialState: State = {
    [GalaxyStoreProps.GalaxyRotationSpeed]: 0.3,
    [GalaxyStoreProps.StarsRotationSpeed]: 0.05,
};

/**
 * @description Stores del estado global e interfaces de los storesActions
 * @tutorial Para agregar una nnueva action, agregar una interfaz con el nombre del action en UpperCamelCase y agregarlo a la interfaz StoredActions
 * y la funcion agregada en el objeto que se retorna en el create escrita en lowerCamelCase
 */

const { setValue } = ZustandFunctions<StoredActions, State>();

interface StoredActions extends State {
    setIncreaseStarsRotation: (value: number) => void;
    resetStarsRotation: () => void;
}

export const GalaxyStore = create<StoredActions>()((set, get) => ({
    ...initialState,
    setIncreaseStarsRotation: setValue<number>(GalaxyStoreProps.StarsRotationSpeed)(set, get),
    resetStarsRotation: () => set({ [GalaxyStoreProps.StarsRotationSpeed]: 0.05 })
}));
