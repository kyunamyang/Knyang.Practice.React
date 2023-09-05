interface ProgressProps {
  classNames?: Array<string>;
}

function Progress({ classNames = ['w-56'] }: ProgressProps) {
  const className = classNames.join(' ');

  return <progress className={`progress ${className}`}></progress>;
}

export default Progress;
