import './Item.style.css'

const rutaInicial = '../img/'
const Item = ({img, articulo, precio, id, marca}) => {
  return (
    <>
        <div className="card" key={id} role="button">
            <img src={rutaInicial + img} alt={articulo} width={'200px'}/>
            <div className="card-body">
                <h5>{articulo}</h5>
                <p>uS${precio}</p>
                <span style={{display: 'none'}}>{marca}</span>
            </div>
            <div className='btn btn-detalles'>Ver detalles</div>
        </div>
    </>
  )
}

export default Item;