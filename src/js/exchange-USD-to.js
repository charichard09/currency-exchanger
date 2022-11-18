export default function exchangeUSDto(amountUSD, convertTo) {
  return (amountUSD * convertTo).toFixed(2);
}