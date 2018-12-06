import React,{ Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import { Button,Nav, NavItem,Table ,Label } from 'react-bootstrap';

import Header from './components/Header'
import './css/blockInfo.less'
import 'bootstrap/dist/css/bootstrap.css'

function handleSelect (selectedKey) {
  console.log(`selected ${selectedKey}`)
  if(selectedKey == 2){
    console.log('2222')
  }else{
    console.log('1111')
  }
}
const navInstance = (
  <Nav bsStyle="pills"  activeKey={1} onSelect={handleSelect}>
    <NavItem  href="#" eventKey={1}>区块</NavItem>
    <NavItem  href="#" eventKey={2}>交易</NavItem>
  </Nav>
)

class BlockInfo extends Component{
  render(){
    return(
      <div>
        <style jsx>{`
        ul.nav-pills li a{
          border-radius: 4px;
          position: relative;
          display: block;
          padding: 10px 15px;
        }
        `}
        </style>
        <Header>
          <p className="example">区块浏览器</p>
          <div className="searchCon">
            <FontAwesomeIcon icon="search" style={{"color":"white"}} />
            <input type="search" placeholder="请输入搜索条件" />
          </div>
        </Header>
        <div className="blockCon container" style={{marginTop:'50px',background: 'white', padding: '2%'}}>
          {/*  nav option   */}
          { navInstance }
          <div className="data-info">
            <Table hover>
              <thead>
              <tr>
                <th>高度</th>
                <th>年龄</th>
                <th>交易</th>
                <th>大小</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              </tbody>
            </Table>
          </div>
          <div className='getmore' style={{'textAlign': 'center','fontSize': '20px'}}>
            <a href="#">查看更多</a>
          </div>
        </div>
      </div>

    )
  }
}
export default BlockInfo;
