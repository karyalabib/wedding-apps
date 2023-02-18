import { useState } from 'react';
import { Inter } from '@next/font/google'
import Layout from '@/components/layout';
import styles from '@/styles/pages/Home.module.scss'
import CoverSection from '@/components/cover-section';
import NameSection from '@/components/name-section';

export type DataType = {
  groom: {
    name: string
    fullname: string
    fatherName: string
    motherName: string
    ig: string
    photo: string
  },
  bride: {
    name: string
    fullname: string
    fatherName: string
    motherName: string
    ig: string
    photo: string
  }
}

const data: DataType = {
  groom: {
    name: 'Zakka',
    fullname: 'Musthofa Zakka',
    fatherName: 'Abd. Qodim',
    motherName: 'Basni Masrohatin',
    ig: 'Zakka',
    photo: ''
  },
  bride: {
    name: 'Tyas',
    fullname: 'Maharani Pujaning Tyas',
    fatherName: 'Ani Saputro',
    motherName: 'Trinovita',
    ig: 'Tyas',
    photo: ''
  }
}

const imageSrc = {
  cover: 'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/public/photo/cover'
}

const audioLink = 'https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/audio/Jangan%20Berhenti%20Mencintaiku%20(Saxophone%20Cover%20by%20Dori%20Wirawan).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdWRpby9KYW5nYW4gQmVyaGVudGkgTWVuY2ludGFpa3UgKFNheG9waG9uZSBDb3ZlciBieSBEb3JpIFdpcmF3YW4pLm1wMyIsImlhdCI6MTY2OTkyMjM2OSwiZXhwIjoxOTg1MjgyMzY5fQ.cT_pEZLiLJO7udmTpLsM1mtqR135TrLTOGAj6Vl_gjc'

const altImage = `${data.groom.name} & ${data.bride.name}`

const date = {
  date: '12',
  month: '03',
  year: '2023'
}

export default function Home() {
  const [audioPlay, setAudioPlay] = useState(false);
  const [audio] = useState(typeof Audio != "undefined" && new Audio(audioLink));
  
  const handlePause = () => {
    setAudioPlay(!audioPlay)
  }
  
  return (
    <Layout>
    <div className={styles.container}>
        <div className={styles.content}>
          <button
            className={`${styles.confirm}`}
            // onClick={()=> setConfirm(!confirm)}
          ><span className={styles.confirmIcon}/></button>
          <button
            className={`${styles.audio}`}
            onClick={handlePause}
          ><span className={`${styles.audioIcon} ${audioPlay ? 'pause' : 'play'}`} /></button>
          <CoverSection 
            firstName={data.groom.name}
            secondName={data.bride.name}
            src={imageSrc.cover}
            alt={altImage}
            date={date}
          />
          <NameSection data={data} />
          {/* <DateSection
            clock={dataGuest?.data?.[0]?.time} 
            isConfirm={dataGuest?.data?.[0]?.arrival !== null}
            setConfirm={() => setConfirm(!confirm)}
          /> */}
          {/* <EndingCover /> */}
        </div>
      </div>
    </Layout>
  )
}
