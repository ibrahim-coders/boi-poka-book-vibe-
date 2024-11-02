import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../Utiliy/read';

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find(book => book.bookId === id);
  const {
    bookId: booksId,
    image,
    author,
    bookName,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    rating,
    publisher,
  } = book;
  console.log(book);
  const handleMarkAsRead = id => {
    addToStoredReadList(id);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-8 p-4 lg:p-8">
        {/* Image Section */}
        <img
          src={image}
          className="w-full max-w-xs md:max-w-sm lg:max-w-xl rounded-lg shadow-2xl object-cover"
          alt="Book Cover"
        />

        {/* Content Section */}
        <div className="w-full lg:max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {bookName}
          </h2>
          <h3 className="py-4 md:py-6 text-xl text-gray-700">{author}</h3>

          {/* Genre Section with Border */}
          <div className="border-t border-b border-gray-400 p-4 w-full my-2">
            <p className="text-2xl text-gray-800 font-semibold">Fiction</p>
          </div>

          {/* Review Section */}
          <p className="py-4 md:py-6 text-lg md:text-xl text-gray-700">
            {review}
          </p>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-3 my-4">
            {' '}
            <h2 className="text-xl font-bold">tags</h2>
            {tags.map((tag, index) => (
              <button
                key={index} // Unique key for each tag button
                className="btn btn-sm text-green-600 bg-gray-100 border border-gray-300 rounded-full px-3 py-1"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Additional Info */}
          <div className="border-b border-gray-400 w-full mb-4"></div>

          {/* Book Details */}
          <p className="text-lg md:text-xl pt-2">
            Number of Pages: <span className="font-semibold">{totalPages}</span>
          </p>
          <p className="text-lg md:text-xl py-2">
            Publisher: <span className="font-semibold">{yearOfPublishing}</span>
          </p>
          <p className="text-lg md:text-xl">
            Year of Publishing:{' '}
            <span className="font-semibold">{publisher}</span>
          </p>
          <p className="text-lg md:text-xl py-2">
            Rating: <span className="font-semibold">{rating}</span>
          </p>

          {/* CTA Button */}
          <div className="flex gap-4">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-primary mt-6"
            >
              Read
            </button>
            <button className="btn bg-cyan-500 mt-6">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
