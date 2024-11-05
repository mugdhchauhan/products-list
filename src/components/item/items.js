import React from 'react';

const Items = (props) => {

    const {items, del, plusClick, minusClick} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <div className='quantityInput'>
                        <button className='quantityButton' onClick={() => minusClick(item.id)}>-</button>
                        <p>{item.quantity}</p>
                        <button className='quantityButton' onClick={() => plusClick(item.id)}>+</button>
                    </div>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items