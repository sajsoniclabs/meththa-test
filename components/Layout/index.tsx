import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import meththalogo from "../../public/images/Meththalogo.svg";
import Index from "./Header";
import { $CombinedState } from "redux";
import Footer from "./Footer";
// import MobileNav from "./Header/MobileNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.topNav}>
        <Index />
      </div>

      <div className={styles.childrenDiv}>
        <main>{children}</main>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
