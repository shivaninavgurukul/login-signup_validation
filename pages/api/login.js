import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    const usersFilePath = path.join(process.cwd(), 'data', 'users.json');
    const usersData = fs.readFileSync(usersFilePath, 'utf-8');
    const users = JSON.parse(usersData);

    const user = users.find(user => user.email === email && user.name === name);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
