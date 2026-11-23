import { NavLink, Routes, Route } from "react-router";
import Curso from "../components/Curso.jsx";
import "../index.css";

function Dashboard(){
    return(
        <div className="curso-content">
            <Curso
                titulo="Informática"
                texto="Curso de Sistemas para Internet, que desenvolve habilidades
                para criar páginas web entre outras habilidades"
                img="https://images.emojiterra.com/openmoji/v13.1/512px/1f468-1f4bb.png"
            />
            <Curso
                titulo="Mecatrônica"
                texto="Curso de mecatrônica, que ensina as habilidades para mecher 
                com componentes eletrônicos e programação voltada para eletrônicos"
                img="https://static.wikia.nocookie.net/disney/images/2/2b/Wall-E.png/revision/latest/scale-to-width-down/1200?cb=20171030202241&path-prefix=pt-br"
            />
            <Curso
                titulo="Evento"
                texto="Curso para capacitar o aluno na organização de eventos e 
                práticas de administração"
                img="https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/1024px/1f389.png"
            />
        </div>
    );
}
export default Dashboard;