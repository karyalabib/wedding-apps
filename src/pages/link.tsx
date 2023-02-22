import { ChangeEvent, useState } from 'react'
import styles from '@/styles/pages/Link.module.scss'
import stylesButton from '@/styles/components/Button.module.scss'
import { toast } from 'react-toastify'

const caption = {
  title: 'BUAT LINK UNDANGAN',
  titleInput: 'Masukan nama undangan :',
  button: 'Salin Link',
}

export default function LinkPage() {
  const [name, setName] = useState<string>('')
  const hostname = typeof window !== 'undefined' && window.location.hostname;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleCopy = () => {
    navigator?.clipboard?.writeText(`https://${hostname}?name=${encodeURI(name)}`)
    toast.success("Link berhasil di copy");
  }

  // const handleGenerateLinkWhatsapp = (phone: string, name: string, id: string) => {
  //   //link todo
  //   const message: string = `Assalamu%E2%80%99alaikum%20Wr.%20Wb.%0A%0AKepada%20Yth.%20%0ABapak%2FIbu%2FSaudara%2Fi%20%0A${name}%0A%0ADengan%20memohon%20rahmat%20dan%20ridho%20Allah%20SWT%2C%20tanpa%20mengurangi%20rasa%20hormat%2C%20kami%20bermaksud%20mengundang%20Bapak%2FIbu%2FSaudara%2Fi%20untuk%20menghadiri%20acara%20resepsi%20pernikahan%20putra%20putri%20kami%20%3A%20%0A%0AAnggi%20Rizky%20A.%20Sugiwarso%20%0APutri%20pertama%20dari%20IPTU%20Sugiwarso%2C%20S.%20E.%20%26%20Ibu%20Muntianah%0A%0Adengan%20%0A%0AMochamad%20Labib%20Naufal%20Ansi%0APutra%20ketiga%20dari%20Bapak%20Agus%20Salim%20NH%20%26%20Ibu%20Siti%20Khosidah%0A%0ASilahkan%20klik%20link%20di%20bawah%20ini%20untuk%20info%20lengkap%20dari%20acara%20kami%20%3A%0A${hostname}%2Finvitation%2F${id}%0A%0AMerupakan%20suatu%20kebahagiaan%20bagi%20kami%20apabila%20Bapak%2FIbu%2FSaudara%2Fi%20berkenan%20untuk%20hadir%20dan%20memberikan%20doa%20restu%0A%0AMohon%20maaf%20karena%20mengabarkan%20berita%20bahagia%20melalui%20pesan%20singkat%0A%0ATerima%20kasih%20banyak%20atas%20perhatian%20dan%20kehadirannya%0A%0AWassalamu%27alaikum%20Wr.%20Wb.`
  
  //   const urlWhatsapp: string = `https://wa.me/${phone}?text=${message}&lang=id`

  //   window.open(urlWhatsapp, '_ blank')
  // }

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h3 className={styles.title}>{caption.title}</h3>
        <div>
          <label
            className={styles.titleInput}
          >{caption.titleInput}</label>
          <input
            type='text'
            className={styles.input}
            onChange={handleChange}
            name="name"
            value={name}
            placeholder='Anggi dan Labib...'
          />

          <label className={styles.link}>Link: {hostname}/?name={encodeURI(name)}</label>

          <button
            onClick={() => handleCopy()}
            className={stylesButton.btn_primaryLongSmall}
          >{caption.button}</button>
        </div>
      </div>
    </div>
  )
}