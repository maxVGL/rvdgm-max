import strNode from '../assets/imgs/UI/str.png';
import dexNode from '../assets/imgs/UI/dex.png';
import lckNode from '../assets/imgs/UI/lck.png';

import Nodes from './Nodes.js';

function CharData({ name, title, desc, str, dex, lck, pos }) {
    let className="position-absolute top-0 p-2 " + pos;
    return (
        <div className={className} style={{ width: 150 + 'px' }}>

            <div id="p1Name" className="bold-pixels name">{name}</div>
            <div id="p1Title" className="title">{title}</div>
            <div id="p1Desc" className="desc">
                {desc}
            </div>

            <div className="mt-2">
                <div id="p1Str">
                    <Nodes type={strNode} value={str} />
                </div>
                <div id="p1Dex">
                    <Nodes type={dexNode} value={dex} />
                </div>
                <div id="p1Lck">
                    <Nodes type={lckNode} value={lck} />
                </div>
            </div>
        </div>
    );
}

export default CharData;