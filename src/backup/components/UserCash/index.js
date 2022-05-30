import { useState } from "react";
import useModals from "../../hooks/useModal";
import Modals, { modals } from "../../Modals/Modals";

import "./style.css";

export const UserCash = () => {
  const { openModal } = useModals();

  const [amount, setAmount] = useState(0);

  const clickCharge = () => {
    openModal(modals.chargeModal, {
      onSubmit: () => {
        console.log("비지니스 로직 처리...");
        setAmount((amount) => (amount += 10000));
      },
    });
  };

  return (
    <div className="UserCash">
      <span>보유 예치금</span>
      <button onClick={clickCharge}>충전</button>
      <Modals setAmount={setAmount} />
      <span>{amount.toLocaleString("ko-KR")}원</span>
    </div>
  );
};
