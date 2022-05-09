import ReactModal from "react-modal";

const ChargeModal = ({ onSubmit, onClose }) => {
  const clickSubmit = () => {
    onSubmit();
  };
  const clickClose = () => {
    onClose();
  };

  return (
    <ReactModal isOpen>
      <div>모달 입니다.</div>
      <div>
        <button onClick={clickSubmit}>확인</button>
        <button onClick={clickClose}>닫기</button>
      </div>
    </ReactModal>
  );
};

export default ChargeModal;
