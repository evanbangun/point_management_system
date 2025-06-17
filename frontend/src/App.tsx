import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/atoms/Button';

function App() {
  const [count, setCount] = useState(0)

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
    </div>
  )
}

export default App
