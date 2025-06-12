import React from 'react';

function Nav(props){
    const mnu_li= []
    for (let i = 0; i<props.menus.length; i++){
        let t = props.menus[i];
        mnu_li.push(<li key={t.id}><a href={'/menu' + t.id} id={t.id} onClick={e => {
            e.preventDefault();
            props.onChangeMode(e.target.id);
        }}>{t.menuName}</a></li>);
    }
    
    return(
    <nav>
        <ul>
        {mnu_li}
        </ul>
    </nav>
    )
}

export default Nav