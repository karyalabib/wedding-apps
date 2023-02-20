import { FC, useState } from 'react'
import { gift } from '@/config';
import { toast } from 'react-toastify';
import { GiftAddressType, GiftBankType, GiftType } from '@/config/types';
import styles from '@/styles/components/ArrivalConfirmation.module.scss'
import stylesButton from '@/styles/components/Button.module.scss'

const caption = {
  title: 'Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:',
  open: 'Buka Wedding Gift',
  close: 'Tutup Wedding Gift',
  rekening: 'REKENING',
  address: 'ALAMAT',
  bank: 'BANK',
  copy: 'Salin',
}

const GiftSection: FC = () => {
  const { bankAccount, address } = gift as GiftType;
  const [isWeddingGift, setIsWeddingGift] = useState(false)

  const handleCopy = (text: string) => {
    navigator?.clipboard?.writeText(text)
    toast.success("Link berhasil di copy");
  }

  return (
    <div className={styles.weddingGiftContainer}>
      <p
        className={styles.weddingGiftTitle}
      >{caption.title}</p>
      <button
        className={`${styles.weddingGift} `}
        type="button"
        onClick={() => setIsWeddingGift(!isWeddingGift)}
      >{isWeddingGift ? caption.close : caption.open}</button>
      {isWeddingGift &&
        <div className={styles.weddingGiftDetail}>
          <div>
            <h4 className={styles.weddingGiftDetailTitle}>{caption.rekening}</h4>
            {bankAccount.map((bank: GiftBankType, index) => (
              <div
                key={index}
                className={styles.weddingGiftDetailRekening}
              >
                <div>
                  <h3><span>{caption.bank} {bank.bankAcount}</span> - {bank.nameAcount}</h3>
                  <p>{bank.accountNumber}</p>
                </div>
                <button
                  type="button"
                  className={stylesButton.btn_primarySmall}
                  onClick={() => handleCopy(bank.accountNumber)}
                >{caption.copy}</button>
              </div>
            ))}


            {address.length > 0 && address.map((item: GiftAddressType, index) => (
              <>
                <h4 className={styles.weddingGiftDetailTitle}>{caption.address}</h4>
                <div
                  key={index}
                  className={styles.weddingGiftDetailRekening}
                >
                  <div>
                    <h3>
                      <span>{item.name} - {item.phoneNumber}</span>
                      <br />
                      <label>
                        {item.addres}
                      </label>
                    </h3>
                  </div>
                  <button
                    className={stylesButton.btn_primarySmall}
                    type="button"
                    onClick={() => handleCopy(`${item.name} - ${item.phoneNumber} | ${item.addres}`)}
                  >{caption.copy}</button>
                </div>
              </>
            ))}
          </div>
          <div>

          </div>
        </div>
      }
    </div>
  )
}

export default GiftSection;