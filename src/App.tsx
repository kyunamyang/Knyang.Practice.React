import '@/App.css';
import { Sample } from 'idioms';
import { Person, WorkItem } from 'domains';
import { Progress, Card } from 'idioms';
import imageUrl from './assets/react.svg';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Sample></Sample>

      <Person></Person>

      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <button className='btn btn-secondary'>Secondary</button>

      <WorkItem></WorkItem>

      <Progress classNames={['progress-primary', 'w-72']}></Progress>

      <Card title='Sample' description='test desc' classNames={['w-96', 'bg-base-100', 'shadow-xl']}>
        <img src={imageUrl} alt='test' className='object-scale-down h-48 w-96' />
      </Card>
    </>
  );
}

export default App;
