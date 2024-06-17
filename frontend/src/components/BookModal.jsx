/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { PiBookOpenTextLight } from "react-icons/pi"


const BookModal = ({ book, onClose }) => {
    return (
        <div>
            <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
                onClick={onClose}>
                <div onClick={(event) => event.stopPropagation()}
                    className="w-[500px] max-w-full h-[200px] bg-white rounded-xl p-4 flex flex-col text-center relative">
                    <AiOutlineClose
                        className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                        onClick={onClose}
                    />
                    <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
                        {book.publishYear}
                    </h2>
                    <h4 className="text-gray-500">{book._id}</h4>
                    <div className="flex justify-start items-center gap-x-2">
                        <PiBookOpenTextLight className="text-red-300 text-2xl" />
                        <h2 className="my-1">{book.title}</h2>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <BiUserCircle className="text-red-300 text-2xl" />
                        <h2 className="my-1">{book.author}</h2>
                    </div>
                    <p className="mt-4">This is a Book! Do read it</p>
                </div>
            </div>
        </div>
    )
}

export default BookModal
