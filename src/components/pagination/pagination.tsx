import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { getTotalPageCount, getCurrentPage } from '../../store/pagination/selectors';

export function Pagination(props: {
    className?: string
}) {
  const currentPage = useSelector(getCurrentPage);
  const totalPageCount = useSelector(getTotalPageCount);
  const pageNumbersArray = Array.from({length: totalPageCount as number}, (_, index: number) => index + 1);

  return (
    <div className={cn('pagination page-content__pagination', props.className)} data-testid="pagination">
      {
        <ul className='pagination__list'>
          {currentPage !== 1 &&
            <li className='pagination__page pagination__page--prev'>
              <Link className='link pagination__page-link' to={`${AppRoute.getCatalog((currentPage - 1).toString())}`}>Назад</Link>
            </li>}

          {pageNumbersArray.map((pageNumber: number) => (
            <li className={cn('pagination__page', {'pagination__page--active': pageNumber === currentPage})} key={pageNumber}>
              <Link className='link pagination__page-link' to={`${AppRoute.getCatalog(pageNumber.toString())}`}>
                {pageNumber}
              </Link>
            </li>))}

          {currentPage !== totalPageCount && pageNumbersArray.length !== 0 &&
            <li className='pagination__page pagination__page--next'>
              <Link className='link pagination__page-link' to={`${AppRoute.getCatalog((currentPage + 1).toString())}`}>Далее</Link>
            </li>}
        </ul>
      }
    </div>
  );
}
