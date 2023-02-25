import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config();

const supabaseUrl = "https://upmnhglpalihpsxwhosa.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function resetAccount() {
  let { data: users, error } = await supabase
    .from("users")
    .select("*")
    .order("networth", { ascending: false })
    .limit(21);

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    let { data: portfolio, error } = await supabase
      .from("portfolio")
      .select("*")
      .eq("userId", `${user.userId}`);

    const userNetworth = portfolio.reduce(
      (previousValue, currentCoin) => previousValue + currentCoin.amount,
      0
    );

    if (user.networth === userNetworth) {
      console.log("networth is correct...");
    } else {
      console.log("update networth....");
      const { data: updateNetworth, error: updateErr } = await supabase
        .from("users")
        .update({ networth: parseFloat(userNetworth) })
        .eq("userId", `${user.userId}`);
    }
    console.log(".........................");
    console.log(user.username, "userNetworth...", userNetworth);

    // reset balance
    // const {
    //   // data,
    //   error: deletePortfolio
    // } = await supabase.from("portfolio").delete().eq("userId", `${user.userId}`);

    // const {
    //   // data: addedData,
    //   error: addVirtualUsdErr
    // } = await supabase.from("portfolio").insert([
    //   {
    //     userId: user.userId,
    //     coinId: "USD",
    //     coinName: "Virtual USD",
    //     image: "https://img.icons8.com/fluency/96/000000/us-dollar-circled.png",
    //     amount: 100000,
    //     coinSymbol: "vusd"
    //   }
    // ]);
  }
}
resetAccount();
