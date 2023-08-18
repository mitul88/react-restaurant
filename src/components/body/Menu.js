import { useState } from "react"
import MenuItem from "./MenuItem"
import DISHES from "../../data/dishes"
import DishDetail from "./DishDetail"

const Menu = () => {
    const [dishes] = useState(DISHES)
    const [selectedDish, setSelectedDish] = useState(null)
    
    const onSelectDish = (dish) => {
        setSelectedDish(dish)
    }
    
    const menu = dishes.map(dish => {
        return <MenuItem key={dish.id} dish={dish} onSelectDish={()=>onSelectDish(dish)} />
    })

    const dishDetail = selectedDish ? <DishDetail dish={selectedDish} /> : null
  return (
    <div className="container">
        <div className="row">
            <div className="col-5">
                {menu}   
            </div>
            <div className="col-7">
                {dishDetail} 
            </div>
        </div>
    </div>
  )
}

export default Menu