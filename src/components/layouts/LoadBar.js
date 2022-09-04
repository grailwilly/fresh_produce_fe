import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";



const LoadBar = ({user,cart}) => {
    const [bar,setBar] = useState('animate-bar')
    const location = useLocation()

useEffect(() => {
    setBar('animate-bar')

    const id = setTimeout(function(){
        setBar('')
    },900)

    return () => {clearTimeout(id)}

},[location.pathname,cart,user])



  return (
    <>
    <div className={`bg-teal h-1.5  dark:dark-green  sticky top-0 ${bar}`} style={{width:'0%'}}></div>
    </>
  )
}


const MapToStateProps = state => ({
  cart: state.cart,
  user: state.user
})

export default connect(MapToStateProps)(LoadBar)