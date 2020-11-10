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
   console.log('sree')
    const url="http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d7f51e93fed7469bbf2ffe6095c7e15a";
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
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
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
