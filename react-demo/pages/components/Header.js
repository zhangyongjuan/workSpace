import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: rgb(21, 35, 67);
    p{
      font-size: 30px;
      color: white;
      line-height: 70px;
      margin-left: 10%;
      display: inline-block;
    }
    div.searchCon{
      display: inline-block;
      right: 10%;
      top: 20px;
      position: absolute;
      
      input{
        border: none;
        line-height: 70px;
        height: 30px;
        width: 300px;
        color: white;
        background: none;
        padding-left: 6px;
      }
      input:focus{
        outline: none;
        border-bottom: 1px gray solid;
      }
    }
`
export default Header;
