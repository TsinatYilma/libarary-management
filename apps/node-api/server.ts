import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { handleAuth } from './routes/auth';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/library';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'Server is running!' }));
  }

  // Route /auth/* to handleAuth
  if (req.url?.startsWith('/auth')) {
    await handleAuth(req, res);
    return;
  }

  // All other routes → 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
