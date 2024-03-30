const { hashPasswords } = require("../../../utils/utils");

const userData = [
  {
    username: "butter_bridge",
    name: "Butter Bridge",
    password: "testpassword",
    email: "butterbridge@test.com",
    phone: "07777777777",
    user_type: "admin",
  },
  {
    username: "happyamy",
    name: "Amy Happy",
    password: "happyamypw",
    email: "amy-happy@test.com",
    phone: "07123456789",
    house_number: "23",
    street: "Mia Loaf",
    city: "London",
    postcode: "RM3 0BE",
    country: "United Kingdom",
    user_type: "customer",
    utr: null,
  },
  {
    username: "jessjelly",
    name: "Jess Jelly",
    password: "jessyjellypw",
    email: "jessjelly@test.com",
    phone: "07987654321",
    house_number: "32",
    street: "Mia Bread",
    city: "London",
    postcode: "SE1 0AA",
    country: "United Kingdom",
    user_type: "customer",
    utr: null,
  },
  {
    username: "duncan98",
    name: "Liam Duncan",
    password: "duncanliam98",
    email: "duncanliam@test.com",
    phone: "07987656789",
    house_number: "98",
    street: "Borough Road",
    city: "London",
    postcode: "SE12 0AA",
    country: "United Kingdom",
    user_type: "customer",
    utr: null,
  },
  {
    username: "stevens",
    name: "Steve Stvens",
    password: "steveStevenspw",
    email: "stevestevens@test.com",
    phone: "07123454321",
    house_number: "41",
    street: "Electric House",
    city: "London",
    postcode: "CR0 1LB",
    country: "United Kingdom",
    user_type: "shopkeeper",
    utr: "12345678901",
  },
  {
    username: "grahamcracker",
    name: "Oscar Graham",
    password: "oscarGrahampw",
    email: "oscargraham@test.com",
    phone: "07987654567",
    house_number: "788",
    street: "Romford Road",
    city: "London",
    postcode: "IG8 7BE",
    country: "United Kingdom",
    user_type: "shopkeeper",
    utr: "23456789012",
  },
];

async function initializeUserData() {
  const hashedUserData = await hashPasswords(userData);
  return hashedUserData
}

module.exports =  initializeUserData
