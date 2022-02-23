import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Are you Sure You Want to Continue ?</h1>
                </div>
                <div className="body">
                    <p>
                        The next page looks amazing. Hope you want to go there !
                    </p>
                </div>
                <div className="footer">
                    <button
                        id="cancelBtn"
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        Cencal
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
