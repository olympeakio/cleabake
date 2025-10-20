import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Cléa Bake",
  description: "Artisan bakery & café",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
