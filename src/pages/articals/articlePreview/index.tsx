import React from 'react'

import style from '../style.module.scss'


const ArticlePreview = ({ article }: any) => {
    return (
        <div className={style.row}>
            <span>{article.title}</span>
        </div>
    )
}

export default ArticlePreview