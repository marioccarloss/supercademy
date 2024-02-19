"use client";

import { useState } from "react";

import image from "@/assets/images/teacher.jpg";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Avatar } from "@/components/molecules/Avatar";
import { Icon } from "@/shared/Icon";

import { useNavigationStore } from "@/store/useNavigationStore";
import Link from "next/link";
import styles from "./HeaderPrivate.module.scss";

type HeaderProps = {
  isOpen: boolean;
  isAvatar?: boolean;
};

export const HeaderPrivate = ({ isOpen, isAvatar }: HeaderProps) => {
  const setOpenNavigation = useNavigationStore((state) => state.setOpened);

  const [openProfile, setOpenProfile] = useState(false);
  const [openPoints, setOpenPoints] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  const handleNavigationOpened = () => {
    setOpenNavigation(true);
  };

  const handleCalendar = () => {
    setOpenCalendar(!openCalendar);
    setOpenProfile(false);
    setOpenPoints(false);
  };

  const handlePoints = () => {
    setOpenPoints(!openPoints);
    setOpenProfile(false);
    setOpenCalendar(false);
  };

  const handleProfile = () => {
    setOpenProfile(!openProfile);
    setOpenPoints(false);
    setOpenCalendar(false);
  };

  return (
    <div
      className={`${!isOpen ? styles.headerPrivate : styles.headerPrivate + " " + styles.headerPrivateOpen} ${isAvatar ? styles.headerPrivateAvatar : ""}`}
    >
      {!isOpen && (
        <Button
          mode="icon"
          href="/home"
          className={styles.headerPrivate__logo}
          onClick={handleNavigationOpened}
        >
          <Icon icon="logoNav" size={styles.headerPrivate__logoIcon} />
        </Button>
      )}
      {isAvatar && <Avatar image={image} isTop={true} />}
      <div className={styles.headerPrivate__ctasResponsive}>
        <div className={styles.btnCta}>
          <Button mode="icon" onClick={handleCalendar}>
            <Icon
              icon="calendar"
              size={styles.headerPrivate__ctaIconResponsive}
            />
          </Button>
          {openCalendar && (
            <div className={styles.popup}>
              <div className={styles.popup__container}>
                <header>
                  <Icon icon="calendar" size={styles.popup__headerCal} />
                  <div className={styles.popup__name}>
                    <div className={styles.popup__nameText}>Calendario</div>
                  </div>
                </header>
                <section className={styles.popup__cardCol}>
                  <div className={styles.popup__cardCalendar}>
                    <div className={styles.popup__cardCalendarHeader}>
                      <Button mode="icon">
                        <Icon icon="iconArrowLeft" />
                      </Button>
                      <span>Diciembre 2021</span>
                      <Button mode="icon">
                        <Icon icon="iconArrowRight" />
                      </Button>
                    </div>
                    <ul className={styles.popup__cardCalendarList}>
                      <li className={styles.popup__cardCalendarItem}>
                        <div>L</div>
                        <div className={styles.popup__cardBullet}>24</div>
                      </li>
                      <li
                        className={`${styles.popup__cardCalendarItem + " " + styles.popup__cardCalendarItemActive}`}
                      >
                        <div>M</div>
                        <div className={styles.popup__cardBullet}>25</div>
                      </li>
                      <li className={styles.popup__cardCalendarItem}>
                        <div>M</div>
                        <div className={styles.popup__cardBullet}>26</div>
                      </li>
                      <li className={styles.popup__cardCalendarItem}>
                        <div>J</div>
                        <div className={styles.popup__cardBullet}>27</div>
                      </li>
                      <li
                        className={`${styles.popup__cardCalendarItem + " " + styles.popup__cardCalendarItemBooked}`}
                      >
                        <div>V</div>
                        <div className={styles.popup__cardBullet}>28</div>
                      </li>
                      <li className={styles.popup__cardCalendarItem}>
                        <div>S</div>
                        <div className={styles.popup__cardBullet}>29</div>
                      </li>
                      <li className={styles.popup__cardCalendarItem}>
                        <div>D</div>
                        <div className={styles.popup__cardBullet}>30</div>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.popup__cardButtons}>
                    <Link href="#">
                      <Icon
                        icon="iconCalendar"
                        size={styles.popup__cardButtonsIcon}
                      />
                      <Typography>Próximos eventos</Typography>
                    </Link>
                    <Button mode="calendar-primary">
                      <div className={styles.popup__cardButtonsCustom}>
                        <Typography>25 Dic</Typography>
                        <div>
                          <Typography>Examen Inglés</Typography>
                          <Typography>10:00 AM</Typography>
                        </div>
                        <Icon
                          icon="iconArrowRight"
                          size={styles.popup__cardButtonsCustomIcon}
                        />
                      </div>
                    </Button>
                    <Button mode="calendar-secondary">
                      <div className={styles.popup__cardButtonsCustom}>
                        <Typography>28 Dic</Typography>
                        <div>
                          <Typography>Examen Lengua</Typography>
                          <Typography>06:40 PM</Typography>
                        </div>
                        <Icon
                          icon="iconArrowRight"
                          size={styles.popup__cardButtonsCustomIcon}
                        />
                      </div>
                    </Button>
                  </div>
                </section>
                <footer>
                  <Link href="#">
                    <Icon
                      icon="iconCalendar2"
                      size={styles.popup__footerIcon}
                    />
                    <Typography>Añadir evento a mi calendario</Typography>
                  </Link>
                </footer>
              </div>
              <div
                className={styles.popup__overlay}
                onClick={() => setOpenCalendar(false)}
              ></div>
            </div>
          )}
        </div>
        <div className={styles.btnCta}>
          <Button mode="icon" onClick={handlePoints}>
            <Icon
              icon="gemstone"
              size={styles.headerPrivate__ctaIconResponsive}
            />
          </Button>
          {openPoints && (
            <div className={styles.popup}>
              <div className={styles.popup__container}>
                <header className={styles.popup__header}>
                  <Icon icon="gemstone" size={styles.popup__headerGem} />
                  <div className={styles.popup__name}>
                    <div className={styles.popup__points}>500</div>
                    <div className={styles.popup__nameText}>Superpoints</div>
                  </div>
                </header>
                <section className={styles.popup__section}>
                  <ul className={styles.popup__calendarList}>
                    <li className={styles.popup__calendarItem}>
                      <div>L</div>
                      <Icon icon="bullet" size={styles.popupCalendarBullet} />
                    </li>
                    <li className={styles.popup__calendarItem}>
                      <div>M</div>
                      <Icon
                        icon="bulletChecked"
                        size={styles.popupCalendarBullet}
                      />
                    </li>
                    <li className={styles.popup__calendarItem}>
                      <div>M</div>
                      <Icon
                        icon="bulletChecked"
                        size={styles.popupCalendarBullet}
                      />
                    </li>
                    <li className={styles.popup__calendarItem}>
                      <div>J</div>
                      <Icon icon="bullet" size={styles.popupCalendarBullet} />
                    </li>
                    <li className={styles.popup__calendarItem}>
                      <div>V</div>
                      <Icon icon="bullet" size={styles.popupCalendarBullet} />
                    </li>
                    <li className={styles.popup__calendarItem}>
                      <div>S</div>
                      <Icon icon="bullet" size={styles.popupCalendarBullet} />
                    </li>
                    <li className={styles.popup__calendarItem}>
                      <div>D</div>
                      <Icon icon="bullet" size={styles.popupCalendarBullet} />
                    </li>
                  </ul>
                </section>
                <footer>
                  <Link href="#">
                    <Icon icon="car" size={styles.popup__footerIcon} />
                    <span>Ir a la Supertienda</span>
                  </Link>
                </footer>
              </div>
              <div
                className={styles.popup__overlay}
                onClick={() => setOpenPoints(false)}
              ></div>
            </div>
          )}
        </div>
        <div className={styles.btnCta}>
          <Button mode="icon" onClick={handleProfile}>
            <Icon
              icon="emojiMonsterItem"
              size={styles.headerPrivate__ctaIconResponsive}
            />
          </Button>
          {openProfile && (
            <div className={styles.popup}>
              <div className={styles.popup__container}>
                <header>
                  <Button mode="icon" className={styles.popup__avatar}>
                    <Icon icon="emojiCat" />
                  </Button>
                  <div className={styles.popup__name}>
                    <div>Bárbara</div>
                    <div>1º Bach. - C.Madrid</div>
                  </div>
                </header>
                <section>
                  <div
                    className={`${styles.popup__card + " " + styles.popup__cardPurple}`}
                  >
                    <Icon icon="medal" />
                    <div>
                      <strong>50</strong>
                      <span>Días uso</span>
                    </div>
                  </div>
                  <div className={styles.popup__card}>
                    <Icon icon="gemstone" />
                    <div>
                      <strong>500</strong>
                      <span>Superpoints</span>
                    </div>
                  </div>
                </section>
                <footer>
                  <Link href="#">
                    <Icon icon="trending" size={styles.popup__footerIcon} />
                    <span>Ver detalle de mi progreso</span>
                  </Link>
                </footer>
              </div>
              <div
                className={styles.popup__overlay}
                onClick={() => setOpenProfile(false)}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
