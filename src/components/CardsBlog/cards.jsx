import style from './cards.module.css'

export default function Cards(){
    return (
        <div className={style.flex}>
            <div className={style.top}>
                <p>600 x 400</p>
            </div>

            <div className={style.buttom}>
                <h3>Titolo del Post</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum ea minus exercitationem dolores magni, autem dolore quam vero inventore quos nemo beatae esse animi, earum neque quod? Error, iusto.</p>
                <button>LEGGI DI PIU</button>
            </div>
        
        </div>
    );
}