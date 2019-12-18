import React from 'react'

const Card = (props: any ) => {
    return (
        <div className="choose-token-container flex flex-1 w-full bg-white shadow-2xl rounded-lg p-10">
            { props.children }
        </div>
    )
}

export default Card;