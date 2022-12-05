import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Coin from "./coin.jsx";
import "./Widget.css";
import Footer from "./Footer";
import Sidebar from "../../Sidebar.js";

function Widgets() {
	const [coins, setCoins] = useState([]);
	const [currentCoin, setCurrentCoin] = useState(0);
	const { pathname } = useLocation();
	let interval;

	useEffect(() => {
		const fetchCoinData = async () => {
			interval = setInterval(() => updateCurrCoin(res.data), 3000);
			let res = await axios.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false",
			);
			setCoins(res.data);
			if (pathname === "/crypto") {
				document.querySelectorAll(".hidden-mobile").forEach((card) => {
					card.classNameList.remove("hidden-mobile");
				});
				// document.querySelector(".hidden-mobile").style.width = "100%"
			}
		};

		fetchCoinData();
		return () => clearInterval(interval);
	}, []);

	const updateCurrCoin = (currCoins) => {
		setCurrentCoin((coinIndex) => {
			if (coinIndex < currCoins.length) return coinIndex + 1;
			return 0;
		});
	};

	return (
		<div className="widget-container hidden-mobile">
			<div className="widget">
				<Footer />
				<div className="widgets__input">
					<input placeholder="Search Twitter" type="text" />
				</div>

				<div className="widgets__widgetContainer">
					<h2>Crypto</h2>

					<div className="main-con">
						{coins.slice(currentCoin, currentCoin + 10).map((coin) => {
							return (
								<Coin
									key={coin.id}
									name={coin.name}
									price={coin.current_price}
									symbol={coin.symbol}
									marketcap={coin.total_volume}
									volume={coin.market_cap}
									image={coin.image}
									priceChange={coin.price_change_percentage_24h}
								/>
							);
						})}
					</div>
				</div>
				<div className="widget-hide-nav-bar">
					<Sidebar />
				</div>
			</div>
		</div>
	);
}

export default Widgets;
