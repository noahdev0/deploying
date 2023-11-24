import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/hero.css";
import "@/styles/features.css";
import "@/styles/footer.css";
import "@/styles/partners.css";
import "@/styles/services.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
