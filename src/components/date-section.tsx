import { FC } from 'react';
import styles from '@/styles/components/DateSection.module.scss'
import stylesButton from '@/styles/components/Button.module.scss'
import Link from 'next/link';
import { event } from '@/config';


const DateSection: FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Dengan memohon rahmad dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra putri kami.</h3>
        <div className={styles.section}>
          <h3>{event[0].title}</h3>
          <h4>{event[0].date}</h4>
          <p>{event[0].time}</p>
          <h4>{event[0].locationTitle}</h4>
          <p>{event[0].location}</p>
        </div>
        <div className={styles.section}>
        <h3>{event[1].title}</h3>
          <h4>{event[1].date}</h4>
          <p>{event[1].time}</p>
          <h4>{event[1].locationTitle}</h4>
          <p>{event[1].location}</p>
          <Link href="https://goo.gl/maps/7wXztL71tP5UNWXQ7" legacyBehavior>
            <a target="_blank" className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.5843126316036!2d112.08555701477296!3d-6.94018079498574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTYnMjQuNyJTIDExMsKwMDUnMTUuOSJF!5e0!3m2!1sen!2sid!4v1676794952224!5m2!1sen!2sid"
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
          <Link href="https://goo.gl/maps/ZSMSU2JFTygXNWAQ9" legacyBehavior>
            <a target="_blank" className={stylesButton.btn_primaryLongSmall}>Buka Map</a>
          </Link>
          <br />
        </div>
      </div>

    </div>
  )
}

export default DateSection;
