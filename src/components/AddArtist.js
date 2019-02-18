import React from "react";

const AddArtist = (props) => (
	<div className="add-artist">
		<h2>Add Artist</h2>
		<form onSubmit={props.submit}>
			<input type="text" onChange={props.add} value={props.addedArtist} />
			<button type="submit">Add</button>
		</form>
	</div>
);

export default AddArtist;

// 3. grab value from form

// 4. onSubmit pass the value back to new artist?
