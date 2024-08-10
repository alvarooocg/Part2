const Finder = ({ filter, handleFilterChange }) => {
    <form>
        <div>
            find countries <input
                                value={filter}
                                onChange={handleFilterChange} />
        </div>
    </form>
}

export default Finder