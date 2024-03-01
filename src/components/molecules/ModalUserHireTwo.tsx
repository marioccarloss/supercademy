"use client";

import { memo } from "react";
import { Modal } from "@/components/atoms/Modal";
import { Hiring } from "@/components/molecules/Hiring";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalUserHireTwo = memo(({ isModalOpen, modalName }: Props) => {
  return (
    <Modal active={isModalOpen} modalName={modalName}>
      <Hiring planHiring={2} />
    </Modal>
  );
});

ModalUserHireTwo.displayName = "ModalUserHireTwo";

export { ModalUserHireTwo };
