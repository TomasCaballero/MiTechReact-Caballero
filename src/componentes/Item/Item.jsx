import './Item.style.css'

const Item = ({img, articulo, precio, id, marca}) => {
  return (
    <>
        <div className="card" key={id} role="button">
            <img src={img} alt={articulo} width={'200px'}/>
            <div className="card-body">
                <h5>{articulo}</h5>
                <p>uS${precio}</p>
                <span style={{display: 'none'}}>{marca}</span>
            </div>
        </div>
    </>
  )
}

export default Item;