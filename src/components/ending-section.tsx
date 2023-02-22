import { FC } from 'react';
import Image from 'next/image'
import styles from '@/styles/components/EndingCover.module.scss'
import { altImage, data, imageSrc } from '@/config';

type EndingSectionPropsType = {
  clock?: string
}

const EndingSection: FC<EndingSectionPropsType> = ({
  clock
}) => {
  const myLoader = () => {
    return imageSrc.ending;
  }
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <Image
        loader={myLoader}
        src={imageSrc.ending}
        alt={altImage}
        className={styles.photo}
        quality={35}
        layout="fill"
        placeholder="blur"
        blurDataURL={imageSrc.ending}
      />

      <div className={styles.content}>
        {/* <p className={styles.desc}>Suatu kehormatan dan kebahagiaan bagi kami jika Bapak/Ibu/Saudara/i. Silahkan datang untuk memberikan restu, kami ucapkan terima kasih.</p> */}
        <h4 className={styles.title}>Kami yang berbahagia</h4>
        <h5 className={styles.titleFamily}>Keluarga Bapak {data.groom.fatherName}. dan Ibu {data.groom.motherName}</h5>
        <h5 className={styles.titleFamily}>Keluarga Bapak {data.bride.fatherName} dan Ibu {data.bride.motherName}</h5>
        {/* <p className={styles.date}>11&nbsp;&nbsp;.&nbsp;&nbsp;12&nbsp;&nbsp;.&nbsp;&nbsp;22</p> */}
        <h3 className={styles.name}>{data.groom.name} &amp; {data.bride.name} &nbsp;.</h3>
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

export default EndingSection;
