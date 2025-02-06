import SectionContainer from "@/app/components/layout/SectionContainer/SectionContainer";
import Image from "next/image";
// import LeftImg from "@/public/img/leaf_left.png";
import coming01 from "@/public/img/coming01.png";
import coming02 from "@/public/img/coming02.png";
import coming03 from "@/public/img/coming03.png";

export default function CssSection() {
  return (
    <>
      <SectionContainer sectionId={"section6"}>
        <div className="sec7">
          <h2 className="sr-only">CSS ANIMATION</h2>
          <div className="css-titWrap">
            <span className="tit1" aria-hidden="true">
              CSS
            </span>
            <div
              className="titCircle"
              data-bottom="margin-left: -9%;"
              data-top="margin-left: 16%;"
            >
              <span aria-hidden="true">UNIQUE &amp; SPECIAL CSS ANIMATION</span>
            </div>
            <strong className="tit2" aria-hidden="true">
              ANIMA
            </strong>
            <span className="tit3" aria-hidden="true">
              TION
            </span>
          </div>
          <div className="css-contWrap">
            <div className="css-row1">
              <div className="left tail">
                <div className="ani-cont">
                  <iframe
                    src="../projects/ani/tail.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className="tit-top">
                    <span className="num">01</span>
                    <h3>TAIL ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/xxOBVPG"
                    target="_blank"
                  >
                    <span>VIEW MORE</span>
                  </a>
                </div>
              </div>
              <div className="center cube">
                <div className="ani-cont">
                  <iframe
                    src="../projects/ani/3dcube.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className="tit-top">
                    <span className="num">02</span>
                    <h3>3D CUBE ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/MWexjPV"
                    target="_blank"
                  >
                    <span>VIEW MORE</span>
                  </a>
                </div>
              </div>
              <div className="right wave">
                <div className="ani-cont">
                  <iframe
                    src="../projects/ani/wave.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className="tit-top">
                    <span className="num">03</span>
                    <h3>WAVE ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/mdEoOjB"
                    target="_blank"
                  >
                    <span>VIEW MORE</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="css-row2">
              <div className="left bar">
                <div className="ani-cont">
                  <iframe
                    src="../projects/ani/bar.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className="tit-top">
                    <span className="num">04</span>
                    <h3>BAR ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/ExyMZay"
                    target="_blank"
                  >
                    <span>VIEW MORE</span>
                  </a>
                </div>
              </div>
              <div className="center dot">
                <div className="ani-cont">
                  <iframe
                    src="../projects/ani/dot.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="ani-tit">
                  <div className="tit-top">
                    <span className="num">05</span>
                    <h3>DOT ANIMATION</h3>
                  </div>
                  <a
                    href="https://codepen.io/rowanna/pen/QWEoKLN"
                    target="_blank"
                  >
                    <span>VIEW MORE</span>
                  </a>
                </div>
              </div>
              <div className="right infin">
                <div className="ani-cont comingWrap">
                  <div className="coming1" aria-hidden="true">
                    <Image aria-hidden="true" src={coming01} alt="coming01" />
                  </div>
                  <div className="coming2" aria-hidden="true">
                    <Image aria-hidden="true" src={coming02} alt="coming02" />
                  </div>
                  <div className="coming3" aria-hidden="true">
                    <Image aria-hidden="true" src={coming03} alt="coming03" />
                  </div>
                </div>
                <div className="ani-tit">
                  <div className="tit-top">
                    <span className="num">∞</span>
                    <h3>
                      <span>MORE CREATIVE</span>
                      PROJECTS
                    </h3>
                  </div>
                  <p>ARE COMING SOON...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
