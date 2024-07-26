import express from 'express';
import cors from 'cors';
import connectDB from './src/config/database.config.js';
import authRoutes from './src/routes/auth.route.js';
import projectRoutes from './src/routes/project.route.js';
import taskRoutes from './src/routes/task.route.js';
import { EXPRESS_PORT_NO } from './src/constants/common.constant.js';
import corsConfig from './src/config/cors.config.js';

connectDB();

const app = express();

app.use(cors(corsConfig));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

app.listen(EXPRESS_PORT_NO, () => {
  console.log('app is listening on', EXPRESS_PORT_NO);
});

export default app;
