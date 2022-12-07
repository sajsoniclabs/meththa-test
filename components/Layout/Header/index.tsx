/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import meththalogo from "../../../public/images/Meththalogo.svg";
import { MdOutlineArrowDropUp, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import Popup from "../Popup/index";
import Option from "./ServiceOption";
import Settings from "../../../public/images/Settings.svg";
import MobileNav from "./MobileNav";

const Index = () => {
  const [isOnMouseOverServices, setOnMouseOverServices] =
    useState<boolean>(false);
  const [isOnMouseOverFunds, setOnMouseOverFunds] = useState<boolean>(false);
  const [isOnMouseOverHistory, setOnMouseOverHistory] =
    useState<boolean>(false);
  const [isOnMouseOverContact, setOnMouseOverContact] =
    useState<boolean>(false);

  const [isOnMouseOverHome, setOnMouseOverHome] = useState<boolean>(false);
  const [isOnMouseOverNumber, setOnMouseOverNumber] = useState<number>(0);
  const [isPopUpOpen, setPopUpOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isTabdots, setTabdots] = useState<boolean>(false);

  const FunctionOnMouseOverNumber = (id: number) => {};

  // home
  const onMouseOverHome = () => {
    setOnMouseOverHome(true);
  };
  const onMouseLeaveHome = () => {
    setOnMouseOverHome(false);
  };
  // home

  // services
  const onMouseOverServices = () => {
    setOnMouseOverServices(true);
  };
  const onMouseLeaveServices = () => {
    setOnMouseOverServices(false);
  };
  // services

  // Funds
  const onMouseOverFunds = () => {
    setOnMouseOverFunds(true);
  };
  const onMouseLeaveFunds = () => {
    setOnMouseOverFunds(false);
  };
  // Funds

  // History
  const onMouseOverHistory = () => {
    setOnMouseOverHistory(true);
  };
  const onMouseLeaveHistory = () => {
    setOnMouseOverHistory(false);
  };
  // History

  // Contact
  const onMouseOverContact = () => {
    setOnMouseOverContact(true);
  };
  const onMouseLeaveContact = () => {
    setOnMouseOverContact(false);
  };
  // Contact
  return (
    <div className={styles.mainDiv}>
      <div className={showMenu ? styles.sideNav : styles.sideNavHide}>
        <MobileNav setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>

      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.text}>
            <div className={styles.emailDiv}>
              <div className={styles.emailIcon}>
                <MdEmail />
              </div>
              <div className={styles.emailText}>
                meththafoundationmaho@gmail.com
              </div>
            </div>
            <div className={styles.telDiv}>
              <div className={styles.emailIcon}>
                <BsFillTelephoneFill />
              </div>
              <div className={styles.emailText}>+94 (0)37 361 8170</div>
            </div>
          </div>
          <div className={styles.socialMediIcons}>
            <div className={styles.icon}>
              <BsFacebook />
            </div>
            <div className={styles.icon}>
              <AiFillTwitterCircle />
            </div>
            <div className={styles.icon}>
              <SiYoutubemusic />
            </div>
          </div>
        </div>

        {/* middle */}

        <div className={styles.down}>
          <div className={styles.meththalogo}>
            <Image
              className={styles.meththalogopic}
              src={meththalogo}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
          </div>

          <div className={styles.divMainText}>
            <div className={styles.mainTitle}>
              <div
                className={
                  isOnMouseOverHome === true
                    ? styles.divTitleHomeHover
                    : styles.divTitleHome
                }
              >
                <div
                  onMouseLeave={onMouseLeaveHome}
                  onMouseOverCapture={onMouseOverHome}
                >
                  Home
                </div>
              </div>

              {isOnMouseOverHome === true ? (
                <div className={styles.lineHomeHover}></div>
              ) : (
                <div className={styles.lineHome}></div>
              )}
            </div>

            <div className={styles.mainTitle}>
              <div
                className={
                  isOnMouseOverServices === true
                    ? styles.divTitleServicesHover
                    : styles.divTitleServices
                }
                onMouseLeave={onMouseLeaveServices}
                onMouseOverCapture={onMouseOverServices}
              >
                <div>Services</div>
                {isOnMouseOverServices === true ? (
                  <MdOutlineArrowDropUp className={styles.arrowiconHover} />
                ) : (
                  <MdOutlineArrowDropUp className={styles.arrowicon} />
                )}
              </div>
              <div
                className={
                  isOnMouseOverServices === false
                    ? styles.optionHover
                    : styles.option
                }
              >
                <Option
                  onMouseLeaveServices={onMouseLeaveServices}
                  onMouseOverServices={onMouseOverServices}
                />
              </div>

              {isOnMouseOverServices === true ? (
                <div className={styles.lineServicesHover}></div>
              ) : (
                <div className={styles.lineServices}></div>
              )}
            </div>

            <div className={styles.mainTitle}>
              <div
                className={
                  isOnMouseOverFunds === true
                    ? styles.divTitleFundsHover
                    : styles.divTitleFunds
                }
              >
                <div
                  onMouseLeave={onMouseLeaveFunds}
                  onMouseOverCapture={onMouseOverFunds}
                >
                  Fund & Contribution
                </div>
              </div>

              {isOnMouseOverFunds === true ? (
                <div className={styles.lineFundsHover}></div>
              ) : (
                <div className={styles.lineFunds}></div>
              )}
            </div>

            <div className={styles.mainTitle}>
              <div
                className={
                  isOnMouseOverHistory === true
                    ? styles.divTitleHistoryHover
                    : styles.divTitleHistory
                }
              >
                <div
                  onMouseLeave={onMouseLeaveHistory}
                  onMouseOverCapture={onMouseOverHistory}
                >
                  Our History
                </div>
              </div>

              {isOnMouseOverHistory === true ? (
                <div className={styles.lineHistoryHover}></div>
              ) : (
                <div className={styles.lineHistory}></div>
              )}
            </div>

            <div className={styles.mainTitleContact}>
              <div
                className={
                  isOnMouseOverContact === true
                    ? styles.divTitleContactHover
                    : styles.divTitleContact
                }
              >
                <div
                  onMouseLeave={onMouseLeaveContact}
                  onMouseOverCapture={onMouseOverContact}
                >
                  Contact
                </div>
              </div>

              {isOnMouseOverContact === true ? (
                <div className={styles.lineContactHover}></div>
              ) : (
                <div className={styles.lineContact}></div>
              )}
            </div>
          </div>

          {/* tab */}
          <div className={styles.divMainText_tab}>
            <div className={styles.mainTitle}>
              <div
                className={
                  isOnMouseOverHome === true
                    ? styles.divTitleHomeHover
                    : styles.divTitleHome
                }
              >
                <div
                  onMouseLeave={onMouseLeaveHome}
                  onMouseOverCapture={onMouseOverHome}
                >
                  Home
                </div>
              </div>

              {isOnMouseOverHome === true ? (
                <div className={styles.lineHomeHover}></div>
              ) : (
                <div className={styles.lineHome}></div>
              )}
            </div>

            <div className={styles.mainTitle}>
              <div
                className={
                  isOnMouseOverServices === true
                    ? styles.divTitleServicesHover
                    : styles.divTitleServices
                }
                onMouseLeave={onMouseLeaveServices}
                onMouseOverCapture={onMouseOverServices}
              >
                <div>Services</div>
                {isOnMouseOverServices === true ? (
                  <MdOutlineArrowDropUp className={styles.arrowiconHover} />
                ) : (
                  <MdOutlineArrowDropUp className={styles.arrowicon} />
                )}
              </div>
              <div
                className={
                  isOnMouseOverServices === false
                    ? styles.optionHover
                    : styles.option
                }
              >
                <Option
                  onMouseLeaveServices={onMouseLeaveServices}
                  onMouseOverServices={onMouseOverServices}
                />
              </div>

              {isOnMouseOverServices === true ? (
                <div className={styles.lineServicesHover}></div>
              ) : (
                <div className={styles.lineServices}></div>
              )}
            </div>

            <div className={styles.mainTitle}>
              <div
                className={
                  isOnMouseOverFunds === true
                    ? styles.divTitleFundsHover
                    : styles.divTitleFunds
                }
              >
                <div
                  onMouseLeave={onMouseLeaveFunds}
                  onMouseOverCapture={onMouseOverFunds}
                >
                  Fund & Contribution
                </div>
              </div>

              {isOnMouseOverFunds === true ? (
                <div className={styles.lineFundsHover}></div>
              ) : (
                <div className={styles.lineFunds}></div>
              )}
            </div>

            <div className={styles.mainTitle}>
              <BsThreeDots onClick={() => setTabdots(!isTabdots)} />
              <div
                className={
                  isTabdots === true ? styles.tab_popup : styles.tab_popup_hover
                }
              >
                <div className={styles.mainTitle_tab_popup}>
                  <div
                    className={
                      isOnMouseOverHistory === true
                        ? styles.divTitleHistoryHover
                        : styles.divTitleHistory
                    }
                  >
                    <div
                      onMouseLeave={onMouseLeaveHistory}
                      onMouseOverCapture={onMouseOverHistory}
                    >
                      Our History
                    </div>
                  </div>

                  {isOnMouseOverHistory === true ? (
                    <div className={styles.lineHistoryHover}></div>
                  ) : (
                    <div className={styles.lineHistory}></div>
                  )}
                </div>

                <div className={styles.mainTitleContact}>
                  <div
                    className={
                      isOnMouseOverContact === true
                        ? styles.divTitleContactHover
                        : styles.divTitleContact
                    }
                  >
                    <div
                      onMouseLeave={onMouseLeaveContact}
                      onMouseOverCapture={onMouseOverContact}
                    >
                      Contact
                    </div>
                  </div>

                  {isOnMouseOverContact === true ? (
                    <div className={styles.lineContactHover}></div>
                  ) : (
                    <div className={styles.lineContact}></div>
                  )}
                </div>
              </div>
            </div>

            {/* 
            <div className={styles.mainTitle}>
              <div
                className={
                  isOnMouseOverHistory === true
                    ? styles.divTitleHistoryHover
                    : styles.divTitleHistory
                }
              >
                <div
                  onMouseLeave={onMouseLeaveHistory}
                  onMouseOverCapture={onMouseOverHistory}
                >
                  Our History
                </div>
              </div>

              {isOnMouseOverHistory === true ? (
                <div className={styles.lineHistoryHover}></div>
              ) : (
                <div className={styles.lineHistory}></div>
              )}
            </div>

            <div className={styles.mainTitleContact}>
              <div
                className={
                  isOnMouseOverContact === true
                    ? styles.divTitleContactHover
                    : styles.divTitleContact
                }
              >
                <div
                  onMouseLeave={onMouseLeaveContact}
                  onMouseOverCapture={onMouseOverContact}
                >
                  Contact
                </div>
              </div>

              {isOnMouseOverContact === true ? (
                <div className={styles.lineContactHover}></div>
              ) : (
                <div className={styles.lineContact}></div>
              )}
            </div> */}
          </div>

          {/* tab */}

          {/* right div */}

          <div className={styles.rightDiv}>
            <div
              className={styles.settingsIcon}
              onClick={() => setShowMenu(true)}
            >
              <Image
                className={styles.meththalogopic}
                src={Settings}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              />
            </div>

            <div className={styles.divSignInText}>Sign In</div>
            <div className={styles.divDonate}>
              <div
                className={styles.divDonateText}
                onClick={() => setPopUpOpen(true)}
              >
                Donate
              </div>
            </div>
          </div>
        </div>

        <div className={styles.popupDiv}>
          {/* <div className={styles.popup}> */}
            <OutsideClickHandler
              onOutsideClick={() => {
                setPopUpOpen(false);
              }}
            >
              <Popup isPopUpOpen={isPopUpOpen} setPopUpOpen={setPopUpOpen} />
            </OutsideClickHandler>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
