import Image from "next/image";
import styles from "./Footer.module.css";
import LeftImg from "@/public/img/leaf_left.png";
import RightImg from "@/public/img/leaf_right.png";

export default function Footer() {
  return (
    <>
      <footer id={`${styles.footer}`}>
        <div className={`${styles.footer}`}>
          <div className="contactWrap">
            <h2>EMAIL ME</h2>
            <a href="mailto:rowankimna@gmail.com">
              <strong>rowankimna@gmail.com</strong>
            </a>
            <span>CONTACT ME</span>
            <div className="bgcircle" aria-hidden="true"></div>
            <Image
              aria-hidden="true"
              className="rightLeaf"
              src={LeftImg}
              alt="rightLeaf"
              width={200}
              height={200}
            />
            <Image
              aria-hidden="true"
              className="leftLeaf"
              src={RightImg}
              alt="leftLeaf"
              width={200}
              height={200}
            />
          </div>
          <p>portfolio 2020</p>
        </div>
      </footer>
    </>
  );
}
