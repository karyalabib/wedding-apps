import { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/components/NameSection.module.scss'
import stylesButton from '@/styles/components/Button.module.scss'
import { altImage, data } from '@/config';

type SectionPerson = {
    name: string
    female: boolean
    father: string
    mother: string
    photo: string
    ig: string
}

const NameSection: FC = () => {

  const sectionPerson = ({
    name,
    female,
    father,
    mother,
    photo,
    ig
  }: SectionPerson) => {
    const myLoader = () => {
      return photo;
    }
    return (
      <div className={styles.personContainer}>
        <div className={styles.personPhoto}>
          <Image
            loader={myLoader}
            src={photo}
            alt={altImage}
            className={styles.personPhoto}
            width={150}
            height={180}
            quality={30}
            layout="responsive"
            placeholder="blur"
            blurDataURL={photo}    
          />
        </div>
        <div className={styles.personText}>
          <h3 className={styles.personTitle}>{name}</h3>
          <p className={styles.personTitleDesc}>{female ? 'Putri' : 'Putra'} dari</p>
          <p className={styles.personDesc}>{!female && "Bapak"} {father}, &amp; Ibu {mother}</p>
          <Link href={`https://www.instagram.com/${ig}`} legacyBehavior >
              <a className={stylesButton.btn_primarySmall} target='_blank' >
                <span className={styles.igIcon} />&nbsp;&nbsp;{ig}
              </a>
          </Link>
       </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}><i>Assalamu’alaikum Wr. Wb.</i><br /><br />Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.<br />Perkenankanlah kami merangkai kasih sayang yang tercipta di antara putra putri kami:</h3>
      {sectionPerson({
        name: data.groom.fullname,
        female: false,
        father: data.groom.fatherName,
        mother: data.groom.motherName,
        photo: data.groom.photo,
        ig: data.groom.ig
      })}
      {sectionPerson({
        name: data.bride.fullname,
        female: true,
        father: data.bride.fatherName,
        mother: data.bride.motherName,
        photo: data.bride.photo,
        ig: data.bride.ig
      })}
    </div>
  )
}

export default NameSection;
