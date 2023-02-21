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
    navigator?.clipboard?.writeText(`${hostname}?name=${encodeURI(name)}`)
    toast.success("Link berhasil di copy");
  }

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