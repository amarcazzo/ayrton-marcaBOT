import { Context } from "telegraf";
import { Update } from "typegram";

export const onText = (ctx: Context<Update>) => {
  // Using context shortcut
  ctx.reply(`Hello ${ctx.state.role}`);
};

export const onQuit = (ctx: Context<Update>) => {
  // Using context shortcut
  ctx.leaveChat();
};

export const onCallbackQuery = (ctx: Context<Update>) => {
  // Using context shortcut
  ctx.answerCbQuery();
};

export const onInlineQuery = (ctx: Context<Update>) => {
  const result: any[] = [];

  // Using context shortcut
  ctx.answerInlineQuery(result);
};
