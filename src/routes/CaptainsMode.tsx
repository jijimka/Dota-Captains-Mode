import NavMenu from "../components/NavMenu.tsx";
import AllHeroesList from "../components/captainsMode/AllHeroesList.tsx";
import PickBar from "../components/captainsMode/PickBar.tsx";
import SearchInput from "../components/UI/SearchInput/SearchInput.tsx";
import {useTypedSelector} from "../hooks/redux.ts";

const CaptainsMode = () => {
    const asdf = useTypedSelector(state => state.playersPicks.direPlayers)
    console.log(asdf)
    return (
        <div className="CaptainsMode">
            <SearchInput>
                <NavMenu/>
                <AllHeroesList/>
                <PickBar/>
            </SearchInput>
        </div>
    );
};

export default CaptainsMode;