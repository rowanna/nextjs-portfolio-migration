import SectionContainer from "@/app/components/layout/SectionContainer/SectionContainer";
import Image from "next/image";
import styles from "./CssSection.module.css";

import coming01 from "@/public/img/coming01.png";
import coming02 from "@/public/img/coming02.png";
import coming03 from "@/public/img/coming03.png";
import { works } from "@/public/json/cssSectionData.json";

export default function CssSection() {
  return (
    <>
      <SectionContainer sectionId={"section6"}>
        <div>
          <div className={styles.css_titWrap}>
            <span className="tit1" aria-hidden="true">
              CSS
            </span>
            <div className={styles.css_titWrap_titCircle}>
              <span aria-hidden="true">UNIQUE &amp; SPECIAL CSS ANIMATION</span>
            </div>
            <strong className={styles.css_titWrap_tit2} aria-hidden="true">
              ANIMA
            </strong>
            <span className="tit3" aria-hidden="true">
              TION
            </span>
          </div>
          <div>
            <div className={styles.css_contWrap_css_row1}>
              {works.map(({ id, title, iframeSrc, descURL }) => (
                <div
                  key={id}
                  className={`${styles.css_contWrap_css_row1_left}`}
                >
                  <div className={styles.ani_cont}>
                    <iframe
                      className={styles.ani_cont_iframe}
                      src={iframeSrc}
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
                  </div>
                  <div className="ani-tit">
                    <div className={styles.tit_top}>
                      <span className={styles.ani_tit_num}>
                        {id < 10 ? `0${id}` : id}
                      </span>
                      <h3>{title}</h3>
                    </div>
                    <a href="" target="_blank">
                      <span className={styles.ani_tit_a_span}>VIEW MORE</span>
                    </a>
                  </div>
                </div>
              ))}

              <div className={`${styles.css_contWrap_css_row2_right}`}>
                <div
                  className={`${styles.ani_cont} ${styles.infin_ani_comingWrap}`}
                >
                  <div className={styles.coming1} aria-hidden="true">
                    <Image aria-hidden="true" src={coming01} alt="coming01" />
                  </div>
                  <div className={styles.coming2} aria-hidden="true">
                    <Image aria-hidden="true" src={coming02} alt="coming02" />
                  </div>
                  <div className={styles.coming3} aria-hidden="true">
                    <Image aria-hidden="true" src={coming03} alt="coming03" />
                  </div>
                </div>
                <div className="ani-tit">
                  <div className={styles.tit_top}>
                    <span className={styles.ani_tit_num}>∞</span>
                    <h3>
                      <span>MORE CREATIVE</span>
                      PROJECTS
                    </h3>
                  </div>
                  <p className={styles.ani_tit_p}>ARE COMING SOON...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
