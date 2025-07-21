import { SubProjects, Hero, Layout, SubAbout } from "@/modules";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SubAbout />
      <SubProjects />
    </Layout>
  );
}
