import React from 'react'

const arts = ({article, id}) => {
  const styles = {
    art: 'flex flex-col items-center justify-center m-5 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium',
  }
  return (
    <div className={styles.art}>
        <a href={`/articles/${id}`}>
            <h1>{article}</h1>
        </a>
    </div>
  )
}

export default arts