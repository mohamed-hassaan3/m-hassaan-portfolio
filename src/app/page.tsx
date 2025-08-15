import { SubProjects, Hero, SubAbout, SubSpeciality, SubFooter } from "@/modules/home";
import Layout from "@/modules/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SubAbout />
      <SubProjects />
      <SubSpeciality />
      <SubFooter />
    </Layout>
  );
}
