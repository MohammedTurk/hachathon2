export const PaginationTable = ({
  handleNextPaginate,
  handlePrevPaginate,
  currentPage,
  transactions,

}) => {
    const paginateCount = () => Math.floor(transactions?.count / 5);

  return (
    <tr>
      <td>
        <div
          aria-label="Page navigation example"
          className="w-full flex justify-center p-1   bg-white"
        >
          <ul className="inline-flex items-center   ">
            {currentPage > 0 && (
              <li onClick={handlePrevPaginate}>
                <a
                  href="#"
                  className="block px-3 py-2 ml-0   text-gray-500 bg-white     rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            )}

            <li className="px-3">
              Page {currentPage} - {paginateCount()}
            </li>
            {currentPage < paginateCount() && (
              <li onClick={handleNextPaginate}>
                <a
                  href="#"
                  className="block px-3 py-2   text-gray-500 bg-white     rounded-r-lg hover:bg-gray-100 hover:text-gray-700  "
                >
                  <span className="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            )}
          </ul>
        </div>
      </td>
    </tr>
  );
};
