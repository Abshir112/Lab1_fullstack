import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
//import { recipes } from './recipeStore.js';
import {getAllRecipes, getRecipeByTitle, createRecipe, updateRecipeById, deleteRecipeById} from './models/recipe.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new Express application
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

// 2. Connect to the database
mongoose.connect(process.env.MONGODB_URI, {})
.then(() => { console.log('Connected to the database') })
.catch((error) => { console.log('Failed to connect to the database', error) });

const PORT = process.env.PORT || 3000;





app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    });