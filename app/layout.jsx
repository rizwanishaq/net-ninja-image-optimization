import Navbar from "@/components/Navbar";
import "./globals.css";

export const revalidate = 3600;

export const metadata = {
  title: "Image Gallary",
  description: "Image Gallary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
