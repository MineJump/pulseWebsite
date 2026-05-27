import Footer from "./Footer.jsx";
import SubPageNav from "./SubPageNav.jsx";

export default function PageScaffold({ children, topPad = true }) {
  return (
    <>
      {topPad && <div className="pt-14 md:pt-16" />}
      <SubPageNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
