import { SubProjects, Hero, Layout, SubAbout } from "@/modules";
import SubSpeciality from "@/modules/SubSpeciality";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SubAbout />
      <SubProjects />
      <SubSpeciality />
    </Layout>
  );
}
