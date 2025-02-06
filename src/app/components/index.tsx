import Layout from "@/app/components/layout";
import CssSection from "@/app/components/sections/CssSection/CssSection";
import IntroduceSection from "@/app/components/sections/IntroduceSection/IntroduceSection";
import JavascriptSection from "@/app/components/sections/JavascriptSection/JavascriptSection";
import MainSection from "@/app/components/sections/MainSection/MainSection";
import MyWorksSection from "@/app/components/sections/MyWorksSection/MyWorksSection";

export default function Container() {
  return (
    <>
      <Layout>
        <MainSection />
        <IntroduceSection />
        <MyWorksSection />
        <JavascriptSection />
        <CssSection />
      </Layout>
    </>
  );
}
