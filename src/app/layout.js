import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Blog",
    description: "Next Blog",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="p-10">
                    <Header />
                    <Navbar />
                    <main className="mt-10">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
