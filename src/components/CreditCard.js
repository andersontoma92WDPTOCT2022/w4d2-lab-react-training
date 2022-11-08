import visa from '../assets/images/visa.png';

function CreditCard({
  color,
  bgColor,
  owner,
  bank,
  expirationYear,
  expirationMonth,
  number,
  type,
}) {
  return (
    <div className="cartaoCredito">
      <div className="divBandeira">
        <img src={visa} alt="icone" className="bandeira" />
      </div>

      <p className="cartaoNumero">•••• •••• •••• {number.slice(12)}</p>
      <div className="cartaoDados">
        <p>
          Expires {expirationMonth}/{expirationYear} {bank}
        </p>
        <p>{owner} </p>
      </div>
    </div>
  );
}
export default CreditCard;
