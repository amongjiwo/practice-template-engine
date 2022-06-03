const phones = [
  {
    id: 1,
    brand: "iPhone 13 Pro",
    description: `Ini adalah iphone 13 pro.`,
    approved: true
  },
  {
    id: 2,
    brand: "Asus Rog Phone 5s Pro",
    description: `Ini adalah asus rog phone 5s pro.`,
    approved: false
  },
  {
    id: 3,
    brand: "Samsung Galaxy S22 Ultra",
    description: "Ini adalah samsung galaxy s22 ultra",
    approved: true
  }
 ];
 
 module.exports = {
  findAll: () => Promise.resolve(phones),
  create: ({ brand, description }) => {
    const id = phones[phones.length - 1].id + 1;
    const phone = { id, brand, description };
    phones.push(phone);
    return Promise.resolve(phone);
  }
 };