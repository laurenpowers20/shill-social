import SignUpModal from "../Components/Modals/Modal-Sign-Up";
import Modal from "../Components/Modals/Modal-Sign-In";
import {doLogout} from "../services/UserFunctions"
import UserModal from "../Components/Modals/Modal-UserModal";
import { useState } from "react";
import "./Modals/Modal.css";
import "./Footer.css";
import Button from "@mui/material/Button";
import { SignpostOutlined } from "@mui/icons-material";
import Cookies from 'js-cookie'
function Footer() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setSignUpModal] = useState(false);
  const [showUserModal, setUserModal] = useState(false);

  return (
    <>
      {Cookies.get("AccessToken") === "loggedout" && <>
      <div className="footer-sign-in-up-container">
        <div className="footer-sign-in">
          <Modal
            onClose={() => setShowSignInModal(false)}
            show={showSignInModal}
          />
          <Button
            className="modal-button"
            onClick={() => setShowSignInModal(true)}
          >
            Sign In
          </Button>
        </div>
        <div className="footer-sign-up">
          <SignUpModal
            onClose={() => setSignUpModal(false)}
            show={showSignUpModal}
          />
          <Button className="modal-button" onClick={() => setSignUpModal(true)}>
            Sign Up
          </Button>
        </div>
        </div></>}
      
      {Cookies.get("AccessToken") !== "loggedout" && <>
        <div className="footer-user-container">
        <div className="footer-sign-in">
          <Button className="modal-button">
            {Cookies.get("User")}
            </Button>
          <Button className="modal-button" onClick={ doLogout }>
            Logout
          </Button>
        </div>
        </div></>}
    </>
  );
}

export default Footer;
