"use client";
import SectionContainer from "@/app/components/layout/SectionContainer/SectionContainer";
import TitleSection from "@/app/components/sections/TitleSection/TitleSection";
import styles from "./MyWorksSection.module.css";
import { works } from "@/public/json/myWorksData.json";

export default function MyWorksSection() {
  return (
    <>
      <TitleSection
        titleSectionId={"section3"}
        titleSectionClass={"sec3"}
        title="my works"
      ></TitleSection>

      <SectionContainer sectionId={"section4"}>
        {works.map(
          ({
            id,
            subTitle,
            title,
            backgroundURL,
            desc,
            siteLink,
            descLink,
          }) => (
            <div key={id} className={`${styles.my}`}>
              <div
                style={{
                  background: `url(${backgroundURL}) no-repeat center/cover`,
                }}
                className={styles.works_img}
                aria-label={desc}
              ></div>
              <div className={styles.works_desc_wrap_show}>
                <div className={styles.works_desc_wrap_works_desc}>
                  <span className={styles.works_desc_wrap_works}>
                    project {id < 10 ? `0${id}` : id}
                  </span>
                  <h3 className={styles.works_desc_wrap_works_desc_h3_show}>
                    {subTitle}
                    <strong
                      className={styles.works_desc_wrap_works_desc_h3_strong}
                    >
                      {title}
                    </strong>
                  </h3>
                  <p className={styles.works_desc_wrap_works_desc_p_show}>
                    {desc}
                  </p>
                  <div>
                    <a
                      className={styles.works_desc_wrap_works_desc_works_btn_a}
                      href={siteLink}
                      target="_blank"
                    >
                      <strong
                        className={
                          styles.works_desc_wrap_works_desc_works_btn_a_strong
                        }
                      >
                        view site
                      </strong>
                      <span
                        className={
                          styles.works_desc_wrap_works_desc_works_btn_a_arrow
                        }
                        aria-hidden="true"
                      ></span>
                    </a>
                    <a
                      className={styles.works_desc_wrap_works_desc_works_btn_a}
                      href={descLink}
                      target="_blank"
                    >
                      <strong
                        className={
                          styles.works_desc_wrap_works_desc_works_btn_a_strong
                        }
                      >
                        description
                      </strong>
                      <span
                        className={
                          styles.works_desc_wrap_works_desc_works_btn_a_arrow
                        }
                        aria-hidden="true"
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </SectionContainer>
    </>
  );
}
