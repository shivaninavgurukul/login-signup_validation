// // /pages/api/signup.js
// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, password } = req.body;

//     const usersFilePath = path.join(process.cwd(), 'data', 'users.json');
//     const usersData = fs.readFileSync(usersFilePath, 'utf-8');
//     const users = JSON.parse(usersData);

//     const existingUser = users.find(user => user.email === email);
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     users.push({ name, email, password });
//     fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 3));

//     return res.status(200).json({ message: 'Signup successful' });
//   } else {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }


import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Basic input validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // File path to users.json
      const usersFilePath = path.join(process.cwd(), 'data', 'users.json');

      // Ensure file exists; if not, create it with an empty array
      if (!fs.existsSync(usersFilePath)) {
        fs.writeFileSync(usersFilePath, JSON.stringify([], null, 2));
      }

      // Read and parse users.json
      const usersData = fs.readFileSync(usersFilePath, 'utf-8');
      const users = JSON.parse(usersData || '[]');

      // Check if email already exists
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(password, 10);

      // Add new user
      users.push({ name, email, password: hashedPassword });
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

      return res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Error handling signup:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
