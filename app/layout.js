import "./globals.css";
import { Comic_Neue } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import connectDB from "@/utils/connectDB";

export const metadata = {
  title: "CartoonPedia",
  description: "Wikipedia for cartoons",
};

const comic_neue = Comic_Neue({ subsets: ['latin'], weight: '700'})

export default async function RootLayout({ children }) {
  await connectDB();

  return (
    <html lang="en">
      <body className={comic_neue.className}>
          <div className='min-h-screen max-h-full flex flex-col items-center justify-between gap-20'>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </div>
      </body>
    </html>
  );
}
