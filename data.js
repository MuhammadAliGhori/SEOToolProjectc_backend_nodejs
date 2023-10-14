const categories = {
  adsense: {
    subcategories: [
      {
        id: 1,
        service: "Ad Types",
        accountPrice: "$10-$100",
        minMax: "1000-100000",
        averageTime: "1-7 days",
        description: "Description for Ad Types subcategory.",
      },
      {
        id: 2,
        service: "Payment Methods",
        accountPrice: "$5-$50",
        minMax: "500-50000",
        averageTime: "1-3 days",
        description: "Description for Payment Methods subcategory.",
      },
    ],
  },
  youtube: {
    subcategories: [
      {
        id: 1,
        service: "Video Upload",
        accountPrice: "$20-$200",
        minMax: "2000-200000",
        averageTime: "2-10 days",
        description: "Description for Video Upload subcategory.",
      },
      {
        id: 2,
        service: "Monetization",
        accountPrice: "$15-$150",
        minMax: "1500-150000",
        averageTime: "1-5 days",
        description: "Description for Monetization subcategory.",
      },
    ],
  },
};

module.exports = {
  categories,
};
