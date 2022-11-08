import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="drivecar">
      <img src={img} alt="imagem" className="foto" />
      <article className="driverData">
        <h4 className="driverData">{name}</h4>
        <Rating className="driverData">{rating}</Rating>
        <p className="driverData">
          {car.model} - {car.licensePlate}
        </p>
      </article>
    </div>
  );
}

export default DriverCard;
