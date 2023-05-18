import { useState, useEffect, useRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import qrService from '../../services/qr.service';

import { IQRData } from '../../interfaces/qr.interface';

import SuccessSVG from '../../assets/icons/alerts/SuccessSVG';
import ErrorSVG from '../../assets/icons/alerts/ErrorSVG';

interface IQRModalProps {
  qrData: IQRData,
  handleToggleModal: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void
}

interface IQRMessage {
  type: number,
  details: string
}

function QRModal({ qrData, handleToggleModal }: IQRModalProps) {
  const [message, setMessage] = useState<IQRMessage | null>(null);
  const timerValue = useRef<HTMLDivElement>(null);

  const qrObj = { ...qrData, Amount: JSON.parse(qrData.Amount) }

  useEffect(() => {
    const timeTill = Date.now() + (60 * 1000);

    const subscription = setInterval(() => checkStatus(), 2000);
    const timerInterval = setInterval(() => timerFunc(), 1000);

    const timerFunc = () => {
      let divElement = timerValue.current;
      let timeLeft = timeTill - Date.now();

      let second = Math.floor(timeLeft / 1000) % 60;
      let innerText = `00:`;

      if (second >= 10) {
        innerText += second;
      } else if (second >= 0 && second < 10) {
        innerText += `0${second}`;
      } 
      
      if (second === 0) {
        clearInterval(subscription);
        clearInterval(timerInterval);
        setMessage({ type: 1, details: 'დრო ამოიწურა' });
      }

      divElement!.innerHTML = innerText;
    }

    const checkStatus = async () => {
      const response = await qrService.getStatus(qrData.Guid);

      if (response.data.status) {
        setMessage({ type: 0, details: 'გადახდა დადასტურებულია' })
        clearInterval(subscription);
        clearInterval(timerInterval);
      }
    }

    return (() => {
      clearInterval(subscription);
      clearInterval(timerInterval);
    })
  }, []);

  return (
    <div className='flex z-10 justify-center items-center fixed top-0 left-0 bg-black/50 w-screen h-screen'>
      <div className='flex flex-col justify-center z-20 items-center md:h-[510px] md:w-[510px] relative p-4 rounded-xl bg-white h-fit'>
        <div className='md:w-[280px] md:h-[280px]'>
          <QRCodeSVG size={280} level="H" value={JSON.stringify(qrObj)} />
        </div>

        <div ref={timerValue} className='mt-8 font-bold text-lg'>
          00:59
        </div>

        {message && <div className='flex flex-row gap-4 items-center font-bold text-lg mt-2'>
          {message?.type === 0 ? <SuccessSVG stroke='#4ade80' /> : <ErrorSVG stroke='#f87171' />}
          <span className={`${message?.type === 0 ? 'text-main-green' : 'text-[#f87171]'}`}>
            {message?.details}
          </span>
        </div>}

        <div onClick={handleToggleModal} className='flex justify-center items-center w-12 h-12 rounded-full absolute -top-4 -right-4 shadow-md bg-white cursor-pointer'>
          X
        </div>
      </div>
    </div>
  )
}

export default QRModal