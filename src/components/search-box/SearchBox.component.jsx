import { Component } from 'react'

export class SearchBox extends Component {

    render() {

        const { onChangeHandler, className, placeholder } = this.props

        return (

            <input
                type='search'
                className={ className }
                placeholder={ placeholder }
                onChange={ onChangeHandler }
            />
        )
    }
}