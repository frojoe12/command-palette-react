import React, {Fragment, useState, useEffect} from 'react'

import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import { Transition } from '@headlessui/react'

import { searchData } from '../data'


const CommandPallette = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [fetchedSearchData,setFetchedSearchData] = useState([])
    const [inputTimer,setInputTimer] = useState(null)

    const searchFor = (value) => {
        if (value.length <1) {return}
        const newData = fetchedSearchData.filter(result=>result.toLowerCase().includes(value.toLowerCase()))
        setSearchResults(newData)
    }
    const onChangeHandler = (ev) => {
        if (inputTimer !== null) {clearTimeout(inputTimer)}
        setSearchValue(ev.target.value)
        setSearchResults(['Searching...'])
        const newTimer = setTimeout(()=>{
            console.log('searching')
            searchFor(ev.target.value)
        },500)
        setInputTimer(newTimer)
        
           
    }
    const onKeyDown = (ev) => {
       if (ev.key==='k' && (ev.metaKey|| ev.ctrlKey)) {
            setIsOpen(prevState => (!prevState))
       } 
       if (ev.key==='Escape') {
            setIsOpen(false)
       }
    }
    useEffect(()=>{
        window.addEventListener("keydown", onKeyDown)
        return () => {
            window.removeEventListener("onKeyDown", onKeyDown)
        }
    },[])
    
    useEffect(()=>{
        // simulate fetching a lot of dummy data for testing useTransition hook
        const simulateFetchData = searchData
        for (let i = 1 ; i<=10000 ; i++) {
            simulateFetchData.push(`Item no ${i}`)
        }
        setFetchedSearchData(simulateFetchData)
    },[])

    return (
            <>
                <Transition
                    className="translate-y-5 opacity-0"
                    show={isOpen}
                    enter="transition-{opacity translate} duration-100"
                    enterFrom="opacity-0 translate-y-5"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-{opacity translate} duration-100"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-5"
                >
                <div className='flex flex-col fixed'>
                <SearchBar 
                    placeHolder='Search...'
                    onChangeHandler={onChangeHandler}
                    value={searchValue}
                />
                { searchValue !=="" ? <SearchResult searchResults={searchResults}/>: "Start typing to search for something!"}
                
            </div> 
                
            </Transition>
            </>)
    
}

export default CommandPallette