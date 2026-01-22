import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/game.css';
import './assets/css/animations.css';
import NavBar from './components/NavBar';

import hp3 from './assets/imgs/UI/battle/full_health.png';
import hp2 from './assets/imgs/UI/battle/half_health.png';
import hp1 from './assets/imgs/UI/battle/low_health.png';
import hp0 from './assets/imgs/UI/battle/no_health.png';

import die from './assets/imgs/UI/battle/dice.png';
import vs from './assets/imgs/UI/battle/vs.png';

import kaiImg from './assets/imgs/chars/kai.png';
import kaiImgH from './assets/imgs/chars/kai_h.png';
import scruffImg from './assets/imgs/chars/scruff.png';
import scruffImgH from './assets/imgs/chars/scruff_h.png';



function randomize() {
    return(Math.floor(Math.random() * 10) +1 );
}




function Game() {
    const navigate = useNavigate();
    const location = useLocation();

    var p1;
    var p2;

    // FAILSAFE por si se entra sin pasar por la selección de personaje primero
    if ( location.state === null ) {
        p1 = {
            name: "Kai",
            title: "the Furtive",
            desc: "A thief, a villain, and a friend - and he's good looking, and he sure as hell knows it!",
            str: 5,
            dex: 8,
            lck: 5,
            img: kaiImg,
            hurtImg: kaiImgH
        };
        p2 = {
            name: "Scruff",
            title: "the Idealist",
            desc: "A loyal friend who never knows when to quit - and who will always get back up.",
            str: 7,
            dex: 3,
            lck: 5,
            img: scruffImg,
            hurtImg: scruffImgH
        };
    } else {
        p1 = location.state.p1;
        p2 = location.state.p2;
    }

    // HPBAR HANDLING
    const hpbarStates = [hp0, hp1, hp2, hp3];

    var [p1hp, setP1HP] = useState(3);
    var [p2hp, setP2HP] = useState(3);

    var p1hpbar = hpbarStates[p1hp];
    var p2hpbar = hpbarStates[p2hp];

    // RANDOM NUMBER PULL
    var [p1rand, setRandom1] = useState(  );
    var [p2rand, setRandom2] = useState(  );

    // IMAGE HANDLING
    var [p1Img, setP1Img] = useState( p1.img );
    var [p2Img, setP2Img] = useState( p2.img );

    // BUTTON HANDLING
    const buttonStates = ["CONTEST", "FIGHT", "REMATCH", "PLAY AGAIN"];
    var [button, setButton] = useState( buttonStates[0] );

    // STAT HANDLING
    const stats = ["STRENGTH", "DEXTERITY", "LUCK"];
    var [stat, setStat] = useState( );
    var [p1stat, setP1Stat] = useState( );
    var [p2stat, setP2Stat] = useState( );

    var [p1anim, setP1Anim] = useState( );
    var [p2anim, setP2Anim] = useState( );

    /**
     * the big boye
     */
    function battle() { 
        switch ( button ) {
            case "CONTEST":
                setP1Img( p1.img ); setP2Img( p2.img );
                setRandom1(randomize()); setRandom2(randomize());
             
                setStat( stats[Math.floor(Math.random() * 3)] );  
                if ( p1hp === 0 || p2hp === 0 ) {
                    setP1HP(3);
                    setP2HP(3);
                }
                
                setButton( buttonStates[1] );
                break;

            case "FIGHT":
                switch ( stat ) {
                    case "STRENGTH":
                        setP1Stat( p1.str );
                        setP2Stat( p2.str );
                        break;
                    
                    case "DEXTERITY":
                        setP1Stat( p1.dex );
                        setP2Stat( p2.dex );
                        break;
                    
                    case "LUCK":
                        setP1Stat( p1.dex );
                        setP2Stat( p2.dex );
                        break;    
                }    

                setButton( buttonStates[2] );

                switch ( stat ) {
                    case "STRENGTH":
                        if ( p1rand + p1.str > p2rand + p2.str ) {
                            setP2Img( p2.hurtImg );
                            setP2HP( p2hp -1 );

                            if ( p2hp -1 === 0 ) {
                                setStat( p1.name.toUpperCase() + " WINS!" );
                                setP1Stat( ); setP2Stat( );
                                setP2Anim( "drop" );
                                setP2Img( p2.img );
                                setButton( buttonStates[3] );
                            } else  setP2Anim( "hurt" );

                        } else if ( p2rand + p2.str > p1rand + p1.str ) {
                            setP1Img( p1.hurtImg );
                            setP1HP( p1hp -1 );

                            if ( p1hp -1 === 0 ) {
                                setStat( p2.name.toUpperCase() + " WINS!" );
                                setP1Stat( ); setP2Stat( );
                                setP1Anim( "drop" );
                                setP1Img( p1.img );
                                setButton( buttonStates[3] );
                            } else  setP1Anim( "hurt" );

                        } else {
                            setStat( "TIE!" );
                        }
                        break;
                    
                    case "DEXTERITY":
                        if ( p1rand + p1.dex > p2rand + p2.dex ) {
                            setP2Img( p2.hurtImg );
                            setP2HP( p2hp -1 );

                            if ( p2hp -1 === 0 ) {
                                setStat( p1.name.toUpperCase() + " WINS!" );
                                setP1Stat( ); setP2Stat( );
                                setP2Anim( "drop" );
                                setP2Img( p2.img );
                                setButton( buttonStates[3] );
                            } else  setP2Anim( "hurt" );

                        } else if ( p2rand + p2.dex > p1rand + p1.dex ) {
                            setP1Img( p1.hurtImg );
                            setP1HP( p1hp -1 );

                            if ( p1hp -1 === 0 ) {
                                setStat( p2.name.toUpperCase() + " WINS!" );
                                setP1Stat( ); setP2Stat( );
                                setP1Anim( "drop" );
                                setP1Img( p1.img );
                                setButton( buttonStates[3] );
                            } else  setP1Anim( "hurt" );

                        } else {
                            setStat( "TIE!" );
                        }
                        break;
                    
                    case "LUCK":
                        if ( p1rand + p1.lck > p2rand + p2.lck ) {
                            setP2Img( p2.hurtImg );
                            setP2HP( p2hp -1 );

                            if ( p2hp -1 === 0 ) {
                                setStat( p1.name.toUpperCase() + " WINS!" );
                                setP1Stat( ); setP2Stat( );
                                setP2Anim( "drop" );
                                setP2Img( p2.img );
                                setButton( buttonStates[3] );
                            } else  setP2Anim( "hurt" );

                        } else if ( p2rand + p2.lck > p1rand + p1.lck ) {
                            setP1Img( p1.hurtImg );
                            setP1HP( p1hp -1 );

                            if ( p1hp -1 === 0 ) {
                                setStat( p2.name.toUpperCase() + " WINS!" );
                                setP1Stat( ); setP2Stat( );
                                setP1Anim( "drop" );
                                setP1Img( p1.img );
                                setButton( buttonStates[3] );
                            } else  setP1Anim( "hurt" );

                        } else {
                            setStat( "TIE!" );
                        }
                        break;    
                }

                break;

            case "REMATCH":
                setStat( );
                setP1Img( p1.img ); setP2Img( p2.img );
                setP1Anim( ); setP2Anim( );
                setP1Stat( ); setP2Stat( );
                setRandom1( ); setRandom2( );
                setButton( buttonStates[0] );
                break;

            case "PLAY AGAIN":
                setStat( );
                setP1HP( 3 ); setP2HP( 3 );
                setP1Img( p1.img ); setP2Img( p2.img );
                setP1Anim( ); setP2Anim( );
                setP1Stat( ); setP2Stat( );
                setRandom1( ); setRandom2( );
                setButton( buttonStates[0] );
                break;
        }


    }
    
    return (
        <div className="container-fluid vw-100 vh-100 d-flex flex-row justify-content-between text-center mt-5 pt-5">
            <NavBar />

                <div id="p1" className="char-portrait">

                    <h1 className="bold-pixels">{p1.name}</h1>

                    <div id="p1HP" className="d-flex flex-row align-items-center">
                        <img alt="" src={p1hpbar} className="hp-bar" />
                        <div className="dice bold-pixels text-dark d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(' + die + ')' }}>
                            {p1rand}
                        </div>
                    </div>
                    
                    <div className="position-absolute bottom-0 left-0 z-n1">
                        <img className={p1anim} src={p1Img} style={{ width: '40vw' }} />
                    </div>

                </div>

                <div className="middle vh-100 d-flex justify-content-center align-items-center flex-column">

                    <div className="mb-auto d-flex flex-column mt-5 pt-5 align-items-center">
                        <div className="bold-pixels fs-1 d-flex flex-row align-items-center gap-5">
                            <span> {p1stat} </span>
                            <span> {stat} </span>
                            <span> {p2stat} </span>
                        </div>
                        <img alt="" className="position-absolute" style={{marginTop: '25vh'}} src={vs} width="150px" />
                    </div>


                    <button className="position-absolute bottom-0 mb-5" onClick={() => { battle(); }}>
                        <span className="button-top"> {button} </span>
                    </button>

                    <div className="small mb-3 clickable position-absolute bottom-0"
                        onClick={() => navigate('/char-sel')}>
                        Return to Character Selection Screen
                    </div>
                    
                </div>

                <div id="p2" className="char-portrait ">

                    <h1 className="bold-pixels">{p2.name}</h1>

                    <div id="p2HP" className="d-flex flex-row-reverse align-items-center">
                        <img alt="" src={p2hpbar} className="hp-bar" style={{transform: 'scaleX(-1)'}}/>
                        <div className="dice bold-pixels text-dark d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(' + die + ')' }}>
                            {p2rand}
                        </div>
                    
                    </div>
                    <div className="position-absolute bottom-0 right-0 z-n1">
                        <img className={p2anim} src={p2Img} style={{ width: '40vw', transform: 'scaleX(-1)' }} />
                    </div>
                </div>
        </div>
    );
}

export default Game;