import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleBookmarkAdd,handleReadingTime}) => {
    console.log(blog)
const {id,title,cover,author_img,author,posted_date,reading_time,hashtags}=blog;


    return (
        <div>
            <img className='w-full mb-4' src={cover} alt={`cover picture of the title ${title}`} />
           <div className=' flex justify-between'>
           <div className='flex gap-4'>
                <img className=' w-16 h-16' src={author_img} alt="" />
          
          <div>
           <h3 className='text-2xl font-bold'>{author}</h3>
           <p className='mb-4'>{posted_date}</p> 
         </div>
         </div>
                
           
            <div>
               <span>{reading_time} min read</span>
               <button onClick={()=> handleBookmarkAdd(blog)} className='ml-3 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
            </div>
           </div>
           <h2 className='text-4xl mb-4'>{title}</h2>
           <p className=' space-x-2 mb-4'>
            {
              hashtags.map((hash,index)=><span key={index}><a href="">#{hash}</a></span>)
            }
            </p> 
          <button onClick={() =>handleReadingTime(id,reading_time)} className=' text-xl font-bold text-purple-700 underline '>Mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmarkAdd:PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func
}

export default Blog;