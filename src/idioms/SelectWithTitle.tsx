import { OptionType } from 'idioms/types';

interface SelectWithTitleProps {
  name: string;
  disabled?: boolean;
  title: string;
  selectedItemId: string;
  items: Array<OptionType>;
  onSelected?: () => void;
}

function SelectWithTitle(props: SelectWithTitleProps) {
  //const [count, setCount] = useState(0)

  return (
    <>
      <select name={props.name} disabled={props.disabled ? true : null} className='select w-full max-w-xs'>
        {props.items.map((item, idx) => (
          <option id={item.id} selected={item.id === props.selectedItemId ? true : null}>
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectWithTitle;
