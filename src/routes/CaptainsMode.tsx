import NavMenu from "../components/NavMenu.tsx";
import AllHeroesList from "../components/captainsMode/AllHeroesList.tsx";
import PickList from "../components/captainsMode/PickList.tsx";
import SearchInput from "../components/UI/SearchInput/SearchInput.tsx";

const CaptainsMode = () => {

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