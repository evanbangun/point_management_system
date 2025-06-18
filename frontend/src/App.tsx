import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Button from './components/atoms/Button';
import Input from './components/atoms/Input';
import Label from './components/atoms/Label';
import LabeledInput from './components/molecules/LabeledInput'
import Select from './components/atoms/Select';
import Checkbox from './components/atoms/Checkbox';
import TextArea from './components/atoms/TextArea';

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('coffee');
  const [isChecked, setIsChecked] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [name, setName] = useState('')
  
  const selectOptions = [
    { label: 'Coffee', value: 'coffee' },
    { label: 'Tea', value: 'tea' },
    { label: 'Juice', value: 'juice' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100 text-center p-8">
      <div className="flex justify-center gap-8 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 hover:scale-110 transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 hover:scale-110 transition" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-600 mb-4">Vite + React + Tailwind</h1>

      <div className="bg-white rounded shadow p-6 inline-block">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Coffee Point System</h1>
          <Button onClick={() => alert('Primary button clicked!')}>Primary Button</Button>
          <br />
          <br />
          <Button variant="secondary" onClick={() => alert('Secondary clicked')}>
            Secondary Button
          </Button>
        </div>

        <p className="mt-4 text-gray-700">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-gray-500">
        Click on the logos to learn more
      </p>
      <div className="p-6 max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Test Components</h1>

        <div>
          <Label htmlFor="input">Input Field</Label>
          <Input
            id="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
          />
        </div>

        <div>
          <Label htmlFor="select">Select Promo</Label>
          <Select
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            options={selectOptions}
          />
        </div>

        <div>
          <Checkbox
            id="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label="Use loyalty points?"
          />
        </div>

        <div>
          <Label htmlFor="textarea">Notes</Label>
          <TextArea
            id="textarea"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="Write something..."
          />
        </div>

        <div className="space-x-2">
          <Button onClick={() => alert('Primary clicked')}>Submit</Button>
          <Button variant="secondary" onClick={() => alert('Secondary clicked')}>
            Cancel
          </Button>
        </div>
        <div className="max-w-md mx-auto p-6">
          <LabeledInput
            id="name"
            label="Customer Name"
            value={name}
            placeholder="Enter customer name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
