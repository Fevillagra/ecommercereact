import './ItemListContainer.css'

function ItemListContainer (props) {
    return (
        <section className="cuerpo">
            <h2>{props.greeting}</h2>
            <div className="cuerpo__div">
                <i class="fa-solid fa-boxes-packing"></i>
            </div>
        </section>
    );
}

export default ItemListContainer;