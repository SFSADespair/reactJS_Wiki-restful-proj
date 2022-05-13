import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import Articles from '../components/Articles'

const Home = () => {
	const styles ={
		search: 'flex flex-row items-center justify-center w-full h-full p-10',
		inp: "h-10 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow block focus:outline-[#536162] flex items-center justify-center text-center shadow-md",
		btn: "h-10 w-20 text-white rounded-lg bg-[#152D35] hover:bg-[#345B63] flex justify-center items-center ml-2",
	}
	// const getArticles = async () => {
	// 	const res = await fetch()
	// 	const data = await res.json()
	// 	console.log(data)
	// }

  	return (
		<>
			<div>
				<Nav />
			</div>
			<div className="container">
				<div className={styles.search}>
					<div className={styles.search}>
						<input type="text" className={styles.inp} placeholder="Search anything..."/>
						<button className={styles.btn}>Search</button>
					</div>
				</div>
			</div>
			<div className="articles">
				<Articles />
			</div>
		</>
  	)
}

export default Home