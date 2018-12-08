import React,{Component} from "react"
import "./index.module.scss"
// import { Carousel, WingBlank } from 'antd-mobile';
import axios from "axios"
import css from "./index.module.scss"
import store from "../../store"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import "swiper/dist/css/swiper.css"
import ReactSwipe from 'react-swipe';
import Swiper from "swiper"
import "./index.css"
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile'; //引入td移动端组件


import { Button, List } from 'antd-mobile';
class  Main  extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist:[],
	  	swipelist:[],
	  	page:2
	  };
	}

	render(){
		return <div className={css.Main} >	

			{/*轮播图*/}
			<ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
				{
					this.state.swipelist.length?
					 <ReactSwipe
				        className="carousel "
				        swipeOptions={{ continuous: true,auto:2000 }}
				        className={css.swiper}
				      >
				        {
				        	this.state.swipelist.map(item=>
				        			<img  key={item.advertID} src={item.cover} alt="1" />

				        		)
				        }
				      </ReactSwipe>

				      :
				      null
				}			
			</ReactCSSTransitionGroup>

	      		
				      		
		{/*内容列表*/}
		  			<ul>
  				{
			      	this.state.datalist.map(item=>
			      		<li key={item.worksID} onClick={this.handleClick.bind(this,item.worksID)} >
			      			<img src={item.cover} alt="1"/>
			      		<div className={css.Main_li_title}>
			      			<span>
			      				{item.title}
			      			</span>
			      			<div className={css.Main_li_classname}>{item.className}</div>
			      			
			      		</div>
			      			
				      		<div className={css.Main_li_bottom}>
				      			<div>{item.nickName}</div>
				      			<div>{item.timeSpan}</div>
				      		</div>
			      		</li>
			      	)
			    }				
  			</ul>

  			
  				 <Button type="warning" onClick={this.loadClick.bind(this)}>加载更多</Button>
  				
  		  
  		

  			{this.props.children}

  	
  		
		</div>
		
	}



	loadClick(page){
		
		
		// this.setState({
		// 	page:this.state.page++
		// })
		
			// /API/Works?page=2&recommend=2&pageSize=12
			// /API/Works?page=3&recommend=2&pageSize=12
		axios(`/API/Works?page=${this.state.page}&recommend=2&pageSize=12`).then(res=>{
			console.log(res.data)
			this.setState({
				datalist:[...this.state.datalist,...res.data],
				page:++this.state.page

			},()=>{
				console.log("更新后的page",this.state.page)
			})
		})	
	}

	handleClick(worksID){
		console.log(this.props)
		this.props.history.push(`/detail/${worksID}`)	
	}
	
	componentWillMount(){
		store.dispatch({
			type:"Showbanner",
			payload:true
		})
	}
	componentDidMount(){ 


		axios("/API/Works?recommend=2&page=1&pageSize=12").then(res=>{
			console.log(res.data)
			this.setState({
				datalist:res.data
			})
		})	
	

		axios("/Api/Base/SliderBannel").then(res=>{
			this.setState({
				swipelist:res.data.Data
			})
		})	
	}


	componentWillUpdate(){
		var swiper = new Swiper('.swiper-container', {
		      pagination: {
		        el: '.swiper-pagination',
		      },
		    });
	}

}

export default Main