import Header from '@/components/header'
import OrganizationChart from '@/components/organizationsChart'
import SentimentsChart from '@/components/sentimentsChart'
import React, { useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
import axios from 'axios'


const Compression = () => {
  const [trumpSentiments, setTrumpSentiments] = useState([]);
  const [bidenSentiments, setBidenSentiments] = useState([]);

  async function getData() {

    try {
      const trumpRes = await axios.get('api/trump')
      const bidenRes = await axios.get('api/biden')

      setTrumpSentiments(trumpRes.data.posts)
      setBidenSentiments(bidenRes.data.posts)
    } catch (error) {
      console.log('error: ', error);

    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={style.compressionContainer}>
      <Header />
      {trumpSentiments.length ? <SentimentsChart trumpSentiments={trumpSentiments} bidenSentiments={bidenSentiments} /> : null}
      {trumpSentiments.length ? <OrganizationChart trumpThreads={trumpSentiments} bidenThreads={bidenSentiments} /> : null}
    </div>

  )
}

export default Compression