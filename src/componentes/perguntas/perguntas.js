import React, { useState } from 'react';
import Style from './perguntas.module.scss';
import star from '../imagens/star.svg';
import plus from '../imagens/plus.svg'
import minus from '../imagens/minus.svg'
import desktop from '../imagens/desktop.svg'
import mobile from '../imagens/mobile.svg'


export default function Perguntas (){

    


    const [perguntas] = useState([
        { id: 1, pergunta: ' What is Frontend Mentor, and how will it help me? ', resposta: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. Its suitable for all levels and ideal for portfolio building.'},
        { id: 2, pergunta: 'Is Frontend Mentor free?', resposta: ' Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels. '},
        { id: 3, pergunta: ' Can I use Frontend Mentor projects in my portfolio? ', resposta: ' Yes, you can use projects completed on Frontend Mentor in your portfolio. Its an excellent way to showcase your skills to potential employers! '},
        { id: 4, pergunta: ' How can I get help if Im stuck on a Frontend Mentor challenge?', resposta: ' The best place to get help is inside Frontend Mentors Discord community. Theres a help channel where you can ask questions and seek support from other community members.'}
    ])

    let [atual, setatual] = useState(0);
    
     const troca = (id) => {
        if (atual === id) {
            setatual(null);
        } else {
            setatual(id);
        }
    };


    const icones = (id) => {
        if (atual === id) {
            return (
                <img
                    onClick={() => troca(id)}
                    src={minus}
                    alt='Collapse'
                    className={Style.icon}
                />
            );
        } else {
            return (
                <img
                    onClick={() => troca(id)}
                    src={plus}
                    alt='Expand'
                    className={Style.icon}
                />
            );
        }
    };

    return (
        <div className={Style.main} >
            <img src={desktop} alt='' className={Style.desktop}/>
            <img src={mobile} alt='' className={Style.mobile}/>
            
            

            <div className={Style.container} >
                <div className={Style.nome}> <img src={star} alt=''/><h1 className={Style.titulo}>FAQs</h1> </div>
                   
                    {perguntas.map(i =>
                    <div className={Style.f} key={i.id}>
                        <h2 className={Style.perguntas}>{i.pergunta}  {icones(i.id)}  </h2>
                        <p className={Style.resposta} style={{ display: atual === i.id ? 'block' : 'none'}}>{i.resposta} </p>
                    </div>
                    )}


            </div>
        </div>
    )
}