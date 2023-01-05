import './App.css'
import { Component } from 'react'
import { CardList } from './components/card-list/CardList.component'
import { SearchBox } from './components/search-box/SearchBox.component'

export class App extends Component {

    constructor() {
        super()
        this.state = { monsters: [], searchField: '' }
    }

    componentDidMount() {

        fetch( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => response.json() )
            .then( users => this.setState( () => ( { monsters: users } ) ) )
    }

    onSearchChange = ( e ) => {

        const searchField = e.target.value.toLowerCase()

        this.setState( () => ( { searchField } ) )
    }

    render() {

        const { monsters, searchField } = this.state

        const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes( searchField ) )

        return (

            <>

                <SearchBox
                    onChangeHandler={ this.onSearchChange }
                    className='search-monsters'
                    placeholder='Search Monsters'
                />

                <CardList monsters={ filteredMonsters } />

            </>
        )
    }
}
