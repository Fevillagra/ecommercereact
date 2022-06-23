import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer () {
    return (
        <>
        <ItemCount stock={10} initial={0}/>
        </>
    );
}

export default ItemListContainer;