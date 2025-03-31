
import './componentsStyle/SecondTitle.css';

export default function SecondTitle({ text1, text2 }) {
    return (
        <div className='light-bg'>
            <div className='wrapper'>
                <h2 className='second-title'>
                    <span className='main-text'>{text1} </span>
                    <span className='second-text'>{text2}</span>
                </h2>

            </div>
        </div>
    );
}
