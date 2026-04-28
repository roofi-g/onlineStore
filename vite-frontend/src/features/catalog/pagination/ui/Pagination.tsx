import { useDispatch, useSelector } from 'react-redux';
import { selectTotalPages } from '../model/selectors';
import { setPage } from '../../../../entities/catalog/model/filtersSlice';
import { useActiveCategory } from '../../../../entities/catalog/model/useActiveCategory';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { activeCategory } = useActiveCategory();
  const totalPages = useSelector(state => selectTotalPages(state, activeCategory));
  
  const currentPage = useSelector(state => state.filters.page);

  useEffect(() => {
    const pageFromParams = Number.parseInt(searchParams.get('page'), 10) || 1;

    dispatch(setPage(pageFromParams));
  }, [searchParams, dispatch, currentPage]);

  const handlePageChange = (newPage) => {
      setSearchParams(prev => {
        const nextParams = new URLSearchParams(prev);

        if (newPage === 1) {
          nextParams.delete('page');
          return nextParams;
        }
        nextParams.set('page', String(newPage));
        return nextParams;
      });
  };

  return (
    <div className="pagination flex justify-center items-center gap-4 mt-5 mb-5">
        <button 
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)} 
        >
          Назад
        </button>
        <span>{currentPage} из {totalPages}</span>
        <button 
          disabled={currentPage >= totalPages}
          onClick={() => handlePageChange(currentPage + 1)} 
        >
          Вперёд
        </button>
      </div>
  );
};