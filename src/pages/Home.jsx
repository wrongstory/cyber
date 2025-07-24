import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Banners from "../components/Banners";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import SmallerBanner from "../components/SmallerBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SmallerBanner />
      <Category />
      <Products />
      <Banners />
      <Banner2 />
      <Footer />
    </>
  );
}
