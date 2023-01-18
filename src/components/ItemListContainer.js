import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { geneticas } from './data.js';
import Item from './Item';


const ItemListContainer = () => {




    const [load, setLoad] = useState(true) // no parte desde false ya que no estoy trayendo desde URL sino la datra desde un json local. por ende no hay espera.
    const [productos, setProductos] = useState([])

    const props = useParams()

    useEffect(() => {
        const productos = geneticas
        console.log(geneticas)
        
        setProductos(productos)


    }, [])


    return (
        <>
            {load ? <p className="itemListContainer__par">Aqui se encuentran las geneticas que pueden elegir los socios para incluir en su cuota de este mes:</p> : "Cargando productos..."}
            
            <ItemList productos={productos} /> 

        </>
    )
}

export default ItemListContainer;