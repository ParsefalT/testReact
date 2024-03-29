import "./employees-list-item.css";

function EmployeesListItem(props) {
    const {name, salary, onDelete, onToggleIncrease, onToggleLike, increase, like} = props;
    // const {increase, like} = this.state;
    let classCookieLike = "list-group-item d-flex justify-content-between";
    if(increase) {
        classCookieLike += ' increase';
    }
    if(like) {
        classCookieLike += ' like';
    }
    return ( 
        <li className={classCookieLike}>
            <span className='list-group-item-label' onClick={onToggleLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-cookie btn-sm" type="button" onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;