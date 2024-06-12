import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/Footer";
import Authprovider from '../authProvider/Authprovider'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tenant Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
     <Authprovider>
      <body className={inter.className}>
   
      <Header></Header>

      {children}
      
      <Footer/>

    
      </body>
      </Authprovider>
    </html>
  );
}
