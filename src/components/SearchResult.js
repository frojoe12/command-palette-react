import React from 'react'

const SearchResult = ({searchResults = []}) => {
    return (
        <>
            {searchResults.length>0 ? searchResults.map(result=><div>{result}</div>) : <div>Nothing found.</div>}
        </>
    )
}

export default SearchResult