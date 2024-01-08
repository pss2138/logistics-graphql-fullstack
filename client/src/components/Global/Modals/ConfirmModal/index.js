import React from "react";
import * as Styles from "./styles";
import { useClickOutside } from "../../../../style/styleUtils";

const ConfirmModal = ({
  itemText,
  actionText,
  modalRef,
  handleClickConfirm,
  setIsModalOpen,
}) => {
  useClickOutside(modalRef, () => {
    setIsModalOpen(false);
  });
  return (
    <Styles.ModalWrapper>
      <Styles.Container ref={modalRef}>
        <Styles.TextArea>
          <Styles.Title>
            {itemText} {actionText}
          </Styles.Title>
          <Styles.SubTitle>
            Are you sure to {actionText} {itemText}(s)?
          </Styles.SubTitle>
        </Styles.TextArea>
        <Styles.ButtonsArea>
          <Styles.ConfirmButton onClick={handleClickConfirm}>
            {actionText}
          </Styles.ConfirmButton>
          <Styles.CancelButton
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Cancel
          </Styles.CancelButton>
        </Styles.ButtonsArea>
      </Styles.Container>
    </Styles.ModalWrapper>
  );
};

export default ConfirmModal;
