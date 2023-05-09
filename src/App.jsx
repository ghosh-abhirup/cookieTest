import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useCookies from 'react-cookie/cjs/useCookies'
import './App.css'

function App() {
  const [cookie, setCookie] = useCookies(['data'])
  const dataValue = {
    name: "Abhirup",
    company: "Perch"
  }
  useEffect(()=>{
    setCookie('data', dataValue, { path:'/', domain:'.singleufo.com'})
  },[])

//   console.log(cookie['data'])
  console.log(document.cookie)

  return (
    <>
      <p>Source subdomain</p>
    </>
  )
}

export default App
