import React from "react";
import styled from "styled-components";

const ArtistName = styled.p`
	font-size: 2rem;
	padding: 2rem;
`;

const Artist = (props) => <ArtistName>{props.name}</ArtistName>;

export default Artist;
