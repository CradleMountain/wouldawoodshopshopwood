import React from 'react';
import ReactDOM from 'react-dom';

const ModalWrapper = (props) => {

  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.backClick}/>
  };

  const Modal = (props) => {
    return (
      <div className={`modal ${props.styles}`}>
        <div >
          {props.children}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop backClick={backClick}/>, document.getElementById('modal-root'))}
      {ReactDOM.createPortal(<Modal styles={props.styles}>{props.children}</Modal>, document.getElementById('modal-root'))}
    </React.Fragment>
  );
};

export default ModalWrapper;
