import Item from "./Item"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'





const ItemList = ({ productos }) => {

    const [productosFiltrados, setProductosFiltrados] = useState(productos)
    const [txtFilterValue, setTxtFilterValue] = useState()
    const [selectValue, setSelectValue] = useState()

    useEffect(() => {
        setProductosFiltrados(productos);
    }, [])

    const handleFilter = e => {
        console.log(e.target.value)
        const filterType = e.target.dataset.filter;

        if ((filterType == 'nombre' && !e.target.value && !selectValue) || (filterType == 'variedad' && !txtFilterValue && e.target.value == "todos")) {
            setProductosFiltrados(productos);
            return ;
        }
        const copia = productos.filter(producto => {
            if (e.target.dataset.filter == "nombre") {
                setTxtFilterValue(e.target.value)
                if (e.target.value && selectValue != "Todos") {
                    if (producto.nombre.toLowerCase().includes(e.target.value.toLowerCase()) && producto.variedad == selectValue) {
                        return producto;
                    }
                } else if(!e.target.value && selectValue != "Todos"){
                    if (producto.variedad == selectValue) {
                        return producto;
                    }
                } else {
                    if (producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())) {
                        return producto;
                    }
                }
            }

            if (e.target.dataset.filter == "variedad") {
                setSelectValue(e.target.value)
                if (txtFilterValue && e.target.value == "Todos") {
                    if (producto.nombre.toLowerCase().includes(txtFilterValue.toLowerCase())) {
                        return producto;
                    }
                }  else if (txtFilterValue && e.target.value != "Todos") {
                    if (producto.nombre.toLowerCase().includes(txtFilterValue.toLowerCase()) && producto.variedad == e.target.value) {
                        return producto;
                    }
                } else if (!txtFilterValue && e.target.value != "Todos") {
                    if (producto.variedad == e.target.value) {
                        return producto;
                    }
                }
            }
        })
        setProductosFiltrados(copia)
    }

    const handleChangeName = (e) => {
        console.log(e.target.value)
        const copia = productos.filter(producto => {
            return producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setProductosFiltrados(copia)
    }


    return (
        <>
            <nav>
                <input data-filter="nombre" onChange={handleFilter} type="text" placeholder="Nombre del producto"></input>

                <select data-filter="variedad" onChange={handleFilter}>
                    <option value="Todos">Todos</option>
                    <option value="Sativa">Sativa</option>
                    <option value="Indica">Indica</option>

                </select>
            </nav>

            <div className="row">
                {productosFiltrados?.map((producto) => {
                    return (
                        <Item producto={producto} key={producto.id} />


                    )
                })}
            </div>
        </>
    )
}

export default ItemList