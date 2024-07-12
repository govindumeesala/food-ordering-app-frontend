import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type Props = {
  pages: number;
  page: number;
  onPageChange: (page: number) => void;
};

const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="self-end">
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => onPageChange(page - 1)}
            />
          </PaginationItem>
        )}
        {pageNumbers.map((pageNumber) => (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => onPageChange(pageNumber)}
              isActive={page === pageNumber}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        {page !== pageNumbers.length && (
          <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelector;
