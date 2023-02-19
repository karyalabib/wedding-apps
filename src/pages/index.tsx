import { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import styles from '@/styles/pages/Home.module.scss'
import CoverSection from '@/components/cover-section';
import NameSection from '@/components/name-section';
import DateSection from '@/components/date-section';
import { audioLink } from '@/config';
import EndingSection from '@/components/ending-section';
import OpenInvitation from '@/components/open-invitation';

export default function Home() {
  const [audioPlay, setAudioPlay] = useState(false);
  const [audio] = useState(typeof Audio != "undefined" && new Audio(audioLink));
  const [openInvitation, setOpenInvitation] = useState<boolean>(true)

  const handlePause = () => {
    setAudioPlay(!audioPlay)
  }

  const handleClose = () => {
    setOpenInvitation(false)
    setAudioPlay(true)
  }

  useEffect(() => {
    if (audio) {
      audioPlay ? audio?.play() : audio?.pause();
    }
  }, [audioPlay, audio])

  useEffect(() => {
    audio && audio.addEventListener('ended', () => setAudioPlay(false));
    return () => {
      audio && audio.removeEventListener('ended', () => setAudioPlay(false));
    };
  }, [audio]);

  return (
    <Layout>
      <OpenInvitation
        withButton={true}
        open={openInvitation}
        onClose={() => handleClose()}
        name={"labib"}
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <button
            className={`${styles.audio}`}
            onClick={handlePause}
          ><span className={`${styles.audioIcon} ${audioPlay ? 'pause' : 'play'}`} /></button>
          <CoverSection />
          <NameSection />
          <DateSection />
          <EndingSection />
        </div>
      </div>
    </Layout>
  )
}
