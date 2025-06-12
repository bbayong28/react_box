import React from 'react';

function Main() {  
    const numA = 30;
    const numB = 1;

    const strA = "리액트 첫 시작";
    const strB = "25.06.11";

    return (
        <main>
            <h2>{numA + numB} 살</h2>
            <h2>{strA + strB}</h2>
        </main>
    );
}

export default Main