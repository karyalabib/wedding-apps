import { FC } from 'react';
import Link from 'next/link';
import { event } from '@/config';
import { EventTimeType, EventType } from '@/config/types';
import styles from '@/styles/components/DateSection.module.scss'
import stylesButton from '@/styles/components/Button.module.scss'
import GiftSection from './gift-section';

const caption = {
  title: 'Dengan memohon rahmad dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra putri kami.',
  openMap: 'Buka Map Lokasi',
}

const DateSection: FC = () => {
  const returnItemDate = (data: EventType, key: number) => (
    <div className={styles.section} key={key}>
      <h3>{data.title}</h3>
      <h4>{data.date}</h4>
      {data.times.length === 1 ?
        data.times[0].time :
        data.times.map((time: EventTimeType, index) =>
          <p key={index}><span>{time.title}</span>
            : {time.time}
          </p>
        )}
      <h4>{data.locationTitle}</h4>
      <p>{data.location}</p>
      <Link href={data.mapLink} legacyBehavior>
        <a target="_blank" className={styles.map}>
          <iframe
            src={data.mapIframe}
            width="100%"
            height="100%"
            scrolling="no"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </a>
      </Link>
      <Link href={data.mapLink} legacyBehavior>
        <a target="_blank" className={stylesButton.btn_primaryLongSmall}>{caption.openMap}&nbsp;{event[0].title}</a>
      </Link>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{caption.title}</h3>
        {event.map((item, key) => returnItemDate(item, key))}
        <GiftSection />
      </div>
    </div>
  )
}

export default DateSection;
