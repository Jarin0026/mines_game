import "./Square.css"
import hoverEffect from "../sound/hover.wav"
import click from "../sound/gold.wav"
import mineIcon from "../sound/mine.png"
import bombIcon from "../sound/bomb.png"
import { useEffect, useState } from "react"

function Square({mine,setGameOver,gameOver,setScore}){

    let [image,setImage]=useState(null);

    useEffect(() =>{
        if(gameOver){
            if(mine){
                setImage(bombIcon);
            }
            else{
                setImage(mineIcon);
            }
        }
    },[gameOver])

    function mouseEnterHandle(){
        if(!image){
        const sound = new Audio(hoverEffect);
        sound.play();
    
        }
    }

    function clickHandler(){

        if(gameOver) return;

        if(!mine){
            setScore((prev)=>{
                return prev + 100;
            })
            
            setImage(mineIcon);
        const sound = new Audio(click);
        sound.play();
        }
        else{
            alert("Click clicked on BOMB 💣 Click OK to check BOMB")
            setGameOver(true);
        }
    }


    return <>
    <div className="square-item"
    onMouseEnter={mouseEnterHandle}
    onClick={clickHandler}
    >
        {image &&  <img height={95} width={95}  src={image} />}
    </div>
    </>

}

export default Square