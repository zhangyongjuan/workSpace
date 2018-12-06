import React from 'react';
import Link from 'next/link';

import { List } from './components/title'

//在类中间不允许加注释！
//target="_blank" 无效？
class Hello extends React.Component{
    render(){
        return (
            <div>
                <List />
                hello world!
                <p>scoped!</p>
                <img src="../static/img/test.png" alt="my ing"/> <br/>
                <label>click</label>
                    <Link scroll={false} href={{pathname:'/about',query:{name:'Zeit'}}} replace>
                        <a target='_blank'>here</a>
                    </Link>
                <label>.can be turn to about page!</label> <br/>

                <style jsx>{`
                    p{
                        color:blue;
                    }
                    div{
                        background:lightgray
                    }
                    img{
                        width:100px;
                    }
                `}
                </style>
                <style global jsx>{`
                    body{
                        background:black;
                    }
                `}</style>
            </div>
        )
    }
}
export default Hello ;