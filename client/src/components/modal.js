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

  const backClick = () => {
    console.log('I AM THE BD DEMO CLICK!') // refactor below before pushibng
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop backClick={backClick}/>, document.getElementById('modalRoot'))}
      {ReactDOM.createPortal(<Modal styles={props.styles}>{props.children}</Modal>, document.getElementById('modalRoot'))}
    </React.Fragment>
  );
};

export default ModalWrapper;