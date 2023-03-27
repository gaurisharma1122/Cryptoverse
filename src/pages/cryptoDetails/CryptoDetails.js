import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/pageHeader/PageHeader'
import { useGlobalContext } from '../../context/context'
import { cryptocurrenciesHeader } from '../../headers'
import "./CryptoDetails.css"
import millify from 'millify'
import { AiOutlineDollar, AiOutlineNumber, AiOutlineThunderbolt, AiOutlineTrophy, AiOutlineFund, AiOutlineMoneyCollect, AiOutlineCheck, AiOutlineStop, AiOutlineExclamationCircle } from 'react-icons/ai'
import LineChart from '../../components/lineChart/LineChart'
import Loader from '../../components/loader/Loader'

const CryptoDetails = () => {

    const { coinId } = useParams();
    const { state, setIsLoading }= useGlobalContext();
    const [coinDetails, setCoinDetails] = useState({});
    const [timePeriod, setTimePeriod] = useState('24h');
    const [coinPrice, setCoinPrice] = useState([]);
    const [coinTimeStamp, setCoinTimeStamp] = useState([]);
    

    const fetchCoinDetails = (coinId) => {
        fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
            {
                method: 'GET',
                headers: cryptocurrenciesHeader
            })
            .then(response => response.json())
            .then(respData => {
                setCoinDetails(respData?.data?.coin);
               setIsLoading(false);
            });
    };

    const fetchCoinHistory = (coinId, timePeriod) => {
        fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`,
            {
                method: 'GET',
                headers: cryptocurrenciesHeader
            })
            .then(response => response.json())
            .then(respData => {
                let price = respData.data.history.map((item) => item.price);
                let time = respData.data.history.map((item) => new Date(item.timestamp).toLocaleDateString());
                setCoinPrice(price);
                setCoinTimeStamp(time);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        fetchCoinDetails(coinId);
    }, []);

    useEffect(() => {
        fetchCoinHistory(coinId, timePeriod);
    }, [timePeriod]);

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${coinDetails?.price && millify(coinDetails?.price)}`, icon: <AiOutlineDollar /> },
        { title: 'Rank', value: coinDetails?.rank, icon: <AiOutlineNumber /> },
        { title: '24h Volume', value: `$ ${coinDetails?.volume && millify(coinDetails?.volume)}`, icon: <AiOutlineThunderbolt /> },
        { title: 'Market Cap', value: `$ ${coinDetails?.marketCap && millify(coinDetails?.marketCap)}`, icon: <AiOutlineDollar /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${coinDetails?.allTimeHigh?.price && millify(coinDetails?.allTimeHigh?.price)}`, icon: <AiOutlineTrophy /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: coinDetails?.numberOfMarkets, icon: <AiOutlineFund /> },
        { title: 'Number Of Exchanges', value: coinDetails?.numberOfExchanges, icon: <AiOutlineMoneyCollect /> },
        { title: 'Aprroved Supply', value: coinDetails?.supply?.confirmed ? <AiOutlineCheck /> : <AiOutlineStop />, icon: <AiOutlineExclamationCircle /> },
        { title: 'Total Supply', value: `$ ${coinDetails?.supply?.total && millify(coinDetails?.supply?.total)}`, icon: <AiOutlineExclamationCircle /> },
        { title: 'Circulating Supply', value: `$ ${coinDetails?.supply?.circulating && millify(coinDetails?.supply?.circulating)}`, icon: <AiOutlineExclamationCircle /> },
    ];

    if (state.isLoading === true) {
        return <Loader />
    }
    else {
        return (
            <section className='crypto-details'>
                <PageHeader title={coinDetails.name} />
                <div className="container crypto-details-container">
                    <div className="crypto-details-title">
                        <h1>{coinDetails.name} ({coinDetails.symbol}) Price</h1>
                        <img src={coinDetails.iconUrl} alt={coinDetails.name} />
                    </div>

                    <div className="crypto-details-info">
                        <p>{coinDetails.description}</p>
                        <div>
                            <h4>Current Price: {millify(coinDetails.price)} USD</h4>
                            <h4>Change: <span className={coinDetails.change > 0 ? 'profit price' : 'loss price'}>{coinDetails.change}%</span></h4>
                        </div>
                    </div>

                    <div className="crypto-chart">
                        <div>
                            <h2>{coinDetails.name} Price Chart</h2>
                            <form className="select">
                                <label>Select Time Period: </label>
                                <select name='timeperiod' value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
                                    {
                                        time.map((item, index) => {
                                            return (
                                                <option key={index} value={item}>{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </form>
                        </div>
                        <LineChart coinPrice={coinPrice} coinTimeStamp={coinTimeStamp} />
                    </div>

                    <div className="crypto-details-subcontent">
                        <div className="statistics">
                            <h3>{coinDetails.name} Statistics</h3>
                            <p>An overview showing the statistics of {coinDetails.name}</p>
                            <ul>
                                {
                                    stats.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <span>{item.icon} {item.title}</span>
                                                <span>{item.value}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="statistics">
                            <h3>Other Statistics</h3>
                            <p>An overview showing the statistics of all cryptocurrencies</p>
                            <ul>
                                {
                                    genericStats.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <span>{item.icon} {item.title}</span>
                                                <span>{item.value}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="statistics">
                            <h3>{coinDetails.name} Links</h3>
                            <ul>
                                {
                                    coinDetails.links?.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <span>{item.type}</span>
                                                <span><a href={item.url} target="_blank">{item.name}</a></span>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
};

export default CryptoDetails;
