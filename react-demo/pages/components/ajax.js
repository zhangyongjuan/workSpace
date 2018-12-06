import React,{ Component } from 'react';
import $ from 'jquery';

class UserGist extends Component{
  constructor(props){
    super(props);
    this.state = {username:'',lastGistUrl:'',describe:''}
  }
  componentDidMount(){
    this.serverRequest = $.get(this.props.source,function(result){
      var lastGist = result[0];
      this.setState ({
        username:lastGist.owner.login,
        lastGistUrl:lastGist.html_url,
        describe: this.props.describe
      })
    }.bind(this))
  }
  componentWillUnmount(){
    this.serverRequest.abort();
  }
  render(){
    return(
      <div>
        {this.state.username}用户最新的 Gist 共享地址：
        {this.state.lastGistUrl} <br/>
        描述是：{this.state.describe}
      </div>
    )
  }
}
export { UserGist };