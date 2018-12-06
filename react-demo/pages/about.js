import React from 'react';
import Router from 'next/router';
import { UserGist } from './components/ajax'

const routeChangeStart=(url)=>{
    console.log('App is changing to:',url)
}
const handler = ()=>{
    Router.push( '/index','/turnToFirstPage');
    Router.events.on('routeChangeStart',routeChangeStart);
    Router.events.off('routeChangeStart',routeChangeStart);
}

class StudyList extends React.Component{
     render(){
         return(
             <div style={{height:2000}}>
                 <p>学习的课程：</p>
                 <ul>
                     <li>Javascript</li>
                     <li>Node</li>
                     <li onClick={handler}><a>next</a></li>
                 </ul>
               <UserGist source = 'https://api.github.com/users/octocat/gists' describe='test ajax' />
             </div>
         )
     }
 }


export default StudyList;