import React from 'react';
import { search } from 'react-bootstrap-icons';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<search className='search-icons' size="20" />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type here to search...'
			/>
		</div>
	);
};

export default Search;
