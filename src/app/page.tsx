import { SubProjects, Hero, Layout, SubAbout } from "@/modules";
import SubFooter from "@/modules/SubFooter";
import SubSpeciality from "@/modules/SubSpeciality";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SubAbout />
      {/* <SubProjects />
      <SubSpeciality />
      <SubFooter /> */}
    </Layout>
  );
}
