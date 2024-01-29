import styles from "./Footer.module.scss";
import { Typography } from "@/components/atoms/Typography";

export const Footer = () => {
  const list = [
    {
      name: "license",
      title: "License",
      url: "/license",
    },
    {
      name: "terms",
      title: "Terms of Use",
      url: "/terms",
    },
    {
      name: "privacy",
      title: "Privacy Policy",
      url: "/privacy",
    },
  ];

  return (
    <div className={styles.footer}>
      <Typography mode="disabled">
        © {new Date().getFullYear()} Supercademy. All Rights Reserved.
      </Typography>
      <ul className={styles.footer__list}>
        {list.map((item) => (
          <li className={styles.footer__item} key={item.name}>
            <Typography mode="disabled">{item.title}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
