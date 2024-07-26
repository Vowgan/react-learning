function Pokemon(props) {
    return (
        <>
            <h3>Pokemon {props.name}</h3>
            {props.type ? (
                <p className="type">{props.type}</p>
            ) : (
                <p className="noType">No Type</p>
            )}
        </>
    )
}

export default Pokemon;