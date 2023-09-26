import Navbar from "@/components/Navbar";
import "./global.css"
import {Roboto} from "next/font/google";

export const metadata={
title:"Store Game",
description:"Esta pagina es la vista principal de mi tienda de video juegos",
keywords:"tienda,online,video juegos"
}

const roboto=Roboto({
  weight:["300","400","500","700"],
  styles:["italic", "normal"],
  subsets:["latin"],
})

export default function RootLayout({ children }) {
 return (
    <html>
      <body className={roboto.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
