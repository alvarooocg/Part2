const Persons = ({ persons }) => 
    <>
        {persons.map((p) => <p key={p.id}>{p.name}</p>)}
    </>

export default Persons