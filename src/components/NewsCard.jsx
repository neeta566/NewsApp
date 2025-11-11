import { Link } from "react-router-dom";
const NewsCard = ({ article }) => {
    const{author,desscription,publishedAt,source,title,url,urlToImage}=article
  return( 
  <div className="max-w-md max-auto bg-white dark:bg-gray-900 hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300">
    <img src={urlToImage} alt={title} className='w-full h-48 object-cover bg-gray-400' />
    <div className="p-4">
 <Link to={url}> 
<h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
    {title}
</h2>
    </Link> 
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
{desscription?.length >100 ? desscription.slice(0,100)+"....":desscription}
    </p>
    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
<span>By {author || "Unknown"}</span>
<span>{new Date(publishedAt).toLocaleDateString()}</span>
    </div>
    <div className="mt-1 text-xs text-blue-500 font-medium">
source:{source.name}
<div className="flex justify-center items-center ">
    <button className="bg-blue-500 dark:bg-black py-2 px-4 text-white text-xs rounded m-4"><Link to={url}>ReadMore</Link></button></div>
    </div>
    </div>    
    </div>
  )
};
export default NewsCard;
