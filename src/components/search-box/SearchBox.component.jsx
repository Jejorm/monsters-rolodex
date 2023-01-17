import './search-box.styles.css'

export const SearchBox = ( { onChangeHandler, className, placeholder } ) => (
    <input
        type='search'
        className={ `search-box ${ className }` }
        placeholder={ placeholder }
        onChange={ onChangeHandler }
    />
)