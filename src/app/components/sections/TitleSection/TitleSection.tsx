import SectionContainer from "@/app/components/layout/SectionContainer/SectionContainer";
import styles from "./TitleSection.module.css";

import Image from "next/image";
import LeftImg from "@/public/img/leaf_left.png";
import RightImg from "@/public/img/leaf_right.png";

export default function TitleSection({
  titleSectionId,
  titleSectionClass,
  title,
}: {
  titleSectionId: string;
  titleSectionClass: string;
  title: string;
}) {
  return (
    <>
      <SectionContainer sectionId={titleSectionId}>
        <div className={styles[titleSectionClass]}>
          <h2 className={styles.sec3_h2}>
            {title} <strong className={styles.sec3_h2_strong}>{title}</strong>{" "}
            {title}
          </h2>
          <span className={`${styles.sec3_span} ${styles.sec3_left_text}`}>
            <span className={styles.sec3_left_text_span}>web standard</span>
            responsive site. mobile web site
          </span>
          <span className={`${styles.sec3_span} ${styles.sec3_right_text}`}>
            html, css, javascript, jquery
          </span>
          <div className={styles.tit_bgcircle} aria-hidden="true"></div>
          <Image
            aria-hidden="true"
            className={styles.rightLeaf}
            src={RightImg}
            alt="rightLeaf"
          />
          <Image
            aria-hidden="true"
            className={styles.leftLeaf}
            src={LeftImg}
            alt="leftLeaf"
          />
        </div>
      </SectionContainer>
    </>
  );
}
