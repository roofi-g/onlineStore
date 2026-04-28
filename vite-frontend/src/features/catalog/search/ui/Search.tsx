import { useDispatch, useSelector } from 'react-redux';
import { selectAppliedSearch } from '../../../../entities/catalog/model/selectors';
import { setSearch } from '../../../../entities/catalog/model/filtersSlice';

export default function Search() {
  const dispatch = useDispatch();
  const search = useSelector(selectAppliedSearch);
  
  return (
    <input
      type="text"
      placeholder="Поиск..."
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  );
};