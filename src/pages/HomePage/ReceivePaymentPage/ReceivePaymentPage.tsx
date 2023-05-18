import React, { useEffect, useState } from 'react'
import MoneySVG from '../../../assets/svgs/inputs/MoneySVG'
import PosTerminalSVG from '../../../assets/svgs/inputs/PosTerminalSVG'
import QRModal from '../../../components/QRModal'
import qrService from '../../../services/qr.service'

import { IQRData } from '../../../interfaces/qr.interface'
import { useGeneral } from '../../../contexts/GeneralProvider'

const ReceivePaymentPage: React.FC = () => {
  const { setAlertData, loading, toggleLoading } = useGeneral();
  const [qrData, setQRData] = useState<IQRData>({
    POSId: "1234567",
    Amount: "0",
    Merchant: "",
    Guid: "",
  });
  const [modalOpen, toggleModalOpen] = useState(false)

  useEffect(() => {
    if (qrData.Guid.length > 0) {
      toggleModalOpen(true);
    }
  }, [qrData.Guid])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQRData({
      ...qrData,
      [event.target.name]: event.target.value
    })
  }

  const handleToggleModal = (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    toggleModalOpen(!modalOpen);
  }

  const handleGenerateQR = async () => {
    toggleLoading(true);
    let response = await qrService.generateQR(qrData.Amount, qrData.POSId);

    switch (response.status) {
      case 200:
        setQRData({
          ...qrData,
          'Guid': response.data.guid
        })
        break;
      default:
        setAlertData({ type: 1, details: "დაფიქსირდა შეცდომა" })
    }

    toggleLoading(false);
  }

  const handleFocus = () => {
    let value = '';

    if (qrData.Amount !== '0' && qrData.Amount !== '') return

    value = qrData.Amount === '0' ? '' : '0'

    setQRData({
      ...qrData,
      'Amount': value
    })
  }

  return (
    <div className='flex justify-center items-center flex-grow h-full'>
      <div className='w-full md:w-[650px] px-2 md:px-0'>
        <div>
          <p className='font-bold ml-8 mb-2'>POS ID</p>
          <div className='flex flex-row w-full items-center pl-10 pr-2 py-2 rounded-full border-main-gray border-2 mb-[15px]'>
            <input
              type="text"
              id="POSId"
              name="POSId"
              placeholder='შეიყვანეთ POS მისამართი'
              value={qrData.POSId}
              onChange={handleInputChange}
              className='grow bg-transparent outline-none text-base'
            />

            <PosTerminalSVG />
          </div>
        </div>
        <div>
          <p className='font-bold ml-8 mb-2'>თანხა</p>
          <div className='flex flex-row w-full items-center pl-10 pr-2 py-2 rounded-full border-main-gray border-2 mb-[15px]'>
            <input
              type="text"
              id="Amount"
              name="Amount"
              onFocus={handleFocus}
              onBlur={handleFocus}
              placeholder='შეიყვანეთ თანხა'
              value={qrData.Amount}
              onChange={handleInputChange}
              className='grow bg-transparent outline-none text-base'
            />
            <MoneySVG />
          </div>
        </div>

        <button onClick={handleGenerateQR} disabled={qrData.Amount === '0' || qrData.Amount.length === 0} data-testid="qr-submit-button" type="button" className={`bg-main-gray font-bold text-black text-center w-full px-10 py-6 rounded-full mt-[50px] ${loading && 'bg-light-green'} ${!(qrData.Amount === '0' || qrData.Amount.length === 0) ? 'bg-main-green' : ''}`}>
          გადახდის QR-ის გენერაცია
        </button>
      </div>

      {modalOpen && <QRModal qrData={qrData} handleToggleModal={handleToggleModal} />}
    </div>
  )
}

export default ReceivePaymentPage
