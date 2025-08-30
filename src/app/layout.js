import "./globals.css";

export const metadata = 
{ title: "My App", description: "Public + Dashboard + Account" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
