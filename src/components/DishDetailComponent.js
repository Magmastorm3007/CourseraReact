import React, { Component } from 'react'; 
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetails extends Component {

	renderDish(dish) {
        if (dish != null) {
            return (
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
	}
    render() {
        

		return ( 
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
               
            </div>
		);
    }
}

export default DishDetails;