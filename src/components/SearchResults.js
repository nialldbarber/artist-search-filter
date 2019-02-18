import React from "react";
import styled from "styled-components";

const SearchResultsWrap = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-between;
	label {
		font-size: 1.5rem;
		padding-right: 1.5rem;
	}
`;

const SearchResults = (props) => (
	<SearchResultsWrap>
		<label htmlFor="artist-name">Search Artist: </label>
		<input type="text" onChange={props.change} value={props.searchResult} />
	</SearchResultsWrap>
);

export default SearchResults;
