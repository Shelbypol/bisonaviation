import path from 'path'
import express from 'express'
import colors from 'colors'
import morgan from 'morgan';
import dotenv from 'dotenv'
import { notFound, errHandler } from './middleware/errorMiddleware.js'
import connectDB from "./config/db.js";
import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import wishListRoutes from './routes/wishListRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config();

connectDB();

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json());

app.get('/', (req,res) => {
    res.send('API is running...')
} );

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/wishlist', wishListRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID),
);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);

app.use(errHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));