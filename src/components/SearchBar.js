import React from 'react'

const SearchBar = ({value, onChangeHandler, placeHolder}) => {
    return (
        <div>
        <input autoFocus className='bg-gray-100' placeholder={placeHolder} type='text' value={value} onChange={onChangeHandler}/>
        </div>
    )
}

export default SearchBar