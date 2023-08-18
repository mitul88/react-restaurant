import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap"

const MenuItem = ({dish, onSelectDish}) => {
  return (
    <div>
      <Card inverse style={{padding: "10px", margin: "10px", cursor:"pointer"}} onClick={onSelectDish}>
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 270,
            opacity: 0.7
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h2" style={{fontWeight: "bold", color: "#252B48"}}>
            {dish.name}
          </CardTitle>
          <CardText>
            <small style={{fontWeight: "bold", fontSize: "20px", color: "#C70039", backgroundColor: "#fff", padding: "0px 10px", borderRadius: "5px"}}>
              Price: {dish.price} /-
            </small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default MenuItem