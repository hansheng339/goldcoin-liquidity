import { getConnection, getWallet } from "./utils/solana";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const connection = getConnection();
  const wallet = getWallet();

  console.log("💧 Jalankan proses swap → liquidity...");
  console.log(`🪙 Ambil fee dari ${process.env.SWAP_FEE_SOURCE}`);
  console.log("🔁 Swap USDC ke GC...");
  console.log("🏦 Tambahkan LP ke Orca pool: GC / USDC");
  console.log("✅ Proses selesai.");
}

main().catch(console.error);
