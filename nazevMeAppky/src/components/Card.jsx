import {useState} from "react";

export function Card(favChange,name){
    const [likeNum, changeNum] = useState(0)
    const like = () => {
        changeNum(likeNum+1)
    }
    const dislike = () => {
        if(likeNum > 0){
            changeNum(likeNum-1)
        }
    }
    return(
        <div className={'card'}>
            <div className={'cardTop'}>
                <h3>{name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ullam!</p>
            </div>
            <div className={'cardBottom'}>
                <button onClick={like}>
                    Like
                </button>
                <button onClick={dislike}>
                    Dislike
                </button>
                <p>{likeNum}</p>
                <button
                    value = {name}
                    onClick={favChange}>Add to favorite</button>
            </div>

        </div>
    )
}