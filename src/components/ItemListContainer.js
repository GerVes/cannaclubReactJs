

const ItemListContainer = (props) => {
    return ( <>
        <h3 className="itemlist__tittle">{props.greeting}</h3>
        <p className="itemListContainer__par">Aqui se encuentran las geneticas que pueden elegir los socios para incluir en su cuota de este mes:</p>
        </>
    )
}

export default ItemListContainer;