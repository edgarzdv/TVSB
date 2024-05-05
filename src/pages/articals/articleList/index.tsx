import React from 'react'
import ArticlePreview from '../articlePreview'
import { Article } from '@/types/Article'

import style from '../style.module.scss'

interface Props {
  articles: Article[]
  title: string
}
const ArticleList = ({ articles, title }: Props) => {

  return (
    <div className={style.listContainer}>
      <span>{title}</span>
      <div >{articles.map((article: {}) => <ArticlePreview article={article} key={article?.title}/>)}</div>
    </div>
  )
}

export default ArticleList