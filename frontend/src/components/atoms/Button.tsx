import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
}) => {
  const baseClasses = 'px-4 py-2 rounded font-semibold transition-colors duration-200';

  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button onClick={onClick} type={type} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};

export default Button;
