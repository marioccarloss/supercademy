import { ReactNode } from "react";

import { Button } from "@/components/atoms/Button";
import { Icon } from "@/shared/Icon";
import { useModalStore } from "@/store/useModalStore";

import styles from "@/components/atoms/Modal.module.scss";
import classNames from "@/shared/classNames";

type Props = {
  active: boolean;
  alignVertical?: "center" | "top" | "bottom";
  children: ReactNode;
};

export const Modal = ({ active = false, alignVertical, children }: Props) => {
  const setOpened = useModalStore((state) => state.setOpened);

  const handleModalClosed = () => {
    setOpened(false);
  };

  if (!active) return null;

  return (
    <div
      className={classNames(
        styles.modal,
        styles[`modal--${alignVertical}`],
        styles.modal__open,
      )}
    >
      <div className={styles.modal__main}>
        <div className={styles.modal__header}>
          <Button type="button" onClick={handleModalClosed} mode="icon">
            <Icon icon="close" size={styles.modal__close} />
          </Button>
        </div>
        <div className={styles.modal__body}>{children}</div>
      </div>
      <div className={styles.modal__overlay} onClick={handleModalClosed}></div>
    </div>
  );
};
