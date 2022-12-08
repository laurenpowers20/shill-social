import "./Modal.css";
import Button from "@mui/material/Button";
import React from "react";

function UserModal(props) {
	return (
		<div className="modal" onClick={props.onClose}>
			<div className="modal-content">
				<div className="modal-body">
					<h2 className="modal-title">User Information: </h2>
					<Button onClick={props.onClose} className="modal-button">
						Close
					</Button>
				</div>
			</div>
		</div>
	);
}

export default UserModal;
