import { useParams } from 'react-router-dom';

function Accommodation() {
  let { id } = useParams();
  return <h1>Viewing accommodation {id}</h1>;
}
export default Accommodation;