import Footer from "./Footer.jsx";

export default function PageScaffold({ children, topPad = true }) {
  return (
    <>
      {topPad && <div className="pt-20 md:pt-24" />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
