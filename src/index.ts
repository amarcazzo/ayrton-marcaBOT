import { config } from "dotenv";
import { Telegraf } from "telegraf";
import { onCallbackQuery, onQuit, onText, onInlineQuery } from "./lib/bot";

config();

const bot = new Telegraf(process.env.BOT_TOKEN || "");

bot.command("quit", onQuit);

bot.command("test", (ctx) => {
  ctx.reply("smiley");
});

bot.on("text", onText);
bot.on("callback_query", onCallbackQuery);
bot.on("inline_query", onInlineQuery);

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
