import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/charsel.css';
import './assets/css/animations.css';

import test from './assets/imgs/UI/test.png'

import kai from './assets/imgs/UI/pfp_kai.png';
import scruff from './assets/imgs/UI/pfp_scruff.png';
import synapse from './assets/imgs/UI/pfp_synapse.png';
import ophelia from './assets/imgs/UI/pfp_ophelia.png';
import ollie from './assets/imgs/UI/pfp_ollie.png';
import luke from './assets/imgs/UI/pfp_luke.png';
import opal from './assets/imgs/UI/pfp_opal.png';
import sierra from './assets/imgs/UI/pfp_sierra.png';
import willow from './assets/imgs/UI/pfp_willow.png';
import rainer from './assets/imgs/UI/pfp_rainer.png';
import beta from './assets/imgs/UI/pfp_beta.png';

import kaiImg from './assets/imgs/chars/kai.png';
import scruffImg from './assets/imgs/chars/scruff.png';
import synapseImg from './assets/imgs/chars/synapse.png';
import opheliaImg from './assets/imgs/chars/ophelia.png';
import ollieImg from './assets/imgs/chars/ollie.png';
import lukeImg from './assets/imgs/chars/luke.png';
import opalImg from './assets/imgs/chars/opal.png';
import sierraImg from './assets/imgs/chars/sierra.png';
import willowImg from './assets/imgs/chars/willow.png';
import rainerImg from './assets/imgs/chars/rainer.png';
import betaImg from './assets/imgs/chars/beta.png';

import kaiImgH from './assets/imgs/chars/kai_h.png';
import scruffImgH from './assets/imgs/chars/scruff_h.png';
import synapseImgH from './assets/imgs/chars/synapse_h.png';
import opheliaImgH from './assets/imgs/chars/ophelia_h.png';
import ollieImgH from './assets/imgs/chars/ollie_h.png';
import lukeImgH from './assets/imgs/chars/luke_h.png';
import opalImgH from './assets/imgs/chars/opal_h.png';
import sierraImgH from './assets/imgs/chars/sierra_h.png';
import willowImgH from './assets/imgs/chars/willow_h.png';
import rainerImgH from './assets/imgs/chars/rainer_h.png';
import betaImgH from './assets/imgs/chars/beta_h.png';

import NavBar from './components/NavBar';
import CharData from './components/CharData';




function CharSel() {
    const navigate = useNavigate();
    
    let character = {
        name: "",
        title: "",
        desc: "",
        str: 0,
        dex: 0,
        lck: 0,
        img: test,
        hurtImg: test
    }

    var [char1, setChar1] = useState({...character, name: "P1"});
    var [char2, setChar2] = useState({...character, name: "P2"});

    var [choice, swapChoice] = useState(true);
    function updateChar( props ) {
        choice ? setChar1(prev => ({...prev, ...props})) : setChar2(prev => ({...prev, ...props}));
        swapChoice(choice => !choice);
    }

    return (

        <div className="CharSel d-flex flex-column vw-100 mt-5 pt-5">

        <NavBar />

            <div className="d-flex justify-content-center w-100 vh-50">

                <div className="position-relative" style={{ width: 500 + 'px', height: 500 + 'px' }}>
                
                    <img alt="" id="p1imgSel"
                        src={char1.img}
                        className="position-absolute bottom-0 start-0 character-img" />

                    <CharData name={char1.name} title={char1.title} desc={char1.desc} str={char1.str} dex={char1.dex} lck={char1.lck} pos="end-0 text-end" />
                
                </div>


                <div className="cyc position-relative justify-content-center mx-3" style={{width: 230 + 'px', height: 500 + 'px'}}>

                    <div className="position-absolute top-50 start-50 translate-middle text-center bold-pixels name"
                        style={{width: 250 + 'px'}}>
                        CHOOSE YOUR CHARACTER
                    </div>

                    <div id="betaBtn" className="position-absolute bottom-0">
                        <img alt="" id="beta" src={beta}
                            onClick={() => updateChar({
                                name: "Beta",
                                title: "the Champion",
                                desc: "She's vowed to be the strongest there is, was and ever will be.",
                                str: 8,
                                dex: 4,
                                lck: 6,
                                img: betaImg,
                                hurtImg: betaImgH
                            })}  />
                    </div>
                </div>


                <div className="position-relative" style={{width: 500 + 'px', height: 500 + 'px'}}>

                    <img alt="" id="p2imgSel"
                        src={char2.img}
                        className="position-absolute bottom-0 end-0 character-img"
                        style={{transform: 'scaleX(-1)'}} />

                    <div className="position-absolute top-0 start-0 p-2" style={{width: 150 + 'px'}}>

                        <CharData name={char2.name} title={char2.title} desc={char2.desc} str={char2.str} dex={char2.dex} lck={char2.lck}  />

                    </div>
                </div>

            </div>


            <div className="container d-flex pt-5 w-100 flex-column align-items-center">

                <div className="row justify-content-center g-4">
                    <div className="col-lg-2 col-sm-4 text-center">
                        <img alt="" id="kai" src={kai} className="pfp"
                            onClick={() => updateChar({
                                name: "Kai",
                                title: "the Furtive",
                                desc: "A thief, a villain, and a friend - and he's good looking, and he sure as hell knows it!",
                                str: 5,
                                dex: 8,
                                lck: 5,
                                img: kaiImg,
                                hurtImg: kaiImgH
                            })} />
                    </div>
                    <div className="col-lg-2 col-sm-4 text-center">
                        <img alt="" id="scruff" src={scruff} className="pfp"
                            onClick={() => updateChar({
                                name: "Scruff",
                                title: "the Idealist",
                                desc: "A loyal friend who never knows when to quit - and who will always get back up.",
                                str: 7,
                                dex: 3,
                                lck: 5,
                                img: scruffImg,
                                hurtImg: scruffImgH
                            })} />
                    </div>
                    <div className="col-lg-2 col-sm-4 text-center">
                        <img alt="" id="synapse" src={synapse} className="pfp"
                            onClick={() => updateChar({
                                name: "Synapse",
                                title: "the Mastermind",
                                desc: "Revenge, first and foremost. That's what he's after.",
                                str: 5,
                                dex: 6,
                                lck: 7,
                                img: synapseImg,
                                hurtImg: synapseImgH
                            })} />
                    </div>
                    
                    <div className="col-lg-2 col-sm-4 text-center">
                        <img alt="" id="ophelia" src={ophelia} className="pfp"
                            onClick={() => updateChar({
                                name: "Ophelia",
                                title: "the Amnesiac",
                                desc: "In search of the ghost of what she's lost, and to protect what she's found.",
                                str: 9,
                                dex: 5,
                                lck: 2,
                                img: opheliaImg,
                                hurtImg: opheliaImgH
                            })} />
                    </div>
                    <div className="col-lg-2 col-sm-4 text-center">
                        <img alt="" id="ollie" src={ollie} className="pfp"
                            onClick={() => updateChar({
                                name: "Ollie",
                                title: "the Archeologist",
                                desc: "From the past himself, and aims to learn all about it.",
                                str: 4,
                                dex: 6,
                                lck: 3,
                                img: ollieImg,
                                hurtImg: ollieImgH
                            })} />
                    </div>
                    <div className="col-lg-2 col-sm-4 text-center">
                        <img alt="" id="luke" src={luke} className="pfp"
                            onClick={() => updateChar({
                                name: "Luke",
                                title: "the Unlucky",
                                desc: "Luck is relative, isn't it?",
                                str: 4,
                                dex: 4,
                                lck: 10,
                                img: lukeImg,
                                hurtImg: lukeImgH
                            })} />
                    </div>
                </div>


                <div className="row justify-content-center mt-2 gx-4">

                    <div className="col-lg-2 col-sm-5 text-center">
                        <img alt="" id="opal" src={opal} className="pfp"
                            onClick={() => updateChar({
                                name: "Opal",
                                title: "the Legend",
                                desc: "Across time and space, once upon a time.",
                                str: 4,
                                dex: 7,
                                lck: 7,
                                img: opalImg,
                                hurtImg: opalImgH
                            })} />
                    </div>
                    <div className="col-lg-2 col-sm-5 text-center">
                        <img alt="" id="sierra" src={sierra} className="pfp"
                            onClick={() => updateChar({
                                name: "Sierra",
                                title: "the Nightmare",
                                desc: "Dead amongst the living, a deadly blade.",
                                str: 7,
                                dex: 7,
                                lck: 5,
                                img: sierraImg,
                                hurtImg: sierraImgH
                            })} />
                    </div>

                    <div className="col-lg-4 col-sm- text-center">
                        { char1.desc !== "" && char2.desc !== "" ? <div id="gameBtn"
                            className="bold-pixels clickable"
                            onClick={() => navigate('/game', {
                                state: {
                                    p1: char1,
                                    p2: char2
                                }
                            })}>
                            FIGHT
                        </div> : <div id="gameBtn" className="bold-pixels text-muted">FIGHT</div>}

                        <div id="returnBtn"
                            className="small clickable mt-1"
                            onClick={() => navigate('/')}>
                            Return to Main Menu
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-5 text-center">
                        <img alt="" id="willow" src={willow} className="pfp"
                            onClick={() => updateChar({
                                name: "Willow",
                                title: "the Hopeful",
                                desc: "A dreamer with her head in the clouds and heart on her sleeve.",
                                str: 6,
                                dex: 6,
                                lck: 6,
                                img: willowImg,
                                hurtImg: willowImgH
                            })} />
                    </div>
                    <div className="col-lg-2 col-sm-5 text-center">
                        <img alt="" id="rainer" src={rainer} className="pfp"
                            onClick={() => updateChar({
                                name: "Rainer",
                                title: "the Commander",
                                desc: "A ghostly blade of remorse, spite and love.",
                                str: 7,
                                dex: 8,
                                lck: 3,
                                img: rainerImg,
                                hurtImg: rainerImgH
                            })} />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default CharSel;