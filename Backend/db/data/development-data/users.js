
const { hashPasswords } = require("../../../utils/utils");

const userdatadummy = [
    {
      username: "jsmith21",
      name: "John Smith",
      password: "9#G@5qZb2!",
      email: "john.smith@outlook.com",
      phone: "07123456789",
      house_number: "1",
      street: "Main Street",
      city: "London",
      postcode: "SW1A 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "emilyjohnson",
      name: "Emily Johnson",
      password: "8*F1r3w@ll9",
      email: "emily.johnson@outlook.com",
      phone: "07123456780",
      house_number: "2",
      street: "High Street",
      city: "Manchester",
      postcode: "M1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "emmab756",
      name: "Emma Brown",
      password: "!P@55C0d3$",
      email: "emma.brown@outlook.com",
      phone: "07123456781",
      house_number: "3",
      street: "Park Avenue",
      city: "Birmingham",
      postcode: "B1 1AA",
      country: "United Kingdom",
      user_type: "customer",
     
    },
    {
      username: "mw456216",
      name: "Michael Wilson",
      password: "J$#kL9&2p@!",
      email: "michael.wilson@outlook.com",
      phone: "07123456782",
      house_number: "4",
      street: "Broadway",
      city: "Glasgow",
      postcode: "G1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "staylor12",
      name: "Sophia Taylor",
      password: "Tr0ub4dor&3",
      email: "sophia.taylor@outlook.com",
      phone: "07123456783",
      house_number: "5",
      street: "Victoria Road",
      city: "Liverpool",
      postcode: "L1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "davwies145",
      name: "William Davies",
      password: "7dR!ve_#M3CraZY",
      email: "william.davies@outlook.com",
      phone: "07123456784",
      house_number: "6",
      street: "Church Street",
      city: "Leeds",
      postcode: "LS1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "olivia7evans",
      name: "Olivia Evans",
      password: "B3stP@ssw0rd3v3r!",
      email: "olivia.evans@outlook.com",
      phone: "07123456785",
      house_number: "7",
      street: "Queen's Road",
      city: "Sheffield",
      postcode: "S1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "daniel70456",
      name: "Daniel Clark",
      password: "P@ssC0d3!2024",
      email: "daniel.clark@outlook.com",
      phone: "07123456786",
      house_number: "8",
      street: "King Street",
      city: "Cardiff",
      postcode: "CF1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "isabellaz74",
      name: "Isabella Martinez",
      password: "Fr13nds4L1f3!",
      email: "isabella.martinez@outlook.com",
      phone: "07123456787",
      house_number: "9",
      street: "Market Street",
      city: "Belfast",
      postcode: "BT1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "cartere756",
      name: "Ethan Carter",
      password: "5t@yS@f3&Secur3",
      email: "ethan.carter@outlook.com",
      phone: "07123456788",
      house_number: "10",
      street: "Highland Road",
      city: "Edinburgh",
      postcode: "EH1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "phillipsava",
      name: "Ava Phillips",
      password: "#S3cureP@ssW0rd",
      email: "ava.phillips@outlook.com",
      phone: "07123456789",
      house_number: "11",
      street: "Ocean Avenue",
      city: "Newcastle",
      postcode: "NE1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "jamesrodriguez10",
      name: "James Rodriguez",
      password: "$uperP@ssw0rd!",
      email: "james.rodriguez@outlook.com",
      phone: "07123456790",
      house_number: "12",
      street: "Sunset Boulevard",
      city: "Brighton",
      postcode: "BN1 1AA",
      country: "United Kingdom",
      user_type: "customer",
      
    },
    {
      username: "fostermia45",
      name: "Mia Foster",
      password: "C0mp1exP@55w0rd!",
      email: "mia.foster@outlook.com",
      phone: "07123456791",
      house_number: "13",
      street: "Park Lane",
      city: "Leicester",
      postcode: "LE1 1AA",
      country: "United Kingdom",
      user_type: "shopkeeper",
      utr : "8456541464",
    },
    {
      username: "alexander66",
      name: "Alexander Bailey",
      password: "P@ssw0rd123$ecur3",
      email: "alexander.bailey@outlook.com",
      phone: "07123456792",
      house_number: "14",
      street: "Grove Street",
      city: "Oxford",
      postcode: "OX1 1AA",
      country: "United Kingdom",
      user_type: "shopkeeper",
      utr : "8456541467",
    },
    {
      username: "redd36",
      name: "Charlotte Reed",
      password: "$4f3&$0undP@55",
      email: "charlotte.reed@outlook.com",
      phone: "07123456793",
      house_number: "15",
      street: "Hillside Avenue",
      city: "Cambridge",
      postcode: "CB1 1AA",
      country: "United Kingdom",
      user_type: "shopkeeper",
      utr : "8456541415",
    },
    {
      username: "wrightB478",
      name: "Benjamin Wright",
      password: "#F0rt1f13dP@55",
      email: "benjamin.wright@outlook.com",
      phone: "07123456794",
      house_number: "16",
      street: "Riverside Drive",
      city: "Nottingham",
      postcode: "NG1 1AA",
      country: "United Kingdom",
      user_type: "shopkeeper",
      utr : "8456541469",
    },
    {
      username: "amelia49",
      name: "Amelia Harris",
      password: "3ncrypT1on#K3y",
      email: "amelia.harris@outlook.com",
      phone: "07123456795",
      house_number: "17",
      street: "Mill Road",
      city: "Southampton",
      postcode: "SO1 1AA",
      country: "United Kingdom",
      user_type: "shopkeeper",
      utr : "8456541795",
    },
    {
      username: "admin",
      name: "John David",
      password: "David5078",
      email: "john.david@outlook.com",
      phone: "07123456745",
      user_type: "admin",
    }
  ];

async function initializeUserData() {
  const hashedUserData = await hashPasswords(userData);
  return hashedUserData;
}

module.exports = initializeUserData;
