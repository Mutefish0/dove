import { config } from "https://deno.land/x/dotenv/mod.ts";

const { BARK_HOOK } = config({
  path: new URL(".env", import.meta.url).pathname,
});

export async function doveSend(copyText: string, title: string = "🕊 飞鸽传书") {
  copyText = encodeURIComponent(copyText);
  await fetch(
    `${BARK_HOOK}/${title}/${copyText}?autoCopy=1&copy=${copyText}&sound=birdsong`
  );
}

const [text] = Deno.args;

doveSend(text);
