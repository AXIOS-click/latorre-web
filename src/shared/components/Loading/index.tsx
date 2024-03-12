import SyncLoader from "react-spinners/SyncLoader";

export const LoadingSpinner = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <SyncLoader color="#36d7b7" />
        </div>
    );
};
