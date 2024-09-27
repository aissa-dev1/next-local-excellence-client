import HomeHeader from "@/components/home/header";
import HomeStores from "@/components/home/stores";
import HomeSponsors from "@/components/home/sponsors";
import Container from "@/components/reusable/container";
import Footer from "@/components/reusable/footer";
import NavBar from "@/components/reusable/nav-bar";
import SpaceY from "@/components/reusable/space-y";
import HomeReviews from "@/components/home/reviews";
import HomeJoinUs from "@/components/home/join-us";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Container>
          <SpaceY size="section" className="mt-28">
            <HomeHeader />
            <HomeSponsors />
            <HomeStores />
            <HomeReviews />
            <HomeJoinUs />
          </SpaceY>
        </Container>
      </main>
      <Footer className="mt-16" />
    </>
  );
}
