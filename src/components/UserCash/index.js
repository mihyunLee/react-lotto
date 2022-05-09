import useModals from "../../hooks/useModal";
import Modals, { modals } from "../Modals/Modals";

export const UserCash = () => {
  const { openModal } = useModals();

  const clickCharge = () => {
    openModal(modals.chargeModal, {
      onSubmit: () => {
        console.log("비지니스 로직 처리...");
      },
    });
  };

  return (
    <div>
      <span>보유 예치금</span>
      <button onClick={clickCharge}>충전</button>
      <Modals />
      <span>0원</span>
    </div>
  );
};
