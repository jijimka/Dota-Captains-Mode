const RadiantPickSide = () => {
    const blocks = [1, 4, 7, 8, 10, 11, 14, 15, 18, 19, 22, 23]
    const picks = [8, 14, 15, 18, 23]
    console.log(picks.includes(blocks[7]), blocks[7])
    return (
        <div className='pick-side-radiant'>
            <h1 className='pick-side-radiant__title'>Radiant</h1>
            <div className='pick-side-radiant__body'>
                {blocks.map((block) =>
                    <div className='pick-side-radiant__block'>
                        <div className={picks.includes(block) ? 'pick__block' : 'pick__block-ban'}>
                            {/* IMAGE OF HERO PICKED */}
                        </div>
                        <p className='pick__block-order'>{block}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RadiantPickSide;