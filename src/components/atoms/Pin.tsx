"use client";

import { useState, useRef, memo, KeyboardEvent, ClipboardEvent } from "react";

import { Typography } from "@/components/atoms/Typography";

import styles from "@/components/atoms/Pin.module.scss";

type Props = {
  label: string;
};

/*
  Recomiendo que para este componente y otros,
  que no hay devolución de datos por props,
  se cree un PinStore en zustand, para que se almanece aquí los datos ingresados
*/

const Pin = memo(({ label }: Props) => {
  const [pins, setPins] = useState<string[]>(["", "", "", ""]);
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(value)) {
      return;
    }

    value = value.slice(0, 1);

    const newPins = [...pins];
    newPins[index] = value;
    setPins(newPins);

    if (value !== "" && index < 3) {
      refs[index + 1].current?.focus();
    }
  };

  const handlePaste = (
    index: number,
    event: ClipboardEvent<HTMLInputElement>,
  ) => {
    const pastedData = event.clipboardData.getData("text");
    const pastedPins = pastedData.split("").slice(0, 4);

    const newPins = [...pins];
    pastedPins.forEach((pin, i) => {
      newPins[index + i] = pin;
    });
    setPins(newPins);
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && index > 0 && pins[index] === "") {
      refs[index - 1].current?.focus();
    }
  };
  return (
    <section className={styles.pin__container}>
      <Typography mode="label" align="center">
        {label}
      </Typography>
      <div className={styles.pin__list}>
        {pins.map((pin, index) => (
          <input
            key={index}
            type="text"
            className={styles.pin__item}
            value={pin}
            onChange={(e) => handleChange(index, e.target.value)}
            onPaste={(e) => handlePaste(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={refs[index]}
          />
        ))}
      </div>
    </section>
  );
});

Pin.displayName = "Pin";

export { Pin };
