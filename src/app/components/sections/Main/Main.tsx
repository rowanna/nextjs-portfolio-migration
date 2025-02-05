import Image from "next/image";
import styles from "./Main.module.css";

import intro01 from "@/public/img/intro01@1.jpg";
import intro01_circle from "@/public/img/intro01_circle@1.png";
import intro01_beige from "@/public/img/intro01-beige@1.jpg";
import intro01_beige_circle from "@/public/img/intro01-beige_circle@1.png";
import intro01_mint from "@/public/img/intro01-mint@1.jpg";
import intro01_mint_circle from "@/public/img/intro01-mint_circle@1.png";
import intro01_grey from "@/public/img/intro01-grey@1.jpg";
import intro01_grey_circle from "@/public/img/intro01-grey_circle@1.png";
import beige from "@/public/img/grey.png";

import intro02 from "@/public/img/intro02@1.jpg";
import intro02_circle from "@/public/img/intro02_circle@1.png";
import intro02_beige from "@/public/img/intro02-beige@1.jpg";
import intro02_beige_circle from "@/public/img/intro02-beige_circle@1.png";
import intro02_mint from "@/public/img/intro02-mint@1.jpg";
import intro02_mint_circle from "@/public/img/intro02-mint_circle@1.png";
import intro02_grey from "@/public/img/intro02-grey@1.jpg";
import intro02_grey_circle from "@/public/img/intro02-grey_circle@1.png";
import grey from "@/public/img/grey.png";

import intro03 from "@/public/img/intro03@1.jpg";
import intro03_circle from "@/public/img/intro03_circle@1.png";
import intro03_beige from "@/public/img/intro03-beige@1.jpg";
import intro03_beige_circle from "@/public/img/intro03-beige_circle@1.png";
import intro03_mint from "@/public/img/intro03-mint@1.jpg";
import intro03_mint_circle from "@/public/img/intro03-mint_circle@1.png";
import intro03_grey from "@/public/img/intro03-grey@1.jpg";
import intro03_grey_circle from "@/public/img/intro03-grey_circle@1.png";
import mint from "@/public/img/mint.png";

export default function Main() {
  return (
    <>
      <section id={styles.section1}>
        <div className={`${styles.sec1}`}>
          <div>
            <h1 className={`${styles.title}`}>
              WONJI NA
              <strong className={`${styles.title_strong}`}>Portfolio</strong>
            </h1>
            <span className={`${styles.title_span}`}>
              html, css, javascript
              <br />
              web publishing
            </span>
            <span className={`${styles.title_hover_text}`}>hover circle!</span>
          </div>

          <div className={`${styles.sec1_imgbox1}`}>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_normal}`}
            >
              <Image
                fill
                className="normalImg"
                src={intro01}
                alt="intro01"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_normal_normalCircle}`}
                src={intro01_circle}
                alt="intro01_circle"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_beige} ${styles.sec1_introimg_invisible}`}
            >
              <Image
                fill
                className="beigeImg"
                src={intro01_beige}
                alt="intro01-beige"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_beige_beigeCircle}`}
                src={intro01_beige_circle}
                alt="intro01-beige_circle"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_mint} ${styles.sec1_introimg_invisible}`}
            >
              <Image
                fill
                className="mintImg"
                src={intro01_mint}
                alt="intro01-mint"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_mint_mintCircle}`}
                src={intro01_mint_circle}
                alt="intro01-mint_circle"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_grey} ${styles.sec1_introimg_invisible}`}
            >
              <Image
                fill
                className="greyImg"
                src={intro01_grey}
                alt="intro01-grey"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_grey_greyCircle}`}
                src={intro01_grey_circle}
                alt="intro01-grey_circle"
                aria-hidden="true"
              />
            </div>
            <div className={`${styles.sec1_circle1}`} aria-hidden="true">
              <Image
                fill
                className={`${styles.sec1_circle1_circle1img}`}
                src={beige}
                alt="circle1"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className={`${styles.sec1_imgbox2}`}>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_normal}`}
            >
              <Image
                fill
                className="normalImg"
                src={intro02}
                alt="intro02"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_normal_normalCircle}`}
                src={intro02_circle}
                alt="intro02_circle"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_beige} ${styles.sec1_introimg_invisible}`}
            >
              <Image
                fill
                className="beigeImg"
                src={intro02_beige}
                alt="intro02-beige"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_beige_beigeCircle}`}
                src={intro02_beige_circle}
                alt="intro02-beige_circle"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_mint} ${styles.sec1_introimg_invisible}`}
            >
              <Image
                fill
                className="mintImg"
                src={intro02_mint}
                alt="intro02-mint"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_mint_mintCircle}`}
                src={intro02_mint_circle}
                alt="intro02-mint_circle"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_grey} ${styles.sec1_introimg_invisible}`}
            >
              <Image
                fill
                className="greyImg"
                src={intro02_grey}
                alt="intro02-grey"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_grey_greyCircle}`}
                src={intro02_grey_circle}
                alt="intro02-grey_circle"
                aria-hidden="true"
              />
            </div>
            <div className={`${styles.sec1_circle2}`} aria-hidden="true">
              <Image
                fill
                className={`${styles.sec1_circle2_circle2img}`}
                src={grey}
                alt="circle2"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className={`${styles.sec1_imgbox3}`}>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_normal}`}
            >
              <Image
                fill
                className="normalImg"
                src={intro03}
                alt="intro03"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_normal_normalCircle}`}
                src={intro03_circle}
                alt="intro03_circle"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_beige} ${styles.sec1_introimg_invisible}`}
            >
              <Image
                fill
                className="beigeImg"
                src={intro03_beige}
                alt="intro03-beige"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_beige_beigeCircle}`}
                src={intro03_beige_circle}
                alt="intro03-beige_circle"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_mint} ${styles.sec1_introimg_invisible}`}
            >
              <Image
                fill
                className="mintImg"
                src={intro03_mint}
                alt="intro03-mint"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_mint_mintCircle}`}
                src={intro03_mint_circle}
                alt="intro03-mint_circle"
                aria-hidden="true"
              />
            </div>
            <div
              className={`${styles.sec1_introimg} ${styles.sec1_introimg_grey} ${styles.sec1_introimg_invisible}`}
            >
              <Image
                fill
                className="greyImg"
                src={intro03_grey}
                alt="intro02-grey"
                aria-hidden="true"
              />
              <Image
                fill
                className={`${styles.sec1_introimg_grey_greyCircle}`}
                src={intro03_grey_circle}
                alt="intro03-grey_circle"
                aria-hidden="true"
              />
            </div>
            <div className={`${styles.sec1_circle3}`} aria-hidden="true">
              <Image
                fill
                src={mint}
                alt="mint"
                className={`${styles.sec1_circle3_circle3img}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
