interface ButtonProps {
  text: string;
  classNames?: Array<string>;
  onClick: () => {};
}

function Button({ text, classNames = ['btn-primary'], onClick }: ButtonProps) {
  const className = classNames.join(' ');

  return <button onClick={onClick} className={`button ${className}`}></button>;
}

export { Button };
export type { ButtonProps };
