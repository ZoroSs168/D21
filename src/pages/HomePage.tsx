import Footer from "../components/Footer";
import ResponsiveAppBar from "../components/Header";
import ProductList from "../components/Product";
export default function HomePage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <ProductList limit={4}></ProductList>
      <Footer></Footer>
    </div>
  )
  
}