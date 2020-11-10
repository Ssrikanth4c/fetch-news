import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsCard from './news_cards/News_card';
// import './App.css';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      newsData:[],
      loading:true
    }
  }
 async componentDidMount(){
    const url=`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    const resp= await fetch(url);
    const data= await resp.json();
    this.setState({
      newsData: [...this.state.newsData, data.articles],
      loading:false
    })
  }
  render(){
    
    const {newsData, loading}= this.state;
    return (
      <div >
      {/* <Card card_data={card_data}/> */}
      {
        loading? 
        (
          <div className='loading d-flex justify-content-center align-items-center'>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
        :
        <NewsCard  data={newsData}/>
      }
    </div>
  );
}
}

export default App;
