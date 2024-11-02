import { PiStarThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,

    rating,

    tags,
  } = book;
  return (
    <>
      <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px]">
          <figure className="px-10 py-4 bg-slate-100 mx-4 mt-4">
            <img src={image} alt="book" className=" w-28 h-[166px]" />
          </figure>
          <div className="flex gap-4 m-4">
            {tags.map((tag, index) => (
              <button
                key={index} // Set key only once
                className="btn btn-sm text-green-500"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className=" mx-6 mb-4">
            <h2 className="text-start text-2xl text-gray-800">{bookName}</h2>
            <h3 className="text-xl text-gray-800 ">By: {author}</h3>
          </div>
          <div className="border-t-2 border-dashed border-gray-200 mx-6"></div>
          <div className="flex justify-between text-center mx-6 my-4">
            <span className="text-xl">Fiction</span>
            <span className="flex items-center gap-2">
              {rating}
              <PiStarThin />
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Book;
