import {useMemo} from "react";
import {FieldErrors} from "react-hook-form";

export function useDisplayError(errors:FieldErrors) {
    const errorMsg = useMemo(() => {
            return Object.values(errors).length > 0?
                <div>{`${Object.values(errors)[0]?.message}`}</div>
                :
                <></>
    },[errors])

    return errorMsg
}