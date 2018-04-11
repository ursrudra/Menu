import React from 'react';
import { Input } from 'reactstrap';
const SearchBox = ({searchfeild, searchchange}) =>{
		return (
			<div className="m-5 sticky-top">

				<Input 
					type='search' 
					name='itemsearch'
				 	placeholder='Search your favourite Item
				 	'required
				 	onChange={searchchange} 
				 />
			</div>	 
			);

}
export default SearchBox;