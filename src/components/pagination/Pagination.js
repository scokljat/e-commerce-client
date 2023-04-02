import { PaginationContainer } from "./PaginationStyle";

function Pagination({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => setCurrentPage(number)}
          className={currentPage === number ? "active" : undefined}
        >
          {number}
        </li>
      ))}
    </PaginationContainer>
  );
}

export default Pagination;
