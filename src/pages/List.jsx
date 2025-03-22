import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import c from "../utils/nullCheck";
import { open } from "../redux/slices/detailSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  // Kaçıncı elemandan itibaren kesilecek
  const [start, setStart] = useState(0);

  // Sayfa başına eleman sayısı
  const perPage = 12;

  // Kaçıncı elemana kadar kesicez
  const end = start + perPage;

  // Slice methodu ile başlangıc ve bitiş arasını kes
  const currFlights = flights.slice(start, end);

  // Toplam sayfa sayısı
  const total = Math.ceil(flights.length / perPage);

  // Yeni sayfaya tıklanınca
  const handlePage = (event) => {
    setStart(event.selected * perPage);
  };

  if (isLoading)
    return (
      <div className="list-wrapper">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="list-wrapper">
        <Error message={error} />
      </div>
    );

  return (
    <div className="list-container">
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th>id</th>
            <th>Kod</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derece</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {currFlights.map((flight) => (
            <tr key={flight.id}>
              <td>{c(flight.id)}</td>
              <td>{c(flight.code)}</td>
              <td>{c(flight.lat)}</td>
              <td>{c(flight.lng)}</td>
              <td>{c(flight.deg)}</td>
              <td>
                <button onClick={() => dispatch(open(flight.id))}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-wrapper">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          className="pagination"
          pageCount={total || 0}
          pageRangeDisplayed={1}
          onPageChange={handlePage}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default List;
