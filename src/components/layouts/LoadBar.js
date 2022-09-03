import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";



const LoadBar = () => {
    const [bar,setBar] = useState('animate-bar')
    const location = useLocation()

useEffect(() => {
    setBar('animate-bar')

    const id = setTimeout(function(){
        setBar('')
    },900)

    return () => {clearTimeout(id)}

},[location.pathname])



  return (
    <>
    <div className={`bg-teal h-1.5  dark:dark-green  sticky top-0 ${bar}`} style={{width:'0%'}}></div>
    </>
  )
}

export default LoadBar