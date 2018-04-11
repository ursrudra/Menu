import React from 'react';
import './App.css';
import chilli from './chilli.png';

import { Card, CardImg,  CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
class  Itemcard  extends React.Component{
	constructor(){
		super();
                           this.state = {name: ' '}
		this.getItemId = this.getItemId.bind(this);	
	}
      getItemId(name){

            this.setState({name: name});
            this.props.openModal(this.state.name);
            console.log(this.state.name);
      }

	render(){
		const {name,imageurl,nonVeg,spicy,description} = this.props;
		return(
		<div>
		
				          <Card  className="mb-4 cardlayout">
				           <CardImg top width="100%" src={imageurl}  alt= {name} />
				            <CardBody>
				              <CardTitle className="title">{name.substr(0,1).toUpperCase() + ""+ name.substr(1,12) }</CardTitle>
				              <CardSubtitle className="d-inline align-middle">
				              {nonVeg ?
				                   <span className="subtitle"><b className="dot" id="red"></b>Non Veg</span>
				                  : <span className="subtitle"> <b className="dot" id="green"></b>Veg</span>
				              }
				    
				    {spicy  && <span className="subtitle"><img className="chilli"  src={chilli} alt={name}/>Spicy</span>} 
				    	          		
				              </CardSubtitle>
				              <Button size="sm" color="danger" className="float-right d-inline" value={imageurl}  onClick={(e) => this.props.openModal(name, imageurl,nonVeg, spicy,description)}>View Details</Button>
				            </CardBody>
				          </Card>
				     
    		   

    		 </div>		
		);
				


	}

}


export default Itemcard;

