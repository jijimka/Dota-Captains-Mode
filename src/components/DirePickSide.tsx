
const DirePickSide = () => {

    const blocks = [2,3,5,6,9,12,13,16,17,20,21,24]
    const picks = [9,13,16,17,24]

    return (
        <div className='pick-side-dire'>
            <h1 className='pick-side-dire__title'>Dire</h1>
            <div className='pick-side-dire__body'>
                {blocks.map((block) =>
                    <div className='pick-side-dire__block'>
                        <p className='pick__block-order'>{block}</p>
                        <div className={picks.includes(block) ? 'pick__block' : 'pick__block-ban'}>
                            {/* IMAGE OF HERO PICKED */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DirePickSide;