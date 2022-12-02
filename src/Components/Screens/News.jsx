import React from "react";
import Sidebar from "../../Sidebar";
import NewsList from "./NewsList";
import Widget from "../Widgets/Widget";
import "../Profile/ProfilePage.css";
import "./newsItem.css";

function News() {
	return (
		<div className="wrapper">
			<Sidebar />
			<NewsList />
			<Widget />
		</div>
	);
}

export default News;

// import React from 'react'

// import { useState, useEffect } from "react";
// import axios from "axios";

// function News() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       let res = await axios.get(
//         "https://newsapi.org/v2/everything?q=stocks&apiKey=695ae6cb7de647c1801f4549a8178faf"
//       );
//       console.log(res.data.articles);
//       setArticles(res.data.articles);
//     };
//     console.log(articles)
//     fetchNews();
//   }, []);

//   console.log(articles)

//   return (

//   <div className="News">
//  {articles.map(article) > {
//   return (
//     <div className='card'>
//       <div className='card-inner'>
//         <div className='card-front'>
//           <img src={article.img} alt='' />
//         </div>
//         <div className='card-back'>
//           <h1>{article.nname}</h1>
//           <ul>
//             <li>
//               {article.portrayed}
//             </li>
//             <li>
//             {article.nickname}
//             </li>
//             <li>
//               {article.birthday}
//             </li>
//             <li>
//             {article.status}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

//       </div>

//   );
// }

//  export default News;
