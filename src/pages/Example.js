import React, { useState } from "react";
// import InputNumber from "elements/Form/InputNumber";
// import Breadcrumb from "elements/Breadcrumb";
// import InputDate from "elements/Form/InputDate";
// import Dropdown from "elements/Dropdown";
// import InputText from "elements/Form/InputText";
// import Confirmation from "../parts/Checkout/Confirma"
import "./style.scss";
import Modal from "../parts/Modal";
// import CardWelcome from "../parts/CardWelcome";
// import Payment from "../parts/Checkout/Payment/Payment";
// import BookingInformation from "../parts/Checkout/Booking Information/BookingInformation";
export default function Example() {
  // const [getNavValue, setNavValue] = useState("");
  // const clicked = () => {
  //   setNavValue("Haloo");
  // };
  // return (
  //   <div className="container">
  //     <div
  //       className="row align-items-center justify-content-center"
  //       style={{ height: "100vh" }}
  //     >
  //       <div className="col-auto">
  //         <InputText />
  //       </div>
  //     </div>
  //   </div>
  // );
  // return <CardWelcome />;
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="app-modal">
      <h1>Hello</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Click Modal
      </button>
      {
        modalOpen && (
          // <div>
          <Modal setOpenModal={setModalOpen} />
        )
        // </div>
      }
    </div>
  );
}
