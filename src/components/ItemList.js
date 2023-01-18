import Item from "./Item"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'





const ItemList = ({ productos }) => {




    const [productosFiltrados, setProductosFiltrados] = useState()
    const [txtFilterValue, setTxtFilterValue] = useState()
    const [selectValue, setSelectValue] = useState()

    useEffect(() => {
        

        setProductosFiltrados(productos);
        console.log(productosFiltrados)
    }, [])

    const handleFilter = e => {
        console.log(e.target.value)
        if (!txtFilterValue && e.target.value == "todos") {
            setProductosFiltrados(productos);
            return ;
        }
        const copia = productos.filter(producto => {
            if (e.target.dataset.filter == "nombre") {
                setTxtFilterValue(e.target.value)
                if (selectValue && selectValue != "todos") {
                    if (producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())) {
                        return producto
                    }
                } else {
                    if (producto.nombre.toLowerCase().includes(e.target.value.toLowerCase()) && producto.variedad == selectValue) {
                        return producto
                    }
                }

            }



            if (e.target.dataset.filter == "variedad") {
                setSelectValue(e.target.value)
                if (txtFilterValue && e.target.value == "todos") {
                    if (producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())) {
                        return producto
                    }
                }  else if (txtFilterValue && e.target.value != "todos") {
                    if (producto.nombre.toLowerCase().includes(e.target.value.toLowerCase()) && producto.variedad == selectValue) {
                        return producto
                    }
                } else if (!txtFilterValue && e.target.value != "todos") {
                    if (producto.variedad == selectValue) {
                        return producto
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

                <select data-filter="categoria" onChange={handleFilter}>
                    <option value="todos">Todos</option>
                    <option value="sativa">Sativa</option>
                    <option value="indica">Indica</option>

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