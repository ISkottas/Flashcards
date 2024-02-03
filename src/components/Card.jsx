import './Card.css';

function Card({id, value, selectedId, onClick}){
    return (
        <div className= {id === selectedId ? 'card chromed' : 'card' } onClick={onClick} >
            {value}
        </div>
    )
}

export default Card