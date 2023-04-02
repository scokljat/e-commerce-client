import { useState } from "react";
import { PaginationContainer } from "./PaginationStyle";

function Pagination({ totalProducts, productsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(currentPage);
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
