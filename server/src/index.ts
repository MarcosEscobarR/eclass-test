/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {AppDataSource} from "./data-source";
import History from './history'
import Favorites from "./favorites";
import Playlist from "./playlist";

AppDataSource.initialize()
    .then(() => {
        console.log("Database initialized")
    }).catch(e => console.log(e));

dotenv.config();

/**
 * App Variables
 */
const PORT: number = 5000

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors({
    origin: ["http://localhost:3000"]
}));
app.use(express.json());

app.use('/api/history', History)
app.use('/api/favorites', Favorites)
app.use('/api/playlists', Playlist)

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
