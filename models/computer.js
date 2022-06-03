const computers = [
  {
    id: 1,
    brand: "MacBook Pro 14",
    description: `Ini adalah macbook pro 14.`,
    approved: true
  },
  {
    id: 2,
    brand: "Asus Rog Zephyrus",
    description: `Ini adalah asus rog zephyrus.`,
    approved: true
  },
  {
    id: 3,
    brand: "Lenovo Legion Slim 7",
    description: "Ini adalah lenovo legion slim 7",
    approved: false
  }
 ];
 
 module.exports = {
  findAll: () => Promise.resolve(computers),
  create: ({ brand, description }) => {
    const id = computers[computers.length - 1].id + 1;
    const computer = { id, brand, description };
    computers.push(computer);
    return Promise.resolve(computer);
  }
 };