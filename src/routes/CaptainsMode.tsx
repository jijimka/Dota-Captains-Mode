import NavMenu from "../components/NavMenu.tsx";
import AllHeroesList from "../components/captainsMode/AllHeroesList.tsx";
import PickBar from "../components/captainsMode/PickBar.tsx";
import SearchInput from "../components/captainsMode/SearchInput.tsx";
import CaptainsModeSettings from "../components/captainsMode/CaptainsModeSettings.tsx";


const CaptainsMode = () => {

    return (
        <div className="CaptainsMode">
            <SearchInput>
                <NavMenu/>
                <AllHeroesList/>
                <PickBar/>
                <CaptainsModeSettings/>
            </SearchInput>
        </div>
    );
};

export default CaptainsMode;