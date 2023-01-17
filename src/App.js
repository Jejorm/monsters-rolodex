import { CardList } from './components/card-list/CardList.component'
import { SearchBox } from './components/search-box/SearchBox.component'
import { useEffect, useState } from 'react'
import './App.css'

export const App = () => {

    const [ searchField, setSearchField ] = useState( '' )

    const [ monsters, setMonsters ] = useState( [] )

    const [ filteredMonsters, setFilteredMonsters ] = useState( monsters )

    useEffect( () => {

        fetch( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => response.json() )
            .then( users => setMonsters( users ) )
    }, [] )

    useEffect( () => {

        const newFilteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes( searchField ) )

        setFilteredMonsters( newFilteredMonsters )
    }, [ monsters, searchField ] )

    const onSearchChange = ( event ) => {

        const searchFieldValue = event.target.value.toLowerCase()

        setSearchField( searchFieldValue )
    }

    return (

        <>

            <h1 className='app-title'>Monsters Rolodex</h1>

            <SearchBox
                onChangeHandler={ onSearchChange }
                className='monsters-search-box'
                placeholder='Search Monsters'
            />

            <CardList monsters={ filteredMonsters } />

        </>
    )
}
