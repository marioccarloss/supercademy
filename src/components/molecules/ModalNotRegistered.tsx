import { Modal } from "@/components/atoms/Modal";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import styles from "./ModalLogin.module.scss";

type Props = {
  data: {
    title: string;
    message: string;
    cta: {
      name: string;
      slug: string;
    };
  };
  isModalOpen: boolean;
};

export const ModalNotRegistered = ({ data, isModalOpen }: Props) => {
  const { title, message, cta } = data;

  return (
    <Modal active={isModalOpen} alignVertical="center">
      <div className={styles.modal__content}>
        <Typography mode="title" className={styles.modal__title}>
          {title}
        </Typography>
        <Typography mode="body" align="center">
          {message}
        </Typography>
        <div className={styles.modal__buttonContent}>
          <Button mode="primary" href={cta.slug}>
            {cta.name}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
