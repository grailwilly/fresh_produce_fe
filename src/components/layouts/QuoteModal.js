import React, { useState } from "react";
import SendMessage from "../pages/SendMessage";

const QuoteModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="mt-8 w-48 px-12 py-3 bg-teal hover:bg-white hover:text-teal text-xl text-white font-semibold drop-shadow-lg rounded-full"
                type="button" onClick={() => setShowModal(true)}>Get Quote</button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-end pt-6 rounded-b">
                  <button
                    className="text-4xl text-teal background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  < SendMessage />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default QuoteModal;