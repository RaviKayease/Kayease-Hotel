export const CURRENCY = {
  code: "INR",
  symbol: "₹",
  name: "Indian Rupee",
  locale: "en-IN",
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat(CURRENCY.locale, {
    style: "currency",
    currency: CURRENCY.code,
    maximumFractionDigits: 0,
  }).format(amount);
};
