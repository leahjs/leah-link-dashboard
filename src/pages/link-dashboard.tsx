// Build: v=260519215700 - DO NOT CACHE - Messages from separate JSON file

import { useState, useMemo } from "react";
import { Copy, ExternalLink, Search, MessageSquare, Link2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import chatData from "../data/chat-data.json";

interface LinkItem {
  url: string;
  category: string;
  date: string;
}

interface ChatMessage {
  date: string;
  time: string;
  content: string;
}

const links: LinkItem[] = [
  { url: "https://www.instagram.com/cozygirlpdf?igsh=dmVubXF3Mnc0YzN6&utm_source=ig_contact_invite", category: "instagram", date: "7/21/25" },
  { url: "https://www.instagram.com/blackgirlrebirth?igsh=OGI5YzMxeGd3c285", category: "instagram", date: "8/6/25" },
  { url: "https://www.instagram.com/shebuiltinsecret?igsh=c21tcm5hbXdyOXcz", category: "instagram", date: "8/8/25" },
  { url: "https://www.instagram.com/aiglamceo?igsh=MXFobnB6em5iYmtsMQ==", category: "instagram", date: "8/8/25" },
  { url: "https://www.instagram.com/zariableudigital?igsh=OGRqcmw3M2Z6MW96", category: "instagram", date: "8/8/25" },
  { url: "https://www.instagram.com/reel/CplIyLwMbKu/?igsh=eG9xY2dvMHk2bGZp", category: "instagram", date: "11/7/25" },
  { url: "https://www.instagram.com/reel/DQ98KZlkjD6/?igsh=MTJidjBwdm81NjJjaw==", category: "instagram", date: "4/14/26" },
  { url: "https://www.instagram.com/reel/DK3TaCzsOBv/?igsh=MXU2dTdhODNrNmdmeA==", category: "instagram", date: "5/9/26" },
  { url: "https://www.instagram.com/p/DX4tFUqiQVZ/?igsh=dXk3eDh0Z3hzMDJu", category: "instagram", date: "4/12/26" },
  { url: "https://www.instagram.com/p/DXV1WaNE9QJ/?igsh=MXhoNTUxb3FkN2F0eA==", category: "instagram", date: "4/12/26" },
  { url: "https://www.instagram.com/p/DXhMq-QjMl8/?img_index=1&igsh=dGV3d2NnNXFvOTMz", category: "instagram", date: "4/12/26" },
  { url: "https://www.instagram.com/p/DXq73jkDOyt/?img_index=11&igsh=MXJiNzdleHpvZWZzaA==", category: "instagram", date: "4/12/26" },
  { url: "https://www.instagram.com/p/DXzlBMsEadV/?igsh=MXQ3ajUwdHJmazQ5cw==", category: "instagram", date: "4/12/26" },
  { url: "https://www.instagram.com/reel/DX14_SUuErL/?igsh=MWpweXI0cXgzeTM5Nw==", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DX23UuHt5T5/?igsh=MTdtNTRyancwOGc4bg==", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DX2wlGrsFJd/?igsh=MWJocnpqbzU3ajFkdQ==", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DXkr-dhgCYX/?igsh=ejQyZnZydGpnY3Q=", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DXvRtH4sQ0q/?igsh=ejRmcml4dzh1NThj", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DYALF_KDt85/?igsh=aWtpcXBpcjM3ZWRu", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DYDHp3AvyCI/?igsh=YzAyMDM1MGJkZA==", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DYDslNozTob/?igsh=aXRtOTAwbjVpcGwy", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DYGEioihGfw/?igsh=OGd4ZHFzOGFxdmpp", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DYIATkmyHt1/?igsh=YXB6bnhhNWJ6N2ho", category: "instagram", date: "4/17/26" },
  { url: "https://www.instagram.com/reel/DYQZhlQvDPr/?igsh=MXpuN2U2bWxhdGl6", category: "instagram", date: "5/19/26" },
  { url: "https://www.threads.com/@nahiddotai/post/DW3ygIIjzfV", category: "threads", date: "4/12/26" },
  { url: "https://www.threads.com/@michaelwestbrooksii", category: "threads", date: "4/12/26" },
  { url: "https://www.threads.com/@_prem.io/post/DXGDLiTAp8i", category: "threads", date: "4/14/26" },
  { url: "https://www.threads.com/@aicreatortyler/post/DYQqy_oj1Gl", category: "threads", date: "5/19/26" },
  { url: "https://www.threads.com/@lovable.dev/post/DYR6k6LDNoD", category: "threads", date: "5/19/26" },
  { url: "https://www.threads.com/@claudeai/post/DVUj8TLDA7G", category: "threads", date: "5/19/26" },
  { url: "https://www.threads.com/@kass_ai/post/DYBrQuDlZE4", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@serstaxx/post/DYJHn3MDIe_", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@swadesh_srivastava_/post/DXuI65njwow", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@dazman88/post/DXIJMepjRY0", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@vinny2020/post/DX5oIrODWvQ", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@melmandara/post/DX5O0sWCScp", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@thisisnickys/post/DYIfhWbD9bp", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@karima.digital/post/DXNnObaEXUC", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@sakeeb.rahman/post/DXnlGpSjJV4", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@ljyjeffrey/post/DXPln-biR9S", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@d4m1n.max/post/DX4O1k3mOaM", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@thegutintelligence", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@alexnguyenss/post/DXoayWGkSsb", category: "threads", date: "5/12/26" },
  { url: "https://www.threads.com/@carnage4life/post/DXnttcNiu4q", category: "threads", date: "5/12/26" },
  { url: "https://x.com/alexcooldev", category: "x", date: "4/12/26" },
  { url: "https://x.com/usewonder/status/1918048372636979404", category: "x", date: "4/12/26" },
  { url: "https://x.com/timmysofine/status/2042154015287341205?s=46", category: "x", date: "4/12/26" },
  { url: "https://x.com/kirillk_web3/status/2040104842664751422?s=46", category: "x", date: "4/17/26" },
  { url: "https://x.com/usewonder/status/2044099145997402272?s=46", category: "x", date: "4/17/26" },
  { url: "https://x.com/gregpr07/status/2046082887641104608?s=46", category: "x", date: "4/17/26" },
  { url: "https://x.com/mengto/status/2044443960433901659?s=46", category: "x", date: "4/17/26" },
  { url: "https://x.com/heygen/status/2044827454460871072?s=46", category: "x", date: "4/17/26" },
  { url: "https://x.com/heynavtoor/status/2043966500512616510?s=46", category: "x", date: "4/17/26" },
  { url: "https://x.com/telegram/status/2048098691391852966?s=46", category: "x", date: "4/17/26" },
  { url: "https://x.com/bidah/status/2053071057737679138?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/weezerosint/status/2046170666131669027?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/yuddidit/status/2049888877129707759?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/om_patel5/status/2044644677748445624?s=20", category: "x", date: "5/12/26" },
  { url: "https://x.com/claudeai/status/2045156267690213649?s=20", category: "x", date: "5/12/26" },
  { url: "https://x.com/defileo/status/2042241063612502162?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/mikefutia/status/2046283815786881378?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/alex_whedon/status/2051663268704636937?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/sarahfim/status/2053989393036145121?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/bearlyai/status/2054337338856415704?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/higgsfield/status/2053139109074657482?s=48", category: "x", date: "5/12/26" },
  { url: "https://x.com/vaibhavsisinty/status/2054139585215766694?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/intcyberdigest/status/2054166749998661659?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/itsolelehmann/status/2054649363234992401?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/lovable/status/2052418950118650358?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/nivi/status/2053484311165415887?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/_guillecasaus/status/2053426931819741457?s=46", category: "x", date: "5/12/26" },
  { url: "https://x.com/abmankendrick/status/2045788500910367006?s=12", category: "x", date: "5/12/26" },
  { url: "https://x.com/karimadigital?s=21", category: "x", date: "5/12/26" },
  { url: "https://x.com/thatguybg?s=21", category: "x", date: "5/12/26" },
  { url: "https://x.com/claudeai/status/2052060691893227611?s=48", category: "x", date: "5/12/26" },
  { url: "https://x.com/claudeai/status/2053940934736228454?s=46", category: "x", date: "5/12/26" },
  { url: "https://github.com/mks", category: "github", date: "4/12/26" },
  { url: "https://github.com/microsoft/VibeVoice", category: "github", date: "4/12/26" },
  { url: "https://github.com/VoltAgent/awesome-claude-code-subagents", category: "github", date: "4/17/26" },
  { url: "https://github.com/coreyhaines31/marketingskills", category: "github", date: "5/19/26" },
  { url: "https://github.com/Donchitos/Claude-Code-Game-Studios", category: "github", date: "5/12/26" },
  { url: "https://github.com/HermannBjorgvin/Clawdmeter", category: "github", date: "5/12/26" },
  { url: "https://github.com/Manavarya09/design-extract", category: "github", date: "5/12/26" },
  { url: "https://github.com/Mohamedsaleh14/Reddit_Scrapper", category: "github", date: "5/12/26" },
  { url: "https://github.com/TraderAlice/OpenAlice", category: "github", date: "5/12/26" },
  { url: "https://github.com/alirezarezvani/claude-skills", category: "github", date: "5/12/26" },
  { url: "https://github.com/anthropics/claude-for-legal", category: "github", date: "5/12/26" },
  { url: "https://github.com/atilaahmettaner/tradingview-mcp.", category: "github", date: "5/12/26" },
  { url: "https://github.com/getagentseal/codeburn", category: "github", date: "5/12/26" },
  { url: "https://github.com/gorkem-bwl/onboarding-video-generator", category: "github", date: "5/12/26" },
  { url: "https://github.com/ixchel-lunar/astro-hd-calculator", category: "github", date: "5/12/26" },
  { url: "https://github.com/juliusbrussee/caveman", category: "github", date: "5/12/26" },
  { url: "https://github.com/ken9n", category: "github", date: "5/12/26" },
  { url: "https://github.com/ksanjeev284/reddit-universal-scraper", category: "github", date: "5/12/26" },
  { url: "https://github.com/mrhakimov/vibe-code-security-audit", category: "github", date: "5/12/26" },
  { url: "https://github.com/msitarzewski/agency-agents", category: "github", date: "5/12/26" },
  { url: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill", category: "github", date: "5/12/26" },
  { url: "https://github.com/nexu-io/open-design", category: "github", date: "5/12/26" },
  { url: "https://github.com/redroostertech/RepoCanvas", category: "github", date: "5/12/26" },
  { url: "https://github.com/skincareextra/danielle-ai-skills", category: "github", date: "5/12/26" },
  { url: "https://github.com/tradingview/lightweight-charts", category: "github", date: "5/12/26" },
  { url: "https://github.com/mksglu/context-mode", category: "github", date: "5/12/26" },
  { url: "https://www.youtube.com/watch?v=QoQBzR1NIqI", category: "youtube", date: "4/17/26" },
  { url: "https://www.youtube.com/watch?v=W4YEUMeazh4", category: "youtube", date: "4/12/26" },
  { url: "https://www.youtube.com/watch?v=VSKIS5D-gQg", category: "youtube", date: "4/12/26" },
  { url: "https://youtube.com/shorts/QspVMa2m1PQ?si=gCsbpzuMjq9ar6AS", category: "youtube", date: "5/19/26" },
  { url: "https://youtu.be/QoQBzR1NIqI", category: "youtube", date: "5/12/26" },
  { url: "https://youtu.be/VSKIS5D-gQg?si=v0ZwPg27z-rQwMLy", category: "youtube", date: "5/12/26" },
  { url: "https://youtu.be/W4YEUMeazh4?si=DcmF3WbRmW0fw8jp", category: "youtube", date: "5/12/26" },
  { url: "https://youtu.be/0lw8KTx8KS8?si=19euiUDaIIkwBfhD", category: "youtube", date: "5/12/26" },
  { url: "https://youtu.be/3MP8D-mdheA?si=jHeiTVc4wHP0Yo8c", category: "youtube", date: "5/12/26" },
  { url: "https://youtu.be/4nR_tJxRCxk?si=5hWc_Pbz3JqKcsZ0", category: "youtube", date: "5/12/26" },
  { url: "https://youtu.be/92LK3J0ZykA?si=ytYUxQE6SnuCiknw", category: "youtube", date: "5/12/26" },
  { url: "https://youtu.be/EN7frwQIbKc?si=0WpkC0-5dhQobG-9", category: "youtube", date: "5/12/26" },
  { url: "https://youtu.be/g25vetc-8Sg?si=QY_V6P-4waOBcwfX", category: "youtube", date: "5/12/26" },
  { url: "https://youtu.be/lnLyVhJNfn8?si=tIFVeaIB7216kyp1", category: "youtube", date: "5/12/26" },
  { url: "https://www.lennysproductpass.com", category: "product", date: "5/19/26" },
  { url: "https://bodtea.life/", category: "product", date: "5/19/26" },
  { url: "https://a.co/d/3hrov3i", category: "product", date: "5/12/26" },
  { url: "https://a.co/d/jekW2t2", category: "product", date: "5/12/26" },
  { url: "https://magicflip.shop/", category: "product", date: "5/12/26" },
  { url: "https://www.juniortoseni.com/", category: "product", date: "5/12/26" },
  { url: "https://www.learninpublic.org/", category: "product", date: "5/12/26" },
  { url: "https://www.producthunt.com/", category: "product", date: "5/12/26" },
  { url: "https://yukthi6.gumroad.com/l/chatgpt-folder-downloader", category: "product", date: "5/12/26" },
  { url: "https://www.amazon.com/", category: "product", date: "5/12/26" },
  { url: "https://www.shopify.com/", category: "product", date: "5/12/26" },
  { url: "https://www.gumroad.com/", category: "product", date: "5/12/26" },
  { url: "https://www.16personalities.com/", category: "product", date: "5/12/26" },
  { url: "https://ttlectures.com/", category: "product", date: "5/12/26" },
  { url: "https://superappp.com/invite/HZ9B800O", category: "product", date: "5/12/26" },
  { url: "https://www.superappp.com/", category: "product", date: "5/12/26" },
  { url: "https://www.traderalice.com/", category: "product", date: "5/12/26" },
  { url: "https://goalsparx.com/", category: "product", date: "5/12/26" },
  { url: "https://www.omnara.com/", category: "product", date: "5/12/26" },
  { url: "https://moda.app/", category: "product", date: "5/12/26" },
  { url: "https://impeccable.style", category: "product", date: "5/12/26" },
  { url: "https://impeccable.style/#downloads", category: "product", date: "5/12/26" },
  { url: "https://www.reshaped.so/", category: "product", date: "5/12/26" },
  { url: "https://www.untitledui.com/", category: "product", date: "5/12/26" },
  { url: "https://www.designmd.co/", category: "product", date: "5/12/26" },
  { url: "https://www.thebrandingmavenmarketing.com/the-motions", category: "product", date: "5/12/26" },
  { url: "https://lafys.com/", category: "product", date: "5/12/26" },
  { url: "https://www.perplexity.ai/computer/a/the-billion-dollar-build-ZWzIFW.FTaKdLtufMa0yhw", category: "product", date: "5/12/26" },
  { url: "https://www.tiktok.com/t/ZP8guT6DV", category: "product", date: "5/12/26" },
  { url: "https://www.tiktok.com/t/ZTkWUQ5j6", category: "product", date: "5/12/26" },
  { url: "https://www.tiktok.com/t/ZTkWUovbC", category: "product", date: "5/12/26" },
  { url: "https://www.12factor.net/", category: "tool", date: "4/17/26" },
  { url: "https://lucide.dev/", category: "tool", date: "5/12/26" },
  { url: "https://make.com/en/welcome", category: "tool", date: "5/12/26" },
  { url: "https://neon.com/", category: "tool", date: "5/12/26" },
  { url: "https://buymeacoffee.com", category: "tool", date: "5/12/26" },
  { url: "https://www.notion.so/", category: "notion", date: "5/12/26" },
  { url: "https://crashoutdiary.notion.site/Build-Your-Voice-DNA-With-Claude-3240eb2d2b678101ab39da4a6509ce9f?pvs=74", category: "notion", date: "5/12/26" },
  { url: "https://crashoutdiary.notion.site/Get-Started-with-Claude-33e0eb2d2b67817a8917e4cec47c7514", category: "notion", date: "5/12/26" },
  { url: "https://crashoutdiary.notion.site/Get-Started-with-Claude-Mini-Course-33e0eb2d2b67817a8917e4cec47c7514?source=copy_link", category: "notion", date: "5/12/26" },
  { url: "https://www.linkedin.com/in/leahjs", category: "linkedin", date: "5/12/26" },
  { url: "https://www.reddit.com/r/ChatGPT/s/oM8Fnig4eR", category: "reddit", date: "5/12/26" },
  { url: "https://www.reddit.com/r/Bard/s/3LpB1aMfDJ", category: "reddit", date: "5/12/26" },
  { url: "https://www.reddit.com/r/aipromptprogramming/s/RqvwaXx4lz", category: "reddit", date: "5/12/26" },
  { url: "https://www.reddit.com/r/promptcraft/s/rCU5E2dI2q", category: "reddit", date: "5/12/26" },
  { url: "https://www.reddit.com/r/MidjourneyPrompts/s/jvR5Co19aW", category: "reddit", date: "5/12/26" },
  { url: "https://www.reddit.com/r/StableDiffusion/s/MjZRCAC4HJ", category: "reddit", date: "5/12/26" },
  { url: "https://www.reddit.com/r/midjourney/s/9vWQOaQVl7", category: "reddit", date: "5/12/26" },
  { url: "https://www.reddit.com/r/aivideo/s/yCrPIbiAWF", category: "reddit", date: "5/12/26" },
  { url: "https://www.reddit.com/r/KlingAI_Videos/s/LXM2FccPAy", category: "reddit", date: "5/12/26" },
  { url: "https://openai.com/index/introducing-workspace-agents-in-chatgpt/", category: "ai", date: "5/12/26" },
  { url: "https://claude.ai/s/6f58c292-8bce-45ae-b1c6-3b8d3e6e1b13", category: "ai", date: "5/12/26" },
  { url: "https://app.fireflies.ai/view/Second-Brain-Workshop", category: "ai", date: "5/12/26" },
  { url: "https://arcprize.org/", category: "ai", date: "5/12/26" },
  { url: "https://fireflies.ai/", category: "ai", date: "5/12/26" },
  { url: "https://groq.com", category: "ai", date: "5/12/26" },
  { url: "https://huggingface.co/", category: "ai", date: "5/12/26" },
  { url: "https://kai-ai.com/", category: "ai", date: "5/12/26" },
  { url: "https://kimi.moonshot.cn/", category: "ai", date: "5/12/26" },
  { url: "https://labs.anthropic.com", category: "ai", date: "5/12/26" },
  { url: "https://labs.jina.ai/", category: "ai", date: "5/12/26" },
  { url: "https://llama.com/", category: "ai", date: "5/12/26" },
  { url: "https://metaphor.so/", category: "ai", date: "5/12/26" },
  { url: "https://midjourney.com", category: "ai", date: "5/12/26" },
  { url: "https://myscale.com/", category: "ai", date: "5/12/26" },
  { url: "https://openrouter.ai/", category: "ai", date: "5/12/26" },
  { url: "https://pika.art/", category: "ai", date: "5/12/26" },
  { url: "https://pinokio.com/", category: "ai", date: "5/12/26" },
  { url: "https://platform.deepseek.com/", category: "ai", date: "5/12/26" },
  { url: "https://poe.com", category: "ai", date: "5/12/26" },
  { url: "https://runwayml.com/", category: "ai", date: "5/12/26" },
  { url: "https://sora.com/", category: "ai", date: "5/12/26" },
  { url: "https://stability.ai/", category: "ai", date: "5/12/26" },
  { url: "https://usekube.com/", category: "ai", date: "5/12/26" },
  { url: "https://v0.dev/", category: "ai", date: "5/12/26" },
  { url: "https://venice.ai/", category: "ai", date: "5/12/26" },
  { url: "https://www.anthropic.com/", category: "ai", date: "5/12/26" },
  { url: "https://www.anthropic.com/news/claude-for-small-business", category: "ai", date: "5/12/26" },
  { url: "https://www.artifact.com/", category: "ai", date: "5/12/26" },
  { url: "https://www.kling.cc/", category: "ai", date: "5/12/26" },
  { url: "https://www.luma.ray/loom", category: "ai", date: "5/12/26" },
  { url: "https://www.meta.ai/", category: "ai", date: "5/12/26" },
  { url: "https://www.pullcam.ai/", category: "ai", date: "5/12/26" },
  { url: "https://www.replicate.com/", category: "ai", date: "5/12/26" },
  { url: "https://filmassistant.io/", category: "ai", date: "5/12/26" },
  { url: "https://secondbrainworkshop.vercel.app/", category: "ai", date: "5/12/26" },
  { url: "https://www.buildyoursecondbrain.com/", category: "ai", date: "5/12/26" },
  { url: "https://www.thesecondbrain.io/?utm_source=www.google.com", category: "ai", date: "5/12/26" },
  { url: "https://ohmyclaudecode.com", category: "ai", date: "5/12/26" },
  { url: "https://claude.ai/design", category: "ai", date: "5/12/26" },
  { url: "https://claude.ai/public/artifacts/b59ad862-7af3-42b3-a643-f5ebf6ab6e2e", category: "ai", date: "5/12/26" },
  { url: "https://christmas-portrait-studio.promptedbyleah.com/", category: "ai", date: "5/12/26" },
  { url: "https://www.aidesigner.ai/ai-prototype-generator", category: "ai", date: "5/12/26" },
  { url: "https://www.aipowerlab.xyz/buildfest", category: "ai", date: "5/12/26" },
  { url: "https://www.micro.so", category: "ai", date: "5/12/26" },
  { url: "https://www.linkedin.com/feed/news/anthropic-teams-up-with-major-wall-street-players-8049705?utm_source=social_share_storyline&utm_medium=member_ios&rcm=ACoAABSqqtEB6k70KNzlGrrs9V5TQad4cMXFfy4&utm_campaign=whatsapp", category: "ai", date: "5/12/26" },
  { url: "https://www.linkedin.com/posts/justinrichardsteele_124622-open-grants-you-can-apply-for-right-ugcPost-7450562179411378177-Q32d?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAAAQUpvQBFTDYtm2IRXYiJ7biLf6uglAmtYE&utm_campaign=copy_link", category: "ai", date: "5/12/26" },
  { url: "https://www.linkedin.com/posts/perplexity-ai_today-were-announcing-the-billion-dollar-activity-7447694935333453824-Pz7c?utm_medium=ios_app&rcm=ACoAAAADqMwBEYz1LLdW8XklRJmF4HqzfB_h_Ag", category: "ai", date: "5/12/26" },
  { url: "https://open.substack.com/pub/blacktechpipeline/p/what-a-moat-looks-like-in-the-ai?r=2y020&utm_medium=ios", category: "ai", date: "5/12/26" },
  { url: "https://vibeworkflow.app/skills/vibe-prd", category: "ai", date: "5/12/26" },
  { url: "https://www.lawnext.com/2026/05/anthropic-goes-all-in-on-legal-releasing-more-than-20-connectors-and-12-practice-area-plugins-for-claude.html", category: "ai", date: "5/12/26" },
  { url: "https://www.originalobjective.com/blog/from-lovable-app-to-mobile-pwa-push-notifications-with-supabase", category: "ai", date: "5/12/26" },
  { url: "https://imanthepolymath.com/learner-hub", category: "ai", date: "5/12/26" },
  { url: "https://imanthepolymath.com/stories/assembly-news", category: "ai", date: "5/12/26" },
  { url: "https://www.studio.design/", category: "design", date: "5/12/26" },
  { url: "https://designsystems.surf/products/ai-ds-starter-stack?utm_source=meta&utm_medium=cpc&utm_campaign=LM_AI-DS-Starter-Stack_US(CA,TX,WA,NY)_Instagran-ONLY_Advantage", category: "design", date: "5/12/26" },
  { url: "https://www.figma.com/", category: "design", date: "5/12/26" },
  { url: "https://framer.com", category: "design", date: "5/12/26" },
  { url: "https://www.canva.com/", category: "design", date: "5/12/26" },
  { url: "https://www.pinterest.com/leahjs", category: "design", date: "5/12/26" },
  { url: "https://elements.envato.com/learn/ux-ui-design-trends", category: "design", date: "5/12/26" },
  { url: "https://fig-events.figma.com/may-rn-2026/?utm_source=Web&utm_medium=Figma_Events_Page&utm_campaign=May_2026_Release_Notes", category: "design", date: "5/12/26" },
  { url: "https://www.radix-ui.com/primitives", category: "design", date: "5/12/26" },
  { url: "https://ui.shadcn.com/", category: "design", date: "5/12/26" },
  { url: "https://www.omnara.com/", category: "design", date: "5/12/26" },
  { url: "https://chakra-ui.com/", category: "design", date: "5/12/26" },
  { url: "https://mui.com/material-ui/", category: "design", date: "5/12/26" },
  { url: "https://getbootstrap.com/", category: "design", date: "5/12/26" },
  { url: "https://saas-ui.dev/", category: "design", date: "5/12/26" },
  { url: "https://museiam.com", category: "design", date: "5/12/26" },
  { url: "https://pi.website", category: "design", date: "5/12/26" },
  { url: "https://animate-my-demo.lovable.app/", category: "design", date: "5/12/26" },
  { url: "https://contentqueen.lovable.app", category: "design", date: "5/12/26" },
  { url: "https://contentqueen.lovable.app/app", category: "design", date: "5/12/26" },
  { url: "https://launchkit.itsthatlady.dev", category: "design", date: "5/12/26" },
  { url: "https://usercentrics.com/us/consent-management-platform-powered-by-usercentrics/?utm_source=banner_uc&utm_medium=referral&utm_content=v3", category: "design", date: "5/12/26" },
  { url: "https://githubsetupguide.netlify.app/", category: "design", date: "5/12/26" },
  { url: "https://luma.com/techextravaganza", category: "events", date: "5/12/26" },
  { url: "https://luma.com/mecryxkr", category: "events", date: "5/12/26" },
  { url: "https://luma.com/msdp7z8j?tk=jDjIxR", category: "events", date: "5/12/26" },
  { url: "https://cerebralvalley.ai/e/built-with-4-7-hackathon", category: "events", date: "5/12/26" },
  { url: "https://maven.com/pixeljanitor/uiengineering-101-for-designers", category: "events", date: "5/12/26" },
  { url: "https://share.google/CzcxYPvBioIlc476c", category: "drive", date: "5/12/26" },
  { url: "https://share.google/fnZSULkCGS303RN3B", category: "drive", date: "5/12/26" },
  { url: "https://share.google/gvKsQQNMQgm4CNHzv", category: "drive", date: "5/12/26" },
  { url: "https://share.google/kV4Yz6JbKxPjqzGR1", category: "drive", date: "5/12/26" },
  { url: "https://share.google/pG9O9EC7VU7Elrb05", category: "drive", date: "5/12/26" },
  { url: "https://share.google/pceEganZKjk1ZZUt8", category: "drive", date: "5/12/26" },
  { url: "https://share.google/vwTZoA7fNSuLzIAj4", category: "drive", date: "5/12/26" },
  { url: "https://drive.google.com/drive/folders/1-7WiEVy-qpCNZ7kbVWEWUJLtieurpb3R", category: "drive", date: "5/12/26" },
  { url: "https://drive.google.com/drive/folders/1ddBsAWxA-jUyviFLWeRNqbYih6gKXoWL?usp=drive_link", category: "drive", date: "5/12/26" },
  { url: "https://drive.google.com/file/d/1V9II-DoV13Eaj3CqCTxLYEdE4HseGUR6/view?usp=drivesdk", category: "drive", date: "5/12/26" },
  { url: "https://docs.google.com/document/d/1eqQiUof2GzMa2R0oZyU6hMz6PPIjiR49fcmYyOhAwfU/edit?usp=sharing", category: "drive", date: "5/12/26" },
  { url: "https://docs.google.com/document/u/2/d/1GfbDOt3dYKNLaT-zO95z8jjLSAzrVIUTh7rrhqL4vkE/mobilebasic?fbclid=PARlRTSARPn6lleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeFmrKlEs8hMb6899BHVajqRMo9W7UvnAVy_mA-PFQaDqsXQ2din-t8ct1zLw_aem_GE0hjG2wORtRgxPNbQqHGw", category: "drive", date: "5/12/26" },
  { url: "https://docs.ollama.com/integrations/hermes", category: "drive", date: "5/12/26" },
  { url: "https://education.github.com/git-cheat-sheet-education.pdf", category: "drive", date: "5/12/26" },
  { url: "https://www.dropbox.com/scl/fi/6da6bzyprgk0dra3ba7n6/How-to-PRD.docx?rlkey=5p8ob4ae2rod17gg8o27j7srn&st=v5g6qkwt&dl=0", category: "drive", date: "5/12/26" },
  { url: "https://www.dropbox.com/scl/fi/wrgyvp32tumc1wk7gc20b/prd-template.md?rlkey=qerwmtpraexoggpac3ft3mrby&st=2cf2xnnm&dl=0", category: "drive", date: "5/12/26" },
  { url: "https://whatsapp.boardy.ai/Af3OM", category: "product", date: "5/12/26" },
  { url: "https://thevirtualoffice.io/", category: "product", date: "5/12/26" },
  { url: "https://heliummobile.com/", category: "product", date: "5/12/26" },
  { url: "https://model-calculator.com/", category: "product", date: "5/12/26" },
  { url: "https://tr.ee/igcarouselskill", category: "product", date: "5/12/26" },
];

const chatMessages: ChatMessage[] = chatData;

const categories = [
  { id: "all", label: "All", color: "bg-white text-black" },
  { id: "instagram", label: "Instagram", color: "bg-pink-500 text-white" },
  { id: "threads", label: "Threads", color: "bg-blue-400 text-white" },
  { id: "x", label: "X", color: "bg-black text-white" },
  { id: "github", label: "GitHub", color: "bg-gray-700 text-white" },
  { id: "youtube", label: "YouTube", color: "bg-red-500 text-white" },
  { id: "reddit", label: "Reddit", color: "bg-orange-500 text-white" },
  { id: "ai", label: "AI", color: "bg-purple-500 text-white" },
  { id: "design", label: "Design", color: "bg-cyan-500 text-white" },
  { id: "product", label: "Product", color: "bg-green-500 text-white" },
  { id: "tool", label: "Tool", color: "bg-yellow-500 text-black" },
  { id: "notion", label: "Notion", color: "bg-black text-white" },
  { id: "linkedin", label: "LinkedIn", color: "bg-blue-600 text-white" },
  { id: "events", label: "Events", color: "bg-orange-400 text-white" },
  { id: "drive", label: "Drive", color: "bg-green-600 text-white" },
];

export default function LinkDashboard() {
  const [activeTab, setActiveTab] = useState<"links" | "chat">("links");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
      const matchesCategory = selectedCategory === "all" || link.category === selectedCategory;
      const matchesSearch = link.url.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const filteredMessages = useMemo(() => {
    return chatMessages.filter((msg) =>
      msg.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold">Leah's Link Dashboard</h1>
          <span className="text-zinc-500">{links.length} links</span>
        </div>

        <div className="flex gap-2 mb-6 border-b border-zinc-800 pb-4">
          <button
            onClick={() => setActiveTab("links")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "links"
                ? "bg-white text-black"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            <Link2 className="w-4 h-4" />
            Links
          </button>
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "chat"
                ? "bg-white text-black"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Chat
          </button>
        </div>

        {activeTab === "links" && (
          <>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search links..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-zinc-600"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? cat.color
                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {filteredLinks.map((link, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 hover:border-zinc-600 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-zinc-400">{getHostname(link.url)}</span>
                      </div>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 truncate block"
                      >
                        {link.url}
                      </a>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2 py-0.5 rounded text-xs ${categories.find((c) => c.id === link.category)?.color || "bg-zinc-700 text-zinc-300"}`}>
                          {link.category}
                        </span>
                        <span className="text-xs text-zinc-500">{link.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => copyToClipboard(link.url)}
                        className="p-1.5 bg-zinc-800 rounded hover:bg-zinc-700"
                        title="Copy link"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-zinc-800 rounded hover:bg-zinc-700"
                        title="Open link"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredLinks.length === 0 && (
              <div className="text-center py-12 text-zinc-500">
                No links found matching your search
              </div>
            )}
          </>
        )}

        {activeTab === "chat" && (
          <>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search chat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-zinc-600"
              />
            </div>

            <div className="space-y-2">
              {filteredMessages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    <span className="text-xs text-zinc-500">{msg.date} at {msg.time}</span>
                  </div>
                  <p className="text-sm text-zinc-300 whitespace-pre-wrap">{msg.content}</p>
                </div>
              ))}
            </div>

            {filteredMessages.length === 0 && (
              <div className="text-center py-12 text-zinc-500">
                No messages found matching your search
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}