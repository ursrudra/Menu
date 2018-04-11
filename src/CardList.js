import React from 'react';
import Itemcard from './Itemcard';
import {  Col } from 'reactstrap';
import Details from './Details';


class CardList  extends React.Component{
	constructor(props){
		super(props);
		this.state  = {
			detailview : false,
			title: "Food Item 1",
			nonVeg: false,
			spicy: false,
			imageurl:   'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
			description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 			
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

		}
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		
	}

	 openModal(name, imageurl, nonVeg, spicy, description,e) {
	 	console.log(description);
                   this.setState({
                   	detailview: true,
                   	title: name,
                   	imageurl: imageurl,
                   	nonVeg: nonVeg,
                   	spicy: spicy,
                   	description:description,
                   })
   	};
   	closeModal(){
   		this.setState({detailview: false})
   	}
	render(){
		const {items} = this.props;
	return (
	<div>
{		                		this.state.detailview &&
<Details isOpen={this.state.detailview}  isnonVeg={this.state.nonVeg} isSpicy = {this.state.spicy} closeModal ={ this.closeModal } title={this.state.title} description={this.state.description} imgsrc={this.state.imageurl}/>
}
	{

              !this.state.detailview &&
	 items.map((user, i) => {
		return (
			<Col  key= {i } xs="12" sm="6" md="4" lg="3" style={{'display':'inline-block'}}>
			<Itemcard
	                              key = {i} 
	                              id={items[i].id } 
	                              name={ items[i].name} 
	                              nonVeg={items[i].nonVeg} 
	                              spicy={items[i].spicy}
	                              imageurl={items[i].image}
	                              description={items[i].description}
	                              openModal = {this.openModal}
	                              /></Col>

	                              );
		}
		)
	  }    

             </div>
	);

	}
}

export default CardList;