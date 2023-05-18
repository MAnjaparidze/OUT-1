import { useState, useEffect } from 'react'
import SalesFilterSVG from '../../../assets/svgs/general/SalesFilterSVG'
import qrService from '../../../services/qr.service';
import { ISale } from '../../../interfaces/qr.interface';
import { useGeneral } from '../../../contexts/GeneralProvider'
import { useNavigate } from 'react-router-dom';

type Props = {}

const SalesPage = (props: Props) => {
  const [sales, setSales] = useState([]);
  const [salesSum, setSalesSum] = useState(0);
  const { setAlertData } = useGeneral();
  const navigate = useNavigate()
  useEffect(() => {
    handleGetSales();
  }, [])

  const handleGetSales = async () => {
    let response = await qrService.getPayments();

    if (response.status === 401) {
      setAlertData({ type: 1, details: 'სესია ვადაგასულია, ხელახლა გაიარეთ ავტორიზაცია' });
      navigate('/login')
    } else if (response.status === 200) {
      setSales(response.data);
      calcSum(response.data);
    } else {
      setAlertData({ type: 1, details: 'გაუთვალისწინებელი შეცდომა' });
    }
  }

  // TODO: Add Types
  const calcSum = (data: any) => {
    let sum = data.reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue.amount;
    }, 0);

    setSalesSum(sum);
  }

  return (
    <div className='flex flex-grow flex-col h-full mx-10 md:pt-10'>
      <div className='flex flex-row justify-between w-full'>
        <span>საწყისი თარიღი - საბოლოო თარიღი</span>
        <span>ჯამური თანხა არჩეულ პერიოდში <span className='font-bold'>{salesSum} ლ</span></span>
      </div>

      <h1 className='mt-20 mb-10 font-bold text-lg'>ტრანზაქციები</h1>

      <div className='flex flex-col'>
        <div className='flex flex-row justify-center text-center font-bold'>
          <div className='w-1/6'>თარიღი</div>
          <div className='w-1/6'>დრო</div>
          <div className='w-1/6'>თანხა</div>
          <div className='w-1/6'>ტრანზაქციის ID</div>
          <div className='w-1/6'>POS ID</div>
          <div className='w-1/6'>ფილტრი</div>
        </div>

        <div className='flex flex-col w-full mt-3 overflow-y-auto max-h-[600px]'>
          {
            sales.map((sale: ISale, index) => {
              let date = sale.date.split('T');
              return (
                <div key={index} className='flex flex-row justify-center text-center w-full mt-6'>
                  <div className={`flex flex-row w-5/6 rounded-full py-10 ${index % 2 === 0 ? 'bg-extra-light-gray' : 'bg-extra-light-gray/50'} font-bold`}>
                    <div className='w-1/5'>{date[0]}</div>
                    <div className='w-1/5'>{date[1]}</div>
                    <div className='w-1/5'>{sale.amount}</div>
                    <div className='w-1/5'>{sale.paymentGuid}</div>
                    <div className='w-1/5'>{sale.posId}</div>
                  </div>
                  <div className='w-1/6'>
                    <div className='flex justify-center items-center bg-extra-light-gray w-3/5 mx-auto h-full rounded-full cursor-pointer'>
                      <SalesFilterSVG />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SalesPage