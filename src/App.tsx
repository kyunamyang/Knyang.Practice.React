import './App.css';
import 'idioms/Sample';
import { Sample } from './idioms';
import { Person, WorkItem } from './domains';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Sample></Sample>

      <Person></Person>

      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <button className='btn btn-secondary'>Secondary</button>

      <WorkItem></WorkItem>
    </>
  );
}

export default App;
