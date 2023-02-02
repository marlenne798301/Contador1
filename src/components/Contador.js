import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Contador() {

    const [contador,setContador] = useState(0);

    const sumar = () => {
        let contador1 = contador;

        contador1++;

        setContador(contador1);
    }

    const restar = () => {
        let contador1 = contador;

        contador1--;

        setContador(contador1)
    }

    const resetear = () => {
        let  contador1 = contador;

        contador1 = 0;

        setContador(contador1);
    }

    return (
        <div>
            <p>Contador:{ contador }</p>
            <p>
                <Button variant="primary" onClick={sumar}>+</Button>{' '}
                <Button variant="danger" onClick={restar}>-</Button>{' '}
                <Button variant="success" onClick={resetear}>Inicializar</Button>{' '}
            </p>
        </div>

    );
}

export default Contador;