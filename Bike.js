import React, {useEffect, useState} from 'react';
import "./Bike.css";
import {useSpring, animated } from "react-spring";


const Bike = (props) => {

    const className = props.isSpinning ? "wheel1" : "wheel";
    const classNam = props.isSpinning ? "wheel2" : "whee";
    const className1 = props.isSpinning ? "chair" : " ";
    const classNa = props.isSpinning ? "farman" : "";
    const [select,setSelect] = useState( '/images/1.png');
    const [active,setActive] = useState('/images/1.png');
    const [animation,setanimation] = useState(false);

    const widgetAnimationStyle = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {translateX: 22 ,translateY:-3},
        to: {
            translateX:props.close ? 0 : 22,
            translateY:props.close ? -20 : -3,
        }
    });
    const widgetAnimationStyle1 = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {translateX: 235 ,translateY:-165},
        to: {
            translateX:props.close ? 100 : 235,
            translateY:props.close ? -150 : -165,
            opacity:animation? '0' : '1' ,
        }

    });
    const widgetAnimationStyle2 = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {translateX: 10,rotate:'-70.03deg' ,translateY:-300},
        to: {
            translateX:props.close ? 100 : 10,
            translateY:props.close ? -300 : -300,
            rotate:props.close? '-70.03deg' : '0',
            opacity:animation? '0' : '1' ,
        }

    });
    const widgetAnimationStyle3 = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {translateX: 5,rotate:'-71.52deg' ,translateY:-570},
        to: {
            translateX: props.close ? 570 : 5,
            translateY: props.close ? -170 : -570,
            rotate:props.close? '-71.52deg' : '0'
        }

    });
    const widgetAnimationStyle4 = useSpring({
        config: {mass: 1, tension: 180, friction: 10},
        from: {translateX: -5,rotate:'-67.52deg' ,translateY:-880},
        to: {
            translateX: props.close ? 825 : -5,
            translateY: props.close ? -310 : -880,
            rotate:props.close? '-67.52deg' : '0'
        }

    });

    useEffect(() => {
        console.log(props.close);
    }, [props.close]);


    useEffect(() => {
        if (select!== active){
            widgetAnimationStyle2();
        }
    }, [select,active]);

    const handleClick = (src) => {
        setActive(src);
    }
    return (
        <>
            <animated.div className="class">
                <animated.img style={{rotate:widgetAnimationStyle2.rotate,translateX: widgetAnimationStyle.translateX, translateY: widgetAnimationStyle.translateY}} src={("/images/b1.png")} alt="logo"/>


                <animated.img style={{translateX: widgetAnimationStyle1.translateX, translateY: widgetAnimationStyle1.translateY,width:140,height:140}} className={className} src={("/images/1.png")} alt="logo"/>
                <animated.img style={{translateX: widgetAnimationStyle2.translateX, translateY: widgetAnimationStyle2.translateY,width:140,height:140,opacity: widgetAnimationStyle2.opacity}} className={classNam} src={("/images/1.png")} alt="logo"/>

                <animated.img style={{rotate:widgetAnimationStyle3.rotate,width:500,height:310,translateX: widgetAnimationStyle3.translateX, translateY: widgetAnimationStyle3.translateY}} className={className1} src={("/images/4.png")} alt="logo"/>
                <animated.img style={{rotate:widgetAnimationStyle2.rotate,width:500,height:310.2,translateX: widgetAnimationStyle4.translateX, translateY: widgetAnimationStyle4.translateY}} className={classNa} src={("/images/5.png")} alt="logo"/>
            </animated.div>


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                {
                    [
                        "/images/11.png",
                        "/images/9.png",
                        "/images/8.png",
                        "/images/1.png",
                    ].map((src)=>{
                        return (  
                         <button onClick={handleClick.bind(null,src)}>
                            <img className= 'w1' src={src} alt="logo" />
                        </button>
                            )
                    })
                }
            </div>
        </>
    )
}
export default Bike;






