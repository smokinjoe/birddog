import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import fs from "fs";

dotenv.config();

if (!process.env.PORT) {
  console.log(`No port value specified.`);
}

const PORT = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/resume", (req, res) => {
  try {
    const data = fs.readFileSync("./src/json/resume.json", "utf8");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(JSON.parse(data), null, 2));
  } catch (e) {
    console.error(e);
  }
});
