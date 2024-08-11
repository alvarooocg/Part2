const Message = ({ arrayLength }) => {
    if ( arrayLength === 0 ) {
        return <p>No matches for this filter</p>
    } else if (arrayLength >= 1 && arrayLength <= 10) {
        return null
    } else {
        return <p>Too many matches, specify another filter</p>
    }
}

export default Message