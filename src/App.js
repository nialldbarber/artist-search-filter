import React, { Component } from "react";
import styled from "styled-components";
import uuidv4 from "uuid/v4";
import Artist from "./components/Artist";
import AddArtist from "./components/AddArtist";
import SearchResults from "./components/SearchResults";
import "./App.css";

const Name = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 1rem 0;
	width: 100%;
	max-width: 1200px;
`;

export default class App extends Component {
	state = {
		artists: [
			{
				name: "Clark",
				id: uuidv4()
			},
			{
				name: "Aphex Twin",
				id: uuidv4()
			},
			{
				name: "Bibio",
				id: uuidv4()
			},
			{
				name: "Holy Other",
				id: uuidv4()
			},
			{
				name: "Squarepusher",
				id: uuidv4()
			},
			{
				name: "DJ Seinfeld",
				id: uuidv4()
			}
		],
		artistFilter: "",
		addArtist: ""
	};

	// Filter results
	handleChange = (e) => {
		this.setState({
			artistFilter: e.target.value
		});
	};

	// Add artist
	handleAdd = (e) => {
		this.setState({
			addArtist: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			artists: [
				...this.state.artists,
				{
					name: this.state.addArtist,
					id: uuidv4()
				}
			]
		});
	};

	render() {
		const { artists, artistFilter, addArtist } = this.state;
		const filteredArtists = artists.filter((artist) => {
			return artist.name.toLowerCase().includes(artistFilter.toLowerCase());
		});

		return (
			<div className="App App-header">
				<SearchResults change={this.handleChange} searchResult={artistFilter} />
				<AddArtist add={this.handleAdd} submit={this.handleSubmit} addedArtist={addArtist} />
				<Name className="artists">
					{filteredArtists.map((artist) => {
						return <Artist key={artist.id} name={artist.name} />;
					})}
				</Name>
			</div>
		);
	}
}
