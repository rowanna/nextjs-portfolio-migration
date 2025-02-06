import SectionContainer from "@/app/components/layout/SectionContainer/SectionContainer";
import TitleSection from "@/app/components/sections/TitleSection/TitleSection";
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
        <div className="sec6">
          <div className="js-cont-wrap">
            <div className="js-cont-box imgslide">
              <div className="left"></div>
              <div className="right">
                <div className="js-cont">
                  <iframe
                    src="../projects/imageSlide/imageSlideJS01.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="js-desc">
                  <div className="desc-tit">
                    <span className="num">01</span>
                    <h3>image slide</h3>
                  </div>
                  <a
                    href="https://www.notion.so/Image-Slide-38b0171e20754d8fadb05783f4c500bc"
                    className="cta"
                  >
                    <span>view more</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="js-cont-box parallax">
              <div className="left">
                <div className="js-cont">
                  <iframe
                    src="../projects/parallaxEffect/parallax01.html"
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="js-desc">
                  <div className="desc-tit">
                    <span className="num">02</span>
                    <h3>parallax</h3>
                  </div>
                  <a
                    href="https://www.notion.so/Parallax-8d52e0e89f4d4ca6aab724b173470d3d"
                    className="cta"
                  >
                    <span>view more</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="right"></div>
            </div>
            <div className="js-cont-box mouse">
              <div className="left"></div>
              <div className="right">
                <div className="js-cont">
                  <iframe
                    src="../projects/mouseEffect/mouseeffect-ex.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="js-desc">
                  <div className="desc-tit">
                    <span className="num">03</span>
                    <h3>mouse effect</h3>
                  </div>
                  <a
                    href="https://www.notion.so/Mouse-Effect-2a49bf2df4be4419b9788edadaa5dc86"
                    className="cta"
                  >
                    <span>view more</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="js-cont-box chrome">
              <div className="left">
                <div className="js-cont">
                  <iframe
                    src="../projects/chromeApp/index.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="js-desc">
                  <div className="desc-tit">
                    <span className="num">04</span>
                    <h3>chrome app</h3>
                  </div>
                  <a
                    href="https://www.notion.so/Chrome-App-4789018a1c5d4b4ab90d75bb150bee77"
                    className="cta"
                  >
                    <span>view more</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="right"></div>
            </div>
            <div className="js-cont-box paint">
              <div className="left"></div>
              <div className="right">
                <div className="js-cont">
                  <iframe
                    src="../projects/paintJS/index.html"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                <div className="js-desc">
                  <div className="desc-tit">
                    <span className="num">05</span>
                    <h3>paint brush</h3>
                  </div>
                  <a
                    href="../../port/projects/paintJS/index.html"
                    className="cta"
                  >
                    <span>view more</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
