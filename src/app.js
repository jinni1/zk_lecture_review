import { UltraHonkBackend } from '@aztec/bb.js';
import { Noir } from '@noir-lang/noir_js';
import circuit from "./target/circuit.json" assert { type: 'json' };

import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from './db.js';
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

AppDataSource.initialize()
  .then(() => {
    console.log('DB 연결 및 테이블 생성 완료');
  })
  .catch((error) => {
    console.error('DB 연결 실패:', error);
  });

  // api
app.use("/api/students", studentRoutes);

/*
try {
    const noir = new Noir(circuit);
    const backend = new UltraHonkBackend(circuit.bytecode);


   
    // 입력값을 넣어 회로를 실행, witness 생성 
    const { withness } = await noir.execute({ age });

    // 증명 생성
    const proof = await backend.generateProof(withness);

    // 증명 검증
    const isValid = await backend.verifyProof(proof);
} catch {

}
*/