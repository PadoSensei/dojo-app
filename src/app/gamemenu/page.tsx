'use client'

import React from 'react'
import Link from "next/link"

const page = () => {
  return (
    <>
    
    <div>game menu</div>
    <Link href='/memorygame'>go to memory game </Link>
    <Link href='/'>Home </Link>
    </>
  )
}

export default page