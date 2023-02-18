import { FC } from 'react';
import Image from 'next/image'
import styles from '@/styles/components/CoverSection.module.scss'

type CoverSectionProps = {
  firstName: string,
  secondName: string,
  src: string,
  alt: string,
  date: {
    date: string,
    month: string,
    year: string
  }
}

const CoverSection: FC<CoverSectionProps> = ({
  firstName,
  secondName,
  src,
  alt,
  date
}) => {
  const myLoader = () => {
    return src;
  }
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Image
        loader={myLoader}
        src={src}
        alt={alt}
        className={styles.photo}
        width={100}
        height={100}
        quality={75}
        placeholder="blur"
        blurDataURL={src}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{firstName} &amp; {secondName}</h3>
        <p className={styles.desc}><i>The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.</i></p>
        <p className={styles.date}>{date.date}&nbsp;&nbsp;.&nbsp;&nbsp;{date.month}&nbsp;&nbsp;.&nbsp;&nbsp;{date.year}</p>
      </div>
      <div className={styles.snowflakes} aria-hidden="true">
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❆
        </div>
        <div className={styles.snowflake}>
          ❄
        </div>
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❆
        </div>
        <div className={styles.snowflake}>
          ❄
        </div>
        <div className={styles.snowflake}>
          ❅
        </div>
        <div className={styles.snowflake}>
          ❆
        </div>
        <div className={styles.snowflake}>
          ❄
        </div>
      </div>
    </div>
  )
}

export default CoverSection;
