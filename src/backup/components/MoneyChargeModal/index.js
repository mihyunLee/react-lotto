import ReactModal from "react-modal";

const ChargeModal = ({ onSubmit, onClose }) => {
  let selectedAmount = 0;

  const clickSubmit = () => {
    onSubmit();
  };
  const clickClose = () => {
    onClose();
  };

  const clickBtn = (e) => {
    selectedAmount = Number(e.target.dataset.amount);
    console.log(selectedAmount);
  };

  return (
    <ReactModal isOpen>
      <div>
        <span>사용가능 금액</span>
        <span>0원</span>
      </div>
      <div>
        <button data-amount="1000" onClick={clickBtn}>
          1,000원
        </button>
        <button data-amount="5000" onClick={clickBtn}>
          5,000원
        </button>
        <button data-amount="10000" onClick={clickBtn}>
          10,000원
        </button>
        <button data-amount="20000" onClick={clickBtn}>
          20,000원
        </button>
        <button data-amount="50000" onClick={clickBtn}>
          50,000원
        </button>
        <button data-amount="100000" onClick={clickBtn}>
          100,000원
        </button>
      </div>
      <div>
        <button onClick={clickSubmit}>확인</button>
        <button onClick={clickClose}>취소</button>
      </div>
    </ReactModal>
  );
};

export default ChargeModal;
