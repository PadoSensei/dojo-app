'use client'
import Link from "../../node_modules/next/link";
import addData from "../firebase/addData";
// import Image from 'next/image'
import styles from './page.module.css'

import getData from '../firebase/getData';

export default function Home() {

  const handleForm = async () => {
    const data = {
      name: "John snow",
      house: "Stark",
    };
    const { result, error } = await addData("users", "user-id", data);

    if (error) {
      return console.log(error);
    }
  };

  const getData = async () => {

    const result = await getData();
  }

  

  return (
    <>
   {/* <button  onClick={handleForm}>Click me to test firebase</button>
   <button onClick={getData}>Get Data</button> */}

   <Link href='./gamemenu'>Game Menu</Link>
   <Link href='signup'>Sign up</Link>
   <Link href='signin'>Sign in</Link>
    </>
  )
}
