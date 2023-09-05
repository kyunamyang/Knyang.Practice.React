import { Button, ButtonProps } from 'idioms/Button';

interface CardProps {
  //imageEl?: HTMLImageElement;
  children: React.ReactElement;
  title: string;
  description: string;
  classNames?: Array<string>;
  buttonProps?: ButtonProps;
}

function Card({
  children = null,
  title,
  description,
  classNames = ['w-96', 'bg-base-100', 'shadow-xl'],
  buttonProps,
}: CardProps) {
  const className = classNames.join(' ');

  return (
    <>
      <div className={`card ${className}`}>
        {children ?? (
          <figure>
            {/* <img src={imageEl} alt='Shoes' /> */}
            {children}
          </figure>
        )}
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description}</p>
          {!!buttonProps ?? (
            <div className='card-actions justify-end'>
              <Button {...buttonProps}></Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
