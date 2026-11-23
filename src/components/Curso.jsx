import '../index.css';

function Curso({ texto, img ,titulo}) {
    return (
        <div className='curso-flex'>
            <div className='curso-text'>
                <h1 className='curso-titu'>{titulo}</h1>
                <p className='curso-desc'>{texto}</p>
            </div>
            <div className='curso-img'><img src={img} className='image-curso'></img></div>
        </div>
    );
}
export default Curso;