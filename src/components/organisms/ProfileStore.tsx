"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Card } from "@/components/molecules/Card";
import { HeaderPrivateInner } from "@/components/molecules/HeaderPrivateInner";
import { ModalCongratulations } from "@/components/molecules/ModalCongratulations";
import { ModalInsufficientBalance } from "@/components/molecules/ModalInsufficientBalance";
import { ModalRedeem } from "@/components/molecules/ModalRedeem";
import { ModalSuperpoints } from "@/components/molecules/ModalSuperpoints";
import { LayoutPrivate } from "@/components/templates/LayoutPrivate";
import { Icon } from "@/shared/Icon";
import { useModalStore } from "@/store/useModalStore";

import useStoreProduct, { StoreType } from "@/hooks/useStore";

import { ModalShareCode } from "../molecules/ModalShareCode";
import styles from "./ProfileStore.module.scss";

export const ProfileStore = () => {
  const [productStore, setProductStore] = useState<StoreType>();
  const { data } = useStoreProduct();

  const isOpenSuperpointsModal = useModalStore(
    (state) => state.modals.modalSuperpoints?.isOpen,
  );

  const isShareCodeModal = useModalStore(
    (state) => state.modals.modalShareCode?.isOpen,
  );

  const isOpenRedeemModal = useModalStore(
    (state) => state.modals.modalRedeem?.isOpen,
  );

  const isOpenContratulationsModal = useModalStore(
    (state) => state.modals.modalContratulations?.isOpen,
  );

  const isOpenInsufficientBalanceModal = useModalStore(
    (state) => state.modals.modalInsufficientBalance?.isOpen,
  );

  const setModalOpen = useModalStore((state) => state.setModalOpen);

  const handleModal = useCallback(() => {
    setModalOpen("modalSuperpoints", true);
  }, [setModalOpen]);

  const handleProduct = useCallback(
    (name: string, productItem: StoreType) => {
      if (name === "modalRedeem") {
        setProductStore(productItem);
        setModalOpen("modalRedeem", true);
      } else {
        setModalOpen("modalInsufficientBalance", true);
      }
    },
    [setModalOpen],
  );

  return (
    <>
      <LayoutPrivate isHeaderVisible={false}>
        <header className={styles.store}>
          <HeaderPrivateInner title="Supertienda" emoji="emojiStore" />
        </header>
        <section className={styles.store__body}>
          <header className={styles.store__header}>
            <Button mode="primary" size="medium" onClick={handleModal}>
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
                  {product.isRedeem ? (
                    <Button
                      onClick={() => handleProduct("modalRedeem", product)}
                    >
                      {product.name}
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        handleProduct("modalInsufficientBalance", product)
                      }
                    >
                      {product.name}
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </LayoutPrivate>
      <ModalSuperpoints
        isModalOpen={isOpenSuperpointsModal}
        modalName="modalSuperpoints"
      />
      <ModalRedeem
        data={productStore}
        isModalOpen={isOpenRedeemModal}
        modalName="modalRedeem"
      />
      <ModalCongratulations
        isModalOpen={isOpenContratulationsModal}
        modalName="modalContratulations"
        isTeacherPage={true}
      />
      <ModalInsufficientBalance
        isModalOpen={isOpenInsufficientBalanceModal}
        modalName="modalInsufficientBalance"
      />
      <ModalShareCode
        isModalOpen={isShareCodeModal}
        modalName="modalShareCode"
        code="3435X"
      />
    </>
  );
};
