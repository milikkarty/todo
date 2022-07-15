
const Add = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add item</label>
            <input
                autoFocus
                id="addItem"
                placeholder="Add..."
                required
                type="text"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />
            <button
                aria-label="Add item"
                type="submit"
            >Add</button>
        </form>
    )
}

export default Add;