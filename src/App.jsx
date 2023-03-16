import {useState, useEffect} from 'react';
import Header from "./components/Header"
import Button from './components/Button';
import {
  formatterMoney,
  totalToPay
}from './healpers'


function App() {
  
  const [ quantity, setQuantity ] = useState(10000);
  const [ months, setMonths] = useState(6);
  const [ total, setTotal] = useState(totalToPay(quantity, months))
  const [ monthPay, setMonthPay ] = useState(0)

  useEffect(()=>{
    const totalResultToPay = totalToPay(quantity, months)
    setTotal(totalResultToPay)

    // Calculate the month pay
    setMonthPay(total / months);
  }, [ quantity, months, total ])

  const MIN = 0;
  const MAX = 20000;
  const STEP = 500;
  
  
  function handleChange(e){
    setQuantity(Number(e.target.value))
  }

  function handleClickDecrement(){
    const value = quantity - STEP;

    if( value < MIN ){
      alert('Cantidad no valida')
      return;
    }
    setQuantity(value)
  }

  function handleClickIncrement(){
    const value = quantity + STEP;
    if( value > MAX ){
      alert('Cantidad no valida')
      return;
    }
    setQuantity(value)
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>

      <div className='flex justify-between my-6'>

          <Button
            operador='-'
            fn={handleClickDecrement}
          />

          <Button
            operador='+'
            fn={handleClickIncrement}
          />
          
      </div>

      <input 
        type='range'
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-line-600"
        onChange={ handleChange }
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />

      <p className='text-center my-10 text-5xl font-bold text-indigo-600'>
        {formatterMoney(quantity)}
      </p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Chose to <span className='text-indigo-600'>term</span> to pay
      </h2>

      <select name="" id=""
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value={months}
        onChange={ e => setMonths(Number(e.target.value)) }
      >
        <option value="6">
          6 MONTHS
        </option>
        <option value="12">
          12 MONTHS
        </option>
        <option value="24">
          24 MONTHS
        </option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Payment <span className='text-indigo-600'>summary</span>
        </h2>

        <p className='text-xl text-gray-500 text-center font-bold'>{months} Months</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatterMoney(total)}Total to pay</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatterMoney(monthPay)}Monthly payment</p>
      </div>
    </div>
  )
}

export default App
