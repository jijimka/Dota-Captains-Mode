import NavMenu from "../components/NavMenu.tsx";
import AllHeroesList from "../components/captainsMode/AllHeroesList.tsx";
import PickList from "../components/captainsMode/PickList.tsx";
import SearchInput from "../components/UI/SearchInput/SearchInput.tsx";
import {useTypedSelector} from "../hooks/redux.ts";

const CaptainsMode = () => {
    const asdf = useTypedSelector(state => state.playersPicks.direPlayers)
    console.log(asdf)
    return (
        <>
            <SearchInput>
                <NavMenu/>
                <AllHeroesList/>
                <PickList/>
            </SearchInput>
        </>
    );
};

export default CaptainsMode;