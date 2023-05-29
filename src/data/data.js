export const Clients = [
    {
      id: 1,
      first_name: "client11",
      last_name: "client12",
      balance: 3000,
      allowedAmount: 1000,
      negative: false
    },
    {
      id: 2,
      first_name: "client21",
      last_name: "client22",
      balance: 500,
      allowedAmount: 1000,
      negative: false
    },
    {
      id: 3,
      first_name: "client31",
      last_name: "client32",
      balance: 700,
      allowedAmount: 1000,
      negative: true
    }
  ],
  Cards = [
    { id: 10, idclient: 1, validity: new Date("2024-01-01"), password: 1234 },
    { id: 20, idclient: 2, validity: new Date("2023-01-01"), password: 1234 },
    { id: 30, idclient: 3, validity: new Date("2023-07-01"), password: 1234 }
  ];
