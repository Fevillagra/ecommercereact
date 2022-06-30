import './ItemCount.css'
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

function ItemCount({stock, initial, onAdd}) {
    
    
    
    const [num, setNum] = useState(initial);

    useEffect( () => {
        if(num === stock - 2){
            Swal.fire({
                title: 'Atención!',
                text: 'Quedan pocas unidades',
                icon: 'warning',
                timer: 2000
              })
        }
    }, [num])

    const sumar = () => {
        if(num < stock) {
            setNum(num + 1)
        } else {
            Swal.fire({
                title: 'Atención!',
                text: 'Stock máximo alcanzado',
                icon: 'warning',
                timer: 2000
              })
        }
    }

    const resta = () => {
        if(num > initial) {
            setNum(num - 1)
        }
    }

    const reset = () => {
        setNum(initial)
    }

    const addToCart = () => {
        setNum(initial)
        onAdd(num)
    }


    return(
        <>
        <div className="counterdiv">
            <p className="counterdiv__quantity">{num}</p>
            <p className="counterdiv__stock">Stock disponible: {stock}</p>
            <div className="counterdiv__bntscontainer">
                <div className="conterdiv__bntscontainer-1">
                    <button onClick={sumar}>+</button>
                    <button onClick={resta}>-</button>
                </div>
                <div className="conterdiv__bntscontainer-2">
                    <button onClick={reset}>reset</button>
                    <button onClick={addToCart}>{ num > 0 ? `Agregar al carrito` : `Elegí tu cantidad`}</button>
                </div>
            </div>
            <p>Nota: Es a modo demostrativo, para el proyecto final va a ser acorde a la card del producto.</p>
        </div>
        </>
    )
}

export default ItemCount;