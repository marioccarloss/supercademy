"use client";

import Image from "next/image";
import { HeaderPrivateInner } from "@/components/molecules/HeaderPrivateInner";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/shared/Icon";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";
import { Card } from "@/components/molecules/Card";

import useStoreProduct, { StoreType } from "@/hooks/useStore";

import styles from "./ProfileStore.module.scss";

export const ProfileStore = () => {
  const { data } = useStoreProduct();

  return (
    <LayoutPrivate isHeaderVisible={false}>
      <header className={styles.store}>
        <HeaderPrivateInner title="Supertienda" emoji="emojiStore" />
      </header>
      <section className={styles.store__body}>
        <header className={styles.store__header}>
          <Button mode="primary" size="medium">
            ¿Cómo consigo Superpoints?
          </Button>
          <div className={styles.store__card}>
            <Icon icon="emojiGem" />
            <strong>1500</strong>
            <span>Superpoints</span>
          </div>
        </header>
        <div className={styles.cards}>
          {data.map((product: StoreType) => (
            <Card mode="secondary" key={product.id}>
              <div className={styles.card__body}>
                <header>
                  <Image
                    src={product.logo}
                    alt={product.name}
                    className={styles.card__logo}
                    height={35}
                  />
                  <Typography>{product.name}</Typography>
                </header>
                <section>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className={styles.card__image}
                    height={125}
                  />
                </section>
                <footer className={styles.card__value}>
                  <Icon icon="emojiGem" />
                  <Typography>{product.value}</Typography>
                </footer>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </LayoutPrivate>
  );
};
