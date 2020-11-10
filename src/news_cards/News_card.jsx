import React from 'react';
import './NewsCard.css';
const NewsCard=({data})=>{
    console.log(data)
    return(
        <>
            {/*
                {
                    "author": "Evelyn Cheng",
                    "title": "China's pork prices drop for the first time in more than a year as shortage eases - CNBC",
                    "description": "Prices for pork are on the decline in China, after a monthslong price surge in the country's most widely eaten meat helped to boost imports.",
                    "url": "https://www.cnbc.com/2020/11/10/chinas-pork-prices-drop-for-the-first-time-in-more-than-a-year.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106789152-1604989490771-gettyimages-1226000684-vcg111284626489.jpeg?v=1604989530",
                    "publishedAt": "2020-11-10T06:48:00Z",
                    "content": "BEIJING Prices of pork in China fell for the first time in more than a year, after months of surging prices for the country's most popular meat.\r\nPork prices fell 2.8% in October from a year ago, Chi… [+2601 chars]"
                }
            */}
            <div className='newsData'>
                <div className='container-fluid'>
                    <div className="row">
                        {
                            data[0]?.map((news, ind)=>(
                                    <div key={`${news.author}${ind}`} className="col-sm col-md-6 col-lg-4">
                                        {/* card */}
                                        <div  className="m-1 rounded row border shadow">
                                            <div className="col-4 m-0 p-0">
                                                {
                                                    news.urlToImage?
                                                        <img className='img-fluid w-100 h-100 rounded' src={news.urlToImage} alt={news.author} />
                                                    :
                                                        <img className='img-fluid w-100 h-100 rounded' src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                                }
                                            </div>
                                            <div className="col-8">
                                                <h4 className='text-info text-truncate'>{news['title']} </h4>
                                                <p className='description text-justify'>{news.description}</p>
                                                <a href={news.url} target='blank'>
                                                    <button className='btn btn-outline-danger'>More Info</button>
                                                </a>
                                                <small>{news.publishedAt}</small>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                    )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewsCard;