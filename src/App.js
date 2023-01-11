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

                <h1 className='app-title'>Monsters Rolodex</h1>

                <SearchBox
                    onChangeHandler={ this.onSearchChange }
                    className='monsters-search-box'
                    placeholder='Search Monsters'
                />

                <CardList monsters={ filteredMonsters } />

            </>
        )
    }
}
