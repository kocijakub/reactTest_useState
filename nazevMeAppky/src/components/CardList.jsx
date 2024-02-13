import {useState} from "react";
import {Card} from "./Card.jsx";

export function CardList(){
    const [favNum,changeFav] = useState(0)
    const [favNames,changeNames] = useState([])
    const fav = (event) =>{
        let yes = false
        for (let i = 0; i < favNames.length; i++) {
            if(favNames[i].includes(event.target.value)){
                favNames.splice(i,1)
                changeNames([...favNames])
                changeFav(favNum-1)
                yes = true
            }
        }
        //uz mam tuseni
        if(!yes){
           changeNames([...favNames,event.target.value])
            changeFav(favNum+1)
        }

    }
    let numOfCards = ['nazev jedna','nazev dva','nazev tri','nazev ctyri'];
    let cards = numOfCards.map(item =>{
        return Card(fav,item)
    })

    return(
        <div className={'cards'}>
            <div className={'nav'}>
                <h1>Feet</h1>
                <p>{favNum}</p>
            </div>
            <div>{cards}</div>
        </div>
    )
}