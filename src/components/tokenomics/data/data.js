export const tokenomicData = [
  {
    text: "Team",
    count: "150,000",
    percent_part: 15,
  },
  {
    text: "Community",
    count: "140,000",
    percent_part: 14,
  },
  {
    text: "Investors",
    count: "300,000",
    percent_part: 30,
  },
  {
    text: "Marketing",
    count: "50,000",
    percent_part: 5,
  },
  {
    text: "Staking_rewards",
    count: "100,000",
    percent_part: 10,
  },
  {
    text: "Forecast_rewards",
    count: "140,000",
    percent_part: 14,
  },
  {
    text: "Other (needs)",
    count: "50,000",
    percent_part: 5,
  },
  {
    text: "Liquidity",
    count: "70,000",
    percent_part: 7,
  },
];

const getQuarter = (angle) => {
  return angle >= 0 && angle < 90
    ? "I"
    : angle >= 90 && angle < 180
    ? "II"
    : angle >= 180 && angle < 270
    ? "III"
    : "IV";
};

export const expandedData = (tokenomicData) => {
  let prev_percent = 0;
  let prev_rotate = 0;

  return tokenomicData.reduce((acc, el, index) => {
    const newAcc = [
      ...acc,
      {
        ...el,
        rotate: (360 / 100) * (prev_percent + el.percent_part),
        midLineAngle: prev_rotate + (360 / 100) * (el.percent_part / 2),
        quarter: getQuarter(prev_rotate + (360 / 100) * (el.percent_part / 2)),
      },
    ];

    prev_rotate = (360 / 100) * (prev_percent + el.percent_part);
    prev_percent += el.percent_part;

    return newAcc;
  }, []);
};
