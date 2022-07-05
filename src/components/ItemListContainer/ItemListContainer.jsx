import './ItemListContainer.css';
import React, { useEffect, useState } from 'react';
import { listadoProdutos } from '../../data/asyncMock';
import { ItemList } from '../ItemList/ItemList';
// import Swal from 'sweetalert2';



export const ItemListContainer = () => {

  // const onAdd = (b) => {
  //   if(b > 0) {
  //     Swal.fire({
  //       icon: 'success',
  //       title: `Agregaste ${b} unidades al carrito`,
  //       showConfirmButton: true,
  //     })
  //   }
  // }

    const [productos, setProductos] = useState([])

    const getProductos = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            listadoProdutos.length > 0 ?
              resolve(listadoProdutos)
              :
              reject("No hay datos")
          }, 2000);
        }
        )
      }

      useEffect(() => {
        getProductos()
          .then(res => setProductos(res))
          .catch(err => console.log(err))
      }, []) 

    return (
        
          <div>
              <ItemList listadoProductos={productos} /> 
          </div>
  
    );
}
