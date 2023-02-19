import { FC } from 'react'
import Image from 'next/image'
import styles from '@/styles/components/OpenInvitation.module.scss'
import stylesButton from '@/styles/components/Button.module.scss'
import { altImage, data, imageSrc } from '@/config'

type OpenInvitationTypes = {
  name: string
  open: boolean
  onClose: (open: boolean) => void
  withButton: boolean
}

const OpenInvitation: FC<OpenInvitationTypes> = ({
  open,
  name,
  onClose,
  withButton
}) => {
  const myLoader = (url: string) => {
    return url;
  }
  return (
    <div
      className={`${styles.container} ${open ? 'open' : 'close'}`}
    >
      <div className={styles.overlay}></div>
      <Image
        loader={() => myLoader(imageSrc.open)}
        src={imageSrc.open}
        alt={altImage}
        className={styles.photo}
        quality={30}
        layout="fill"
        objectFit='cover'
        placeholder="blur"
        blurDataURL={imageSrc.open}
        unoptimized
     />
      <div className={styles.body}>
        <div
          className={styles.photo}
        >
          <div className={styles.name}>
            <h3>{data.groom.name} &amp; {data.bride.name}</h3>
          </div>
        </div>
        {withButton &&
          <div className={styles.content}>
            <div className={styles.text}>
              <p>Kepada Bapak/Ibu/Saudara/i</p>
              <h3>{name}</h3>
            </div>
            <button
              className={stylesButton.btn_primaryLong}
              onClick={() => onClose(false)}
            >BUKA UNDANGAN</button>
          </div>
        }
      </div>
    </div>
  )
}

export default OpenInvitation;
