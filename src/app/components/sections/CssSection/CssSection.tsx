import SectionContainer from "@/app/components/layout/SectionContainer/SectionContainer";
import Image from "next/image";
import styles from "./CssSection.module.css";

import coming01 from "@/public/img/coming01.png";
import coming02 from "@/public/img/coming02.png";
import coming03 from "@/public/img/coming03.png";

export default function CssSection() {
  return (
    <>
      <SectionContainer sectionId={"section6"}>
        <div>
          <div className={styles.css_titWrap}>
            <span className="tit1" aria-hidden="true">
              CSS
            </span>
            <div
              className={styles.css_titWrap_titCircle}
              data-bottom="margin-left: -9%;"
              data-top="margin-left: 16%;"
            >
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
              <div className={`${styles.css_contWrap_css_row1_left} tail`}>
                <div className={styles.ani_cont}>
                  <iframe
                    className={styles.ani_cont_iframe}
                    src="../projects/ani/tail.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className={styles.tit_top}>
                    <span className={styles.ani_tit_num}>01</span>
                    <h3>TAIL ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/xxOBVPG"
                    target="_blank"
                  >
                    <span className={styles.ani_tit_a_span}>VIEW MORE</span>
                  </a>
                </div>
              </div>
              <div className={`${styles.css_contWrap_css_row1_center} cube`}>
                <div className={styles.ani_cont}>
                  <iframe
                    className={styles.ani_cont_iframe}
                    src="../projects/ani/3dcube.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className={styles.tit_top}>
                    <span className={styles.ani_tit_num}>02</span>
                    <h3>3D CUBE ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/MWexjPV"
                    target="_blank"
                  >
                    <span className={styles.ani_tit_a_span}>VIEW MORE</span>
                  </a>
                </div>
              </div>
              <div
                className={`${styles.css_contWrap_css_row1_center_right} wave`}
              >
                <div className={styles.ani_cont}>
                  <iframe
                    className={styles.ani_cont_iframe}
                    src="../projects/ani/wave.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className={styles.tit_top}>
                    <span className={styles.ani_tit_num}>03</span>
                    <h3>WAVE ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/mdEoOjB"
                    target="_blank"
                  >
                    <span className={styles.ani_tit_a_span}>VIEW MORE</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.css_contWrap_css_row2}>
              <div className={`${styles.css_contWrap_css_row2_left} bar`}>
                <div className={styles.ani_cont}>
                  <iframe
                    className={styles.ani_cont_iframe}
                    src="../projects/ani/bar.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className={styles.tit_top}>
                    <span className={styles.ani_tit_num}>04</span>
                    <h3>BAR ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/ExyMZay"
                    target="_blank"
                  >
                    <span className={styles.ani_tit_a_span}>VIEW MORE</span>
                  </a>
                </div>
              </div>
              <div className={`${styles.css_contWrap_css_row2_center} dot`}>
                <div className={styles.ani_cont}>
                  <iframe
                    className={styles.ani_cont_iframe}
                    src="../projects/ani/dot.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className={styles.tit_top}>
                    <span className={styles.ani_tit_num}>05</span>
                    <h3>DOT ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/QWEoKLN"
                    target="_blank"
                  >
                    <span className={styles.ani_tit_a_span}>VIEW MORE</span>
                  </a>
                </div>
              </div>
              <div className={`${styles.css_contWrap_css_row2_right} infin`}>
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
