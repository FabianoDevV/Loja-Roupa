import './style.css';
import { useParams } from 'react-router-dom';
import Cards from '../../Components/Cards';

export default function Category() {
  const { name } = useParams();
  console.log(name);
  return (
    <section className="category-page">
      <Cards filter={name} />
    </section>
  );
}
