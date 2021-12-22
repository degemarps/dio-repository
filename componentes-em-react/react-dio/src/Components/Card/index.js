import Button from '../Button';

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        Meu primeiro Card
      </div>
      <div className="card-body">
        <Button nome='Adicionar' className='btn btn-success'/>
        <Button nome='Remover' className='btn btn-danger'/>
        <p>0</p>
      </div>
    </div>
  );
}

export default Card;