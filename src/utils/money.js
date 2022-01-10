const money = (value, currency, digitalPlaces = 2) => {
  let number = value;
  if (typeof number === 'string') number = parseFloat(number.replace(',', '.'));

  if (isNaN(number) || !!!number) 
  return `${currency} ${parseFloat('0').toLocaleString('pt-BR', {
    maximumFractionDigits: digitalPlaces,
    minimumFractionDigits: digitalPlaces
  })}`;

  return `${currency} ${number.toLocaleString('pt-BR', {
    maximumFractionDigits: digitalPlaces,
    minimumFractionDigits: digitalPlaces
  })}`;
};

export default money;
