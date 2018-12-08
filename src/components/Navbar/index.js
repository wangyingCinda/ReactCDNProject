import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"
import store from "../../store"
// import img from "/img/m.logo.png"
import Sidebar from "../Sidebar/index.js"
// import "./index.css"

class  Navbar  extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:true
	  	
	  };
	}

	render(){
		return <div className={css.Navbar}>	

				{/*头部*/}
				<div className={css.Navbar_top}>
					
					<div className={css.Navbar_top_left}>
						<i className="iconfont icon-category" onClick={this.click.bind(this)} ></i>
					</div>
					<div className={css.Navbar_top_mid}>
					{/*../../../public/img/m.logo.png*/}
						<img src="/img/m.logo.png"/>
					</div>
					<div className={css.Navbar_top_right}>
						<i className="iconfont icon-search"></i>
						<i className="iconfont icon-remind1"></i>
					</div>
				</div>
				
			
			
				{/*sidebar*/}
			
				{this.props.children}
				

		</div>
	}
	click(){
		console.log("触发click")
		store.dispatch({
			type:"ShowSidebar",
			payload:true
		})
	}
	

}




export default Navbar