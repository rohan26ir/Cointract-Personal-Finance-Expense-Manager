import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <Navbar></Navbar>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        {children}
      </main>

      <footer className="border-t">
        <Footer></Footer>
      </footer>
    </div>
  );
}
