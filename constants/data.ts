const recentBeneficiaries = [
    { initials: "AA", name: "Adigun Ayoola", accountNumber: "", bank: "" },
    { initials: "LA", name: "Larry Ayoola", accountNumber: "", bank: "" },
    { initials: "RA", name: "Raja Ayoola", accountNumber: "", bank: "" },
    { initials: "OP", name: "Ololade Para", accountNumber: "", bank: "" },
    { initials: "DA", name: "Dele Ajah", accountNumber: "", bank: "" },
];

const beneficiaries = [
    { initials: "AA", name: "Adigun Ayoola", accountNumber: "103456798", bank: "access bank" },
    { initials: "PO", name: "Praise Ololade", accountNumber: "103456798", bank: "access bank" },
    { initials: "JA", name: "Jamiu Ajah", accountNumber: "103456798", bank: "access bank" },
    { initials: "LP", name: "Lekan Para", accountNumber: "103456798", bank: "access bank" },
    { initials: "LL", name: "Lanre Layi", accountNumber: "103456798", bank: "access bank" },
    { initials: "BI", name: "Bakare Isabella", accountNumber: "103456798", bank: "access bank" },
    { initials: "KL", name: "Kehinde Lami", accountNumber: "103456798", bank: "access bank" },
    { initials: "ZO", name: "Zara Omolade", accountNumber: "103456798", bank: "access bank" },
    { initials: "HU", name: "Henry Umu", accountNumber: "103456798", bank: "access bank" },
];

const transactions = [
    {
        title: "29 May 2024",
        data: [
            { type: "inflow", description: "Transfer from Malik Ajao", amount: "+₦20,000.00", time: "8:20PM" },
            { type: "outflow", description: "Transfer to Lawal Ayodeji Rilwan", amount: "+₦2,500,000.00", time: "8:20PM" },
            { type: "inflow", description: "Transfer from Ajao Ventures", amount: "+₦3,200,000.00", time: "8:20PM" },
            { type: "inflow", description: "Transfer from Bukky Enterprises", amount: "+₦1,249,500.00", time: "8:20PM" },
        ],
    },
    {
        title: "30 May 2024",
        data: [
            { type: "inflow", description: "Transfer from Thomas Balogun", amount: "+₦800,000.00", time: "8:20PM" },
            { type: "outflow", description: "Transfer to Yemi Bakare", amount: "+₦20,000.00", time: "8:20PM" },
            { type: "outflow", description: "Transfer to Victor James", amount: "+₦7,600.00", time: "8:20PM" },
            { type: "outflow", description: "Airtime Top up MTN - 23481844909401", amount: "+₦10,000.00", time: "8:20PM" },
        ],
    },
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export { recentBeneficiaries, beneficiaries, transactions, months };
