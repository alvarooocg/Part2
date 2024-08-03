const Persons = ({ persons }) => 
    <>
        {persons.map((p) => <p key={p.id}>{p.name} - <b>{p.number}</b></p>)}
    </>

export default Persons