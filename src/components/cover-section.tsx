import { FC } from 'react';
import Image from 'next/image'
import styles from '@/styles/components/CoverSection.module.scss'
import { altImage, data, date, imageSrc } from '@/config';

const CoverSection: FC = () => {
  const myLoader = () => {
    return imageSrc.cover;
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Image
        loader={myLoader}
        src={imageSrc.cover}
        alt={altImage}
        className={styles.photo}
        quality={75}
        placeholder="blur"
        layout='fill'
        blurDataURL={imageSrc.cover}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{data.groom.name} &amp; {data.bride.name}</h3>
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
