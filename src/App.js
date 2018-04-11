import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Container, Row} from 'reactstrap';
import Footer from './Footer';
import './App.css';
const state = {
	items		:  [ ],
	searchfeild	:  ' ',
}
class App extends Component{
	constructor() {
		super()
		this.state = state;
	}
	componentDidMount(){
		fetch('http://texpertise.in/data.php')
		.then(response => response.json())
		.then(users => this.setState({items:users}));
	}


	onSearchChange = (event) =>
	{
		this.setState({searchfeild : event.target.value})
	}

	render(){
		const filtereditems = this.state.items.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
		})
		return(
			<Container >
			<h1>Menu</h1>
		<SearchBox searchchange = {this.onSearchChange}	/>
					<Row>
					<CardList items={filtereditems}/>
				</Row>	
				<Footer/>
			</Container>

		);
	}
}

export default App;