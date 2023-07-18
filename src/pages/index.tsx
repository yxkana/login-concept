import Head from "next/head";
import Link from "next/link";
import {AuthScreen} from "../components/AuthScreen"

export default function Home() {
  return (
    <>
     <main>
        <AuthScreen/>
     </main>
      
    </>
  );
}
