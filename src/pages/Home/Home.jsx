import { Cards } from "../../components/Cards/Cards";
import Display from "../../components/Display/Display";
import Hero from "../../components/Hero/Hero";
import FadeInSection from "../../utils/FadeInAnimation";

export default function Home() {
  return (
    <div>
      <FadeInSection>
        <Hero />
        <Cards />
        <Display />
      </FadeInSection>
    </div>
  );
}
