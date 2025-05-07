import './App.css'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const buttonClass = 'bg-blue-500/70 h-12 aspect-square rounded-sm hover:bg-blue-700 cursor-pointer'

  return (
    <div className='bg-black text-white rounded-md'>
      <div>
        <form className='grid grid-cols-4 p-4 gap-2' action="">
          <input className='col-span-4 bg-gray-600 h-12 mb-2 rounded-sm w-full text-right p-2' type="text" value={value} />
          <div className='border-b-2 border-gray-600 mb-2 col-span-4'></div>
          <input className={`${buttonClass} hover:bg-red-600 bg-red-400`} type="button" value={"AC"} onClick={() => setValue('')}/>
          <input className={`${buttonClass} hover:bg-red-600 bg-red-400`} type="button" value={"DEL"} onClick={() => setValue(value.slice(0, -1))}/>
          <input className={buttonClass} type="button" value={"."} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"÷"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"7"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"8"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"9"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"*"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"4"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"5"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"6"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"+"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"1"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"2"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"3"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"-"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)}/>
          <input className={buttonClass} type="button" value={"00"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)} />
          <input className={buttonClass} type="button" value={"0"} onClick={e => setValue(value + (e.target as HTMLInputElement).value)} />
          <input className={`${buttonClass} col-span-2 w-full`} type="button" value={"="} onClick={() => setValue(eval(value))}/>
        </form>
      </div>
    </div>
  )
}

export default App
