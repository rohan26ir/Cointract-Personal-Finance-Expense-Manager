import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col w-[95%] max-w-[2000px] mx-auto my-5">
      <header className="mb-5">
        <Navbar></Navbar>
      </header>

      <main className="">
        {children}
      </main>

      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
}
