import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import LoadComments from './LoadComments'

const DishDetail = ({dish}) => {
  return (
    <>
        <Card className="my-2" style={{textAlign: 'left'}}>
            <CardImg
            alt={dish.name}
            src={dish.image}
            style={{
                height: 350
            }}
            top
            width="100%"
        />
            <CardBody>
                <CardTitle tag="h5">
                {dish.name}
                </CardTitle>
                <CardText>
                {dish.description}
                </CardText>
                <CardText>
                    <small className="text-muted">
                    {dish.price}
                    </small>
                </CardText>
                <hr />
                <LoadComments comments={dish.comments} />
            </CardBody>
        </Card>
    </>
  )
}

export default DishDetail