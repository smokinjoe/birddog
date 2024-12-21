import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import { initializeDatabase } from "./datastore/initializeDatabase";
import { errorHandler } from "./middlewares/errorHandler";
import apiRouter from "./routes/v1/api";
import apiV2Router from "./routes/v2/api";
import resumeRouter from "./routes/v1/resume";

dotenv.config();
initializeDatabase();

if (!process.env.PORT) {
  console.log(`No port value specified.`);
}

const PORT = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 * Middlewares
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

/**
 * routes
 */

app.use("/api/v1", apiRouter);
app.use("/api/resume", resumeRouter);

app.use("/api/v2", apiV2Router);

/**
 * Error handling
 */
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
