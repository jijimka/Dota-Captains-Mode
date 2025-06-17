import NavMenu from "../components/NavMenu.tsx";
import AllHeroesList from "../components/AllHeroesList.tsx";
import PickList from "../components/PickList.tsx";
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