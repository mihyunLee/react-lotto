import { useContext } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";
import ChargeModal from "./ChargeModal";

// 모달 컴포넌트 매핑
export const modals = {
  chargeModal: ChargeModal,
};

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const { onSubmit, ...restProps } = props;

    const onClose = () => {
      close(Component);
    };
    const handleSubmit = async () => {
      if (typeof onSubmit === "function") {
        await onSubmit();
      }
      onClose();
    };

    return (
      <Component
        {...restProps}
        key={index}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    );
  });
};

export default Modals;
