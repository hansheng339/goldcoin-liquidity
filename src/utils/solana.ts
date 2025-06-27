import { Connection, Keypair } from "@solana/web3.js";
import fs from "fs";

export function getConnection() {
  return new Connection(process.env.RPC_URL!, "confirmed");
}

export function getWallet(): Keypair {
  const raw = fs.readFileSync(process.env.WALLET_PATH!, "utf-8");
  return Keypair.fromSecretKey(Buffer.from(JSON.parse(raw)));
}
