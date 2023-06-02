import { useEffect, useState } from "react";

export const usePagination = (list, quantityPerPage) => {
  const [numberPage, setNumberPage] = useState(1);

  const lowerLimit = quantityPerPage * (numberPage - 1);
  const higherLimit = quantityPerPage * numberPage - 1;
  const totalPages = Math.ceil(list.length / quantityPerPage);

  const listSlice = list.slice(lowerLimit, higherLimit + 1);

  const changePageTo = (page) => {
    if (page > totalPages) setNumberPage(totalPages);
    else if (page < 1) setNumberPage(1);
    else setNumberPage(page);
  };

  const pages = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  useEffect(() => {
    setNumberPage(1);
  }, [quantityPerPage]);

  return [numberPage, listSlice, pages, changePageTo, totalPages];
};
