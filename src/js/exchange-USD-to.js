export default function exchangeUSDto(amountUSD, convertTo) {
  return (parseInt(amountUSD) * convertTo).toFixed(2);
}