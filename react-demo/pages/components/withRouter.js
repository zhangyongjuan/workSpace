import {withRouter} from 'next/router'

const ActiveLink = ({ children,router,href })=>{
    const style = {
        marginRight:10,
        color:router.pathname == href ? 'red':'black'
    }
    const handleClick = (e)=>{
        e.preventDefault();
        router.push(href);
    }
    return(
        <div>
            <a href={href} onClick={handleClick} style={style}></a>
        </div>
    )
}
export default withRouter(ActiveLink)
