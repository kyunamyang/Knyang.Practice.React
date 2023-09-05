import PersonHeader from './PersonHeader';
import PersonList from './PersonList';

function Person() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Person page</h1>

      <PersonHeader></PersonHeader>

      <PersonList></PersonList>
    </>
  );
}

export default Person;
