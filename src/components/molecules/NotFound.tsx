import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Icon } from "@/shared/Icon";

import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Icon icon="emojiError404" />
      <Typography mode="title" align="center">
        404
      </Typography>
      <Typography mode="subtitle" align="center">
        Ups.... Se ha producido un error
      </Typography>
      <Button mode="primary" href="/">
        Volver al inicio
      </Button>
    </div>
  );
};
