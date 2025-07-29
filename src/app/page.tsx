import { SubProjects, Hero, Layout, SubAbout, SubSpeciality, SubFooter } from "@/modules";

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
