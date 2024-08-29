import React from 'react'

const Adds = ({image, text, bgColor}) => {
return (
<>
    <div className="adds">
        <div className="relative inline-block">
            <img className='relative' src={image} alt="banner" />
            <button
                className={`absolute hover:bg-red-500 leading-[22px] top-1/2 right-4 transform -translate-y-1/2 ${bgColor} text-white px-4 py-2 rounded-[3px]`}>
                {text}
            </button>
        </div>
    </div>
</>
)
}

export default Adds