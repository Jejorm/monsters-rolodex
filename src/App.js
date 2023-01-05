import './App.css'
import { Component } from 'react'

class App extends Component {

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

        const { onSearchChange } = this

        const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes( searchField ) )

        return (

            <div>

                <input
                    className='search-boc'
                    type='search'
                    placeholder='Search Monsters'
                    onChange={ onSearchChange }
                />

                {
                    filteredMonsters.map( monster => <h1 key={ monster.id }>{ monster.name }</h1> )
                }

            </div>
        )
    }
}

export default App
