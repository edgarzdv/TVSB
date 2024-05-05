import React, { useEffect, useState } from 'react'
import ArticleList from './articleList';

import style from './style.module.scss'
import { Article } from '@/types/Article'
import Header from '@/components/header';
import TokenInput from '@/components/tokenInput';
import axios from 'axios';


const Articals = () => {
  const [trumpArticals, setTrumpArticals] = useState<Article[]>([]);
  const [bidenArticals, setBidenArticals] = useState<Article[]>([]);

  async function getTreads() {
    try {


      const trumpRes = await axios.get('api/trump')
      const bidenRes = await axios.get('api/biden')

      setTrumpArticals(trumpRes.data.posts)
      setBidenArticals(bidenRes.data.posts)

    } catch (error) {
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    getTreads()
  }, [])



  return (
    <div className={style.articleContainer}>
      <Header />
      <div className={style.tokenContainer}>
      </div>
      <div className={style.articleListsContainer}>
        <ArticleList articles={trumpArticals} title='Trump' />
        <ArticleList articles={bidenArticals} title='Biden' />
      </div>
    </div>
  )
}

export default Articals