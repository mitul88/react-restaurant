import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap"

const MenuItem = ({dish}) => {
  return (
    <div>
      <Card inverse style={{padding: "10px", margin: "10px"}}>
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 270,
            opacity: 0.8
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h2" style={{fontWeight: "bold", color: "#252B48"}}>
            {dish.name}
          </CardTitle>
          <CardText>
            {dish.description}
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default MenuItem