import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import store from "../../store"
class  Sidebar extends Component{


	constructor(props) {
	  super(props);
	
	  this.state = {
	  	sidebarShow:false
	  };
	}
	render(){	

		return   <ReactCSSTransitionGroup
				          transitionName="example"
				          transitionEnterTimeout={500}
				          transitionLeaveTimeout={300}>
				<div className={this.state.sidebarShow?css.Sidebar:css.hide}>
					

          
        
					<div className={css.Sidebar_left}>
						<div>
							<div className={css.Sidebar_left_login}>	
									<div onClick={this.hideClick.bind(this)} className={css.hideClick}>
										×
									</div>
								<NavLink to="/login" onClick={this.hideClick.bind(this)} >
									
									<div className={css.Sidebar_left_login_img}>
										
									</div>
									<span>请登录</span>

								</NavLink>
							</div>
								<div className={css.showUl} onClick={this.hideClick.bind(this)} >
									<ul  >
										<li >											
											<NavLink to="/main" activeClassName={css.myactive}>
												<span>首页</span>
											</NavLink>									
										</li>
										<li  >											
											<NavLink to="/works" activeClassName={css.myactive} >
												<span>作品</span>
											</NavLink>									
										</li>
										<li  >											
											<NavLink to="/news" activeClassName={css.myactive} >
												<span>咨询</span>
											</NavLink>									
										</li>
										<li >											
											<NavLink to="/article" activeClassName={css.myactive}>
												<span>文章</span>
											</NavLink>									
										</li>
										<li  >											
											<NavLink to="/font" activeClassName={css.myactive}>
												<span>字体</span>
											</NavLink>									
										</li>
									</ul>
								</div>
								<div className={css.Sidebar_left_bottom} onClick={this.hideClick.bind(this)}>
									<NavLink to="/register" >
										<span>注册</span>
									</NavLink>
								</div>
							
						</div>
					</div>
					
					
				</div>
				</ReactCSSTransitionGroup>
	}

	hideClick(){
		console.log("hideClick")

		store.dispatch({
			type:"HideSidebar",
			payload:false
		})
	}
	componentDidMount(){

		store.subscribe(()=>{
				console.log("通知sidebar",store.getState().sidebarReducer)
				this.setState({
					sidebarShow:store.getState().sidebarReducer 
				

				})			
			})

	}
}

export default Sidebar