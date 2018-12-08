import React,{Component} from "react"
import css  from "./index.module.scss"
import {NavLink} from "react-router-dom"
import store from "../../store"

class Banner extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:false
	  	
	  };
	}
	render(){

		return <div className={this.state.isShow?css.Banner:css.hide}>
			
			
				<ul >
					<li>
						<NavLink to="/main" activeClassName={css.myactive}>
							
							<span>首页</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/works" activeClassName={css.myactive}>
							
							<span>作品</span>
						</NavLink>
					</li>
					<li>	
						<NavLink to="/news" activeClassName={css.myactive}>
							
							<span>资讯</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/article" activeClassName={css.myactive}>
							
							<span>文章</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/font" activeClassName={css.myactive}>
							
							<span>字体</span>
						</NavLink>
					</li>
				</ul>

		</div>
	}

	componentWillMount(){
			store.subscribe(()=>{
				console.log("通知banner",store.getState().bannerReducer)
				this.setState({
					isShow:store.getState().bannerReducer ,//获取到tabbarReducer消息
				},()=>{
					console.log("11",this.state.isShow)
				})			
			})

			// console.log("DidMounted",this.state.isShow)
			// store.dispatch({
			// 	type:"Hidebanner",
			// 	payload:false
			// })


		
	}



	
	
}

export default Banner