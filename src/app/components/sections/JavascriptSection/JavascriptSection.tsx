import SectionContainer from "@/app/components/layout/SectionContainer/SectionContainer";
import TitleSection from "@/app/components/sections/TitleSection/TitleSection";
import styles from "./JavascriptSection.module.css";
import { works } from "@/public/json/javascriptSectionData.json";

// import Image from "next/image";
// import LeftImg from "@/public/img/leaf_left.png";
// import RightImg from "@/public/img/leaf_right.png";

export default function JavascriptSection() {
  return (
    <>
      <TitleSection
        titleSectionId={"section5"}
        titleSectionClass={"sec5"}
        title="javascript"
      ></TitleSection>

      <SectionContainer sectionId={"section6"}>
        <div className={styles.sec6}>
          <div>
            {works.map(({ id, iframeSrc, title, descURL }) => (
              <div key={id} className={`${styles.js_cont_box}`}>
                <div>
                  <div className={styles.js_cont}>
                    <iframe
                      className={styles.js_cont_iframe}
                      src={iframeSrc}
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
                  </div>
                  <div>
                    <div className={styles.js_desc_desc_tit}>
                      <span className={styles.js_desc_desc_tit_num}>
                        {id < 10 ? `0${id}` : id}
                      </span>
                      <h3 className={styles.js_desc_desc_tit_h3}>{title}</h3>
                    </div>
                    <a href={descURL} className={styles.js_desc_cta}>
                      <span>view more</span>
                      <svg
                        className={styles.svg}
                        width="13px"
                        height="10px"
                        viewBox="0 0 13 10"
                      >
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
