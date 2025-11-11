    import { useContext, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
    import { FaSearch } from 'react-icons/fa';
   import { FaBars } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import axios from "axios";
    import { FaTimes } from 'react-icons/fa';



const links=["Business","Entertainment","General","Health","Sports","Technology"]

const Navbar=({setArticles})=>{
    //theme use constext
    const{theme,setTheme}=useContext(ThemeContext)
    const[open,setOpen]=useState(false)
    //function for search
const handleSearch=async (e)=>{
    const search=e.target.value 
    try{

         const res=await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=2286cf3764b345a0bada55a66ed2cdc9&q=india `)
       

        setArticles(res.data.articles)

    }catch (error){
        console.log(error)
    }
}

    //dark mode
    const toggleTheme=()=>{
        if(theme=='light'){
            setTheme('dark')
            localStorage.setItem('theme','dark')
        }else{
            setTheme('light')
            localStorage.setItem('theme','light')
        }
    }
    
    return(
         <div className="fixed w-full bg-white dark:bg-black z-10 shadow-md">
     <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      {/* logs */}
      <div className="md-text-2xl text-lg font-bold dark:text-white text-blue-800 cursor-pointer">NewsApp</div>
      {/* {Desktoop links} */}
      <div className="hidden md:flex space-x-6">
        {
            links.map((link) =>{
                return <Link to={`/${link.toLowerCase()}`} key={link} className="text-gray-700 dark:text-gray-200 hover:text-yellow-800 transition cursor-pointer">
                    {link}
                    </Link>
            })
        }
      </div>

<div className="flex items-center justify-center gap-4">
    <div className="relative bg-gray-200 p-2 rounded-lg flex">
        <FaSearch className='absoulte left-3 top-2 transform-translate-y-1/2 text-muted-foreground h-6 w-5'></FaSearch>
        <input type="text" onChange={handleSearch} placeholder="Search news...."  className='md-pl-10 pl-3 w-30 md:w-64 outline-none focus:outline-none'></input>
        
       </div>
       <button onClick={toggleTheme} className='bg-gray-200 dark:bg-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg cursor-pointer'>
        
        {
            theme=='light'?<FaMoon></FaMoon>:<FaSun></FaSun>
        } 
        </button>
       {/* {mobile menu button} */}
       <button onClick={()=>setOpen(!open)} className='md:hidden text-gray-500 dark:text-gray-200'>
        {
            open ? <FaTimes size={20}/>:<FaBars size={20}/>
        }
        
       </button>
</div>
      </div>  
      {/* mobile menu */}
      {
        open && (
            <div className='md:hidden px-4 pb-4'>
                {
                    links.map((link)=>{
                    return <Link key={link} to={`/${link.toLowerCase()}`}
                    onClick={()=>setOpen(false)} className='block py-2 text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-blue-600 transition'>
                    {link}
                    </Link>

                    })
                }
            </div>
        )
      }
    </div>
    )
}
export default Navbar