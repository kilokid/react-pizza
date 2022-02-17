import classNames from 'classnames';

const Button = ({ className, outline, add, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
        'button--add': add,
      })}>
      {children}
    </button>
  );
};

export default Button;
