"use client";

import { memo } from "react";
import { Modal } from "@/components/atoms/Modal";
import { Hiring } from "@/components/molecules/Hiring";

type Props = {
  isModalOpen: boolean;
  modalName: string;
};

const ModalUserHireOne = memo(({ isModalOpen, modalName }: Props) => {
  return (
    <Modal active={isModalOpen} modalName={modalName}>
      <Hiring planHiring={1} />
    </Modal>
  );
});

ModalUserHireOne.displayName = "ModalUserHireOne";

export { ModalUserHireOne };
