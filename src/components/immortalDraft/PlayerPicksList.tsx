import PlayersPickBlock from "./PlayersPickBlock.tsx";

const PlayerPicksList = () => {
    const picksNumber = [0, 1, 2, 3, 4]
    return (
        <div className="player-picks-list">
            <div className='player-picks-list__side'>
                {picksNumber.map((order) =>
                    <PlayersPickBlock order={order} side={'Radiant'} key={order}/>
                )}
            </div>
            <div className='player-picks-list__side'>
                {picksNumber.map((order) =>
                    <PlayersPickBlock order={order} side={'Dire'} key={order}/>
                )}
            </div>
        </div>
    );
};

export default PlayerPicksList;