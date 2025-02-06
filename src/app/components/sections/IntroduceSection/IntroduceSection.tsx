import SectionContainer from "@/app/components/layout/SectionContainer/SectionContainer";
import Image from "next/image";

import styles from "./IntroduceSection.module.css";

import about01Img from "@/public/img/about01.jpg";
import about02Img from "@/public/img/about02.jpg";

export default function IntroduceSection() {
  return (
    <>
      <SectionContainer sectionId={"section2"}>
        <div className={styles.sec2}>
          <div className={styles.sec2_left}>
            <Image
              className={styles.sec2_left_img_me}
              src={about01Img}
              alt="my img"
            />
            <Image
              className={styles.sec2_left_sideImg}
              src={about02Img}
              alt="aboutSideImg"
              aria-hidden="true"
            />
          </div>
          <div className={styles.sec2_right}>
            <h2 className={styles.sec2_right_h2}>
              BECOMING
              <br />
              WEB
              <br />
              PUBLISHER
            </h2>
            <div className={styles.sec2_right_aboutSlideText}>
              <p aria-hidden="true">
                <span className={styles.sec2_right_aboutSlideText_p_span}>
                  introduce myself
                </span>
                and faithful
                <span className={styles.sec2_right_aboutSlideText_p_span}>
                  introduce myself
                </span>
                and faithful
                <span className={styles.sec2_right_aboutSlideText_p_span}>
                  introduce myself
                </span>
                and faithful
                <span className={styles.sec2_right_aboutSlideText_p_span}>
                  introduce myself
                </span>
                and faithful
                <span className={styles.sec2_right_aboutSlideText_p_span}>
                  introduce myself
                </span>
                and faithful
              </p>
            </div>
            <p className={styles.sec2_right_p}>
              꾸준함과 견고함의 힘을 믿는, 퍼블리셔가 되고 싶은 나원지입니다.
              튼튼한 벽돌로 빈틈없이 견고하게 지어진 집은 위기 상황이 와도
              무너지지 않으며 굳건히 자신의 자리를 지킵니다. 저 또한 늘 그랬듯이
              꾸준히 새로운 기술과 지식을 습득하고 견고하게 쌓아온 기본기를
              활용하여 나날이 발전해가는 웹 분야에서 한 부분에 기여하고
              싶습니다.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
