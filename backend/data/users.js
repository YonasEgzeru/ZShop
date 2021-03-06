import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Elda',
    email: 'elda@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rakeb',
    email: 'rakeb@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
