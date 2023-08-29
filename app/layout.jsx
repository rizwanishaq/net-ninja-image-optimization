import "./globals.css";

export const metadata = {
  title: "Image Gallary",
  description: "Image Gallary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
