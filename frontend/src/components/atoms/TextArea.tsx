import React from 'react';

type TextAreaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  rows?: number;
};

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  name,
  id,
  rows = 4,
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={id}
      rows={rows}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default TextArea;
