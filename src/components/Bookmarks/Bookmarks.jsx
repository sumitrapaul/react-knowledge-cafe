import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
      <div className='w-1/3'>
          <div className='bg-gray-400 rounded-xl ml-8'>
        <h3 className="text-3xl mt-20 py-6 text-center font-semibold text-blue-600 ">Spent time on read : {readingTime} min</h3>
    </div>
        <div className=" bg-gray-300 ml-8 rounded-xl">
           
            <h3 className="text-3xl text-center font-semibold mt-4 mb-8 p-4">Bookmarked Blogs:{bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
      </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
   
}

export default Bookmarks;