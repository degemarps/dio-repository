import Button from '../Button';
import { useState } from 'react';

const Card = () => {

  const [valor, setValor] = useState(0);

  function Adicionar() {
    setValor(valor + 1);
  }

  function Remover() {
    setValor(valor - 1);
  }

  return (
    <div className="card">
      <div className="card-header">
        Meu primeiro Card
      </div>
      <div className="card-body">
        <Button
          nome='Adicionar'
          className='btn btn-success'
          onClick={Adicionar}
        />
        <Button
          nome='Remover'
          className='btn btn-danger'
          onClick={Remover}
        />
        <p>{valor}</p>
      </div>
    </div>
  );
}

export default Card;