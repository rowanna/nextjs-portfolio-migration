import Image from "next/image";
import styles from "./Footer.module.css";
import LeftImg from "@/public/img/leaf_left.png";
import RightImg from "@/public/img/leaf_right.png";

export default function Footer() {
  return (
    <>
      <footer id={`${styles.footer}`}>
        <div className={`${styles.footer}`}>
          <div className={styles.contactWrap}>
            <h2 className={styles.contactWrap_h2}>EMAIL ME</h2>
            <a
              className={styles.contactWrap_a}
              href="mailto:rowankimna@gmail.com"
            >
              <strong className={styles.contactWrap_strong}>
                rowankimna@gmail.com
              </strong>
            </a>
            <span className={styles.contactWrap_a_span}>CONTACT ME</span>
            <div
              className={styles.contactWrap_bgcircle}
              aria-hidden="true"
            ></div>
            <Image
              aria-hidden="true"
              className={styles.footer_rightLeaf}
              src={LeftImg}
              alt="rightLeaf"
              width={200}
              height={200}
            />
            <Image
              aria-hidden="true"
              className={styles.footer_leftLeaf}
              src={RightImg}
              alt="leftLeaf"
              width={200}
              height={200}
            />
          </div>
          <p className={styles.footer_p}>portfolio 2020</p>
        </div>
      </footer>
    </>
  );
}
