import React from 'react';
import './App.css';
import chilli from './chilli.png';
import {  Row,Col, Card ,Button} from 'reactstrap';
class Details extends React.Component  {
 render() {
    if (this.props.isOpen === false) {
      return null;
    }
    const {imgsrc, title, description, isSpicy,isnonVeg,closeModal} = this.props;
    return(
    		<Card className="p-3 m-1">

		<Row>

		<Col md="4"><img  className="product-image" src={imgsrc} alt={title}/></Col>
		<Col md="8">
		<Row>
			<Col >
				<b>{title}</b>
 			</Col>
    		</Row>
   
		<Row>
			<Col >
				<p className="text-justify">
  					{description}
  				</p>
    				<p className="text-justify">
					    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</Col>
    		</Row>
    		<Row>
			<Col >
			 {isnonVeg ?
				                   <span className="subtitle"><b className="dot" id="red"></b>Non Veg</span>
				                  : <span className="subtitle"> <b className="dot" id="green"></b>Veg</span>
				              }
				    
				    {isSpicy  && <span className="subtitle"><img className="chilli"  src={chilli} alt={title}/>Spicy</span>} 
				    	
		           	</Col>
    		</Row>
   
   		 </Col>
		</Row>
		<Button className="mt-5" onClick={closeModal}>Go back</Button>
		</Card>
	
		);
 
  }
}

export default Details;

