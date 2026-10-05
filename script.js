/* ==========================================================
   👇👇👇  設定區：要改內容只改這裡  👇👇👇
========================================================== */
const CONFIG = {
  myEmail: "n32359038@gmail.com",      // ← 你的 Email（對方的回答會寄到這裡）
  web3formsKey: "0a6e83a2-a1d0-4226-8e45-f03f13edd884",   // ← 到 web3forms.com 用上面的 Email 免費申請，貼在這裡
  myNick:  "大笨蛋",               // ← 你在問題裡的自稱
  defaultTo: "",               // ← 對方的名字（寫在這裡，網址就不用帶名字）

  scenarios: {
    apology: {
      label: "道歉", emoji: "🙇", anim: "1f62d", desc: "惹對方生氣時",
      question: "",
      yes: "原諒你 💗",
      noTexts: ["不要","哼！","還在生氣","再想想…","不原諒啦","好啦…再按一次"],
      teases: ["拜託拜託 🥺","我知道錯了啦","我真的會改的！","你忍心嗎…","看看那個大按鈕 👀"],
      steps: [
        { type:"choice", title:"那…希望的道歉禮物是？", multi:true, options:[
          {e:"🧋",t:"手搖飲料"},{e:"🍰",t:"甜點蛋糕"},{e:"🍖",t:"吃大餐"},{e:"🍟",t:"炸物宵夜"},
          {e:"💐",t:"一束花"},{e:"🎁",t:"神秘小禮物"},{e:"💆",t:"按摩服務"},{e:"🧹",t:"包辦家事一週"},
          {e:"🤗",t:"抱抱一百下"},{e:"👑",t:"當你的僕人一天"} ]},
        { type:"text", title:"還有什麼想對我說的嗎？", placeholder:"可以罵我沒關係 😢（選填）", optional:true }
      ],
      done: { anim:"1f979", emoji:"🥹", title:"謝謝你原諒我！", text:"禮物我馬上準備，以後不會再惹你生氣了 💕" }
    },

    date: {
      label: "約會", emoji: "💑", anim: "1f498", desc: "約對方出去",
      question: "你願意和我這個{me}約會嗎？",
      yes: "願意 💖",
      noTexts: ["不要","沒空","再說吧","我考慮一下","真的不要嗎","好吧再按一次"],
      teases: ["我會很乖的！","我請客喔 😏","錯過我會後悔的","按旁邊那個啦 👉"],
      steps: [
        { type:"date", title:"哪一天有空呢？📅" },
        { type:"choice", title:"想去做什麼？", multi:true, options:[
          {e:"🍝",t:"吃好料"},{e:"🎬",t:"看電影"},{e:"🌊",t:"去看海"},{e:"🛍️",t:"逛街"},
          {e:"🎢",t:"遊樂園"},{e:"☕",t:"咖啡廳"},{e:"🌃",t:"看夜景"},{e:"🏠",t:"在家耍廢"} ]}
      ],
      done: { anim:"1f60d", emoji:"🥰", title:"約好囉！", text:"我已經收到了，那天見！不准放我鴿子 🕊️" }
    },

    praise: {
      label: "誇獎", emoji: "🌟", anim: "1f60d", desc: "誇誇對方",
      question: "你知道你今天超級可愛嗎？",
      yes: "我知道 😌",
      noTexts: ["不知道","哪有","你亂講","才沒有","真的嗎？"],
      teases: ["你明明就很可愛","不承認也沒用","鏡子都說是了 🪞"],
      steps: [
        { type:"cards", title:"那我來證明給你看 👇", items:[
          "你笑起來的時候，整個世界都亮了 ✨","你是我見過最溫柔的人 🌷","跟你在一起的時間都過得特別快 ⏰",
          "你認真的樣子超級帥/美 😍","你是我每天最期待的那個人 💌","全宇宙我最喜歡你 🌌" ]},
        { type:"slider", title:"被誇完心情如何？", min:0, max:100, unit:"分",
          labels:[[0,"還是很普通 😐"],[40,"有一點開心 🙂"],[70,"超開心 😆"],[95,"飛上天了 🚀"]] }
      ],
      done: { anim:"1f60a", emoji:"😘", title:"那就好！", text:"要一直這麼開心喔，我會每天誇你的 💕" }
    },

    cute: {
      label: "撒嬌", emoji: "🥺", anim: "1f97a", desc: "想討抱抱時",
      question: "可以理理我這個{me}嗎？",
      yes: "好啦好啦 🫶",
      noTexts: ["不要","在忙","等一下","不理你","好吵喔"],
      teases: ["嗚嗚嗚 😭","人家好想你","理我一下下就好","我要哭了喔"],
      steps: [
        { type:"choice", title:"那你要給我什麼？", multi:true, options:[
          {e:"🤗",t:"抱抱"},{e:"😘",t:"親親"},{e:"🫳",t:"摸摸頭"},{e:"📞",t:"陪我講電話"},
          {e:"🍜",t:"陪我吃宵夜"},{e:"💬",t:"說我愛你"},{e:"🎮",t:"陪我打電動"},{e:"🛌",t:"一起睡午覺"} ]}
      ],
      done: { anim:"1f970", emoji:"🥰", title:"耶！最喜歡你了", text:"我現在要去等著領獎勵了 🎁" }
    },

    miss: {
      label: "想念", emoji: "💭", anim: "1f495", desc: "很想對方時",
      question: "你今天有想我嗎？",
      yes: "有啊 💗",
      noTexts: ["沒有","一點點","忘了","你猜","沒空想"],
      teases: ["騙人！","我都有想你耶","說實話嘛 🥺"],
      steps: [
        { type:"slider", title:"有多想？", min:0, max:100, unit:"%",
          labels:[[0,"偶爾想一下 🤏"],[40,"常常想 💭"],[70,"超級想 😢"],[95,"想到睡不著 🌙"]] },
        { type:"choice", title:"想什麼時候見面？", multi:false, options:[
          {e:"⚡",t:"現在馬上"},{e:"🌙",t:"今天晚上"},{e:"☀️",t:"明天"},{e:"📅",t:"這個週末"} ]}
      ],
      done: { anim:"1f49e", emoji:"💞", title:"我也好想你！", text:"很快就見面了，再等我一下下 🏃" }
    },

    cheer: {
      label: "打氣", emoji: "💪", anim: "1f4aa", desc: "對方很累時",
      question: "今天辛苦了，要不要充個電？",
      yes: "要 🔋",
      noTexts: ["不用","我還行","沒關係","我很好"],
      teases: ["不要逞強啦","電量剩 1% 了吧","讓我照顧你一下"],
      steps: [
        { type:"choice", title:"選你的充電方式", multi:true, options:[
          {e:"🤗",t:"大大的擁抱"},{e:"🧋",t:"外送飲料"},{e:"🍲",t:"熱熱的晚餐"},{e:"💆",t:"肩頸按摩"},
          {e:"🎧",t:"安靜陪你"},{e:"🗣️",t:"聽你抱怨"},{e:"😴",t:"早點睡覺"},{e:"🎬",t:"一起追劇"} ]}
      ],
      done: { anim:"1f917", emoji:"🔋", title:"充電中…", text:"你已經很棒了，剩下的交給我 💛" }
    },

    birthday: {
      label: "生日", emoji: "🎂", anim: "1f389", desc: "生日驚喜",
      question: "準備好接收生日驚喜了嗎？",
      yes: "準備好了 🎉",
      noTexts: ["還沒","等一下","好緊張","再等等"],
      teases: ["蠟燭要融化了 🕯️","快點快點！","驚喜等不及了"],
      steps: [
        { type:"cards", title:"生日快樂 🎂", items:[
          "謝謝你出生在這個世界上 🌍","今年的你，要比去年更快樂 🎈","所有的願望都會實現 ⭐","而我會一直在你身邊 💕" ]},
        { type:"text", title:"許一個生日願望吧 🌠", placeholder:"我會努力幫你實現！" }
      ],
      done: { anim:"1f973", emoji:"🎉", title:"生日快樂！", text:"願望我收到了，等著吧 😎" }
    },

    makeup: {
      label: "和好", emoji: "🤝", anim: "1f494", desc: "吵架後求和",
      question: "我們和好好不好？",
      yes: "好 🤍",
      noTexts: ["不好","再冷戰一下","你先反省","哼"],
      teases: ["我好想你","不要不理我嘛","冷戰好難受 🥶"],
      steps: [
        { type:"choice", title:"和好條件是？", multi:true, options:[
          {e:"🙇",t:"再道歉一次"},{e:"📝",t:"寫悔過書"},{e:"🍰",t:"買甜點"},{e:"🤗",t:"抱到我消氣"},
          {e:"🫡",t:"以後聽我的"},{e:"🍽️",t:"請吃飯"} ]}
      ],
      done: { anim:"1f497", emoji:"🤍", title:"和好啦！", text:"以後有話好好說，最愛你了" }
    }
  }
};
/* ==========================================================
   👆👆👆  設定區結束  👆👆👆
========================================================== */

const params = new URLSearchParams(location.search);

/* 會動的圖：有 anim 代碼就顯示 Google 動態表情，沒有就顯示一般 emoji */
function emojiHTML(emoji, anim, size){
  if(!anim) return emoji;
  return `<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/${anim}/512.webp" alt="${emoji}"
    style="width:${size}px;height:${size}px;vertical-align:middle" onerror="this.outerHTML='${emoji}'">`;
}
const $ = id => document.getElementById(id);
let currentKey = null, currentLink = "";

/* ---------------- 使用端 ---------------- */
function initSender(){
  $("sender").classList.remove("hidden");
  $("modeGrid").innerHTML = Object.entries(CONFIG.scenarios).map(([k,s]) => `
    <div class="mode" data-k="${k}" onclick="pickMode('${k}')">
      <div class="e">${emojiHTML(s.emoji, s.anim, 52)}</div><b>${s.label}</b><small>${s.desc}</small>
    </div>`).join("");
}
function pickMode(k){
  currentKey = k;
  document.querySelectorAll(".mode").forEach(m => m.classList.toggle("sel", m.dataset.k === k));
  const s = CONFIG.scenarios[k];
  $("formTitle").textContent = `${s.emoji} ${s.label}模式`;
  $("customQ").value = s.question.replace("{me}", CONFIG.myNick);
  if(!$("toName").value) $("toName").value = CONFIG.defaultTo || "";
  $("formPanel").classList.remove("hidden");
  $("linkResult").classList.add("hidden");
  $("formPanel").scrollIntoView({behavior:"smooth"});
}
function makeLink(){
  const p = new URLSearchParams();
  const to = $("toName").value.trim();
  const q = $("customQ").value.trim();
  const def = CONFIG.scenarios[currentKey].question.replace("{me}", CONFIG.myNick);
  // 名字跟設定區一樣、問題沒改 → 網址不用帶，越短越好
  if(to && to !== CONFIG.defaultTo) p.set("to", to);
  if(q && q !== def) p.set("q", q);
  const qs = p.toString();
  currentLink = location.origin + "/" + currentKey + (qs ? "?" + qs : "");
  $("linkText").textContent = currentLink;
  $("linkResult").classList.remove("hidden");
  $("longHint").classList.toggle("hidden", !p.has("q"));
}
function copyLink(){
  navigator.clipboard.writeText(currentLink).then(() => {
    $("copyBtn").textContent = "✅ 已複製";
    setTimeout(() => $("copyBtn").textContent = "📋 複製", 1500);
  });
}
function shareLine(){
  window.open("https://line.me/R/msg/text/?" + encodeURIComponent("💌 " + currentLink), "_blank");
}

/* ---------------- 收到端 ---------------- */
let S, answers = [], stepIdx = 0, noCount = 0;
function initReceiver(key){
  S = CONFIG.scenarios[key];
  $("receiver").classList.remove("hidden");
  const to = params.get("to") || CONFIG.defaultTo;
  $("toLine").textContent = to ? `To ${to} 💌` : "";
  $("askEmoji").innerHTML = emojiHTML(S.emoji, S.anim, 130);
  $("askText").textContent = params.get("q") || S.question.replace("{me}", CONFIG.myNick);
  $("yesBtn").textContent = S.yes;
  $("noBtn").textContent = S.noTexts[0];
  $("noBtn").onclick = clickNo;
  $("yesBtn").onclick = () => { $("askPage").classList.add("hidden"); burst(); showStep(); };
}
function clickNo(){
  noCount++;
  const yes = $("yesBtn"), no = $("noBtn");
  // 「是」越來越大
  const size = 18 + noCount * 7;
  yes.style.fontSize = size + "px";
  yes.style.padding = `${14 + noCount*5}px ${30 + noCount*10}px`;
  // 「否」越來越小、換文字
  no.textContent = S.noTexts[Math.min(noCount, S.noTexts.length - 1)];
  no.style.fontSize = Math.max(11, 18 - noCount * 1.5) + "px";
  $("tease").textContent = S.teases[(noCount - 1) % S.teases.length];
  // 按太多次就讓「否」消失，只剩「是」
  if(noCount >= 10) no.classList.add("hidden");
}

function showStep(){
  const page = $("stepPage");
  if(stepIdx >= S.steps.length) return finish();
  const st = S.steps[stepIdx];
  page.classList.remove("hidden");
  let html = `<div class="step-title fun">${st.title}</div>`;

  if(st.type === "choice"){
    html += st.multi ? `<div class="hint">可以複選喔</div>` : "";
    html += `<div class="opts">` + st.options.map((o,i) =>
      `<div class="opt" data-i="${i}"><div class="e">${o.e}</div><div>${o.t}</div></div>`).join("") + `</div>`;
    html += `<input id="otherIn" placeholder="其他想要的…（選填）" style="margin-bottom:16px">`;
    html += `<button class="btn block" id="nextBtn" disabled>確定 ✔</button>`;
    page.innerHTML = html;
    const sel = new Set();
    page.querySelectorAll(".opt").forEach(el => el.onclick = () => {
      const i = +el.dataset.i;
      if(!st.multi){ sel.clear(); page.querySelectorAll(".opt").forEach(x => x.classList.remove("sel")); }
      sel.has(i) ? sel.delete(i) : sel.add(i);
      el.classList.toggle("sel", sel.has(i));
      check();
    });
    const check = () => $("nextBtn").disabled = sel.size === 0 && !$("otherIn").value.trim();
    $("otherIn").oninput = check;
    $("nextBtn").onclick = () => {
      const picked = [...sel].map(i => st.options[i].e + st.options[i].t);
      const other = $("otherIn").value.trim();
      if(other) picked.push("✏️" + other);
      next(st.title, picked.join("、"));
    };
  }

  else if(st.type === "date"){
    const today = new Date().toISOString().slice(0,10);
    html += `<label>日期</label><input type="date" id="dIn" min="${today}">
      <label>大概時間</label>
      <select id="tIn">
        <option>早上</option><option>中午</option><option selected>下午</option><option>晚上</option><option>整天都可以</option>
      </select>
      <button class="btn block" style="margin-top:22px" id="nextBtn" disabled>確定 ✔</button>`;
    page.innerHTML = html;
    $("dIn").oninput = () => $("nextBtn").disabled = !$("dIn").value;
    $("nextBtn").onclick = () => {
      const d = new Date($("dIn").value + "T00:00");
      const w = "日一二三四五六"[d.getDay()];
      next(st.title, `${$("dIn").value}（週${w}）${$("tIn").value}`);
    };
  }

  else if(st.type === "text"){
    html += `<textarea id="txIn" rows="4" placeholder="${st.placeholder || ""}"></textarea>
      <button class="btn block" style="margin-top:18px" id="nextBtn">${st.optional ? "送出 ✔" : "確定 ✔"}</button>`;
    page.innerHTML = html;
    if(!st.optional){
      $("nextBtn").disabled = true;
      $("txIn").oninput = () => $("nextBtn").disabled = !$("txIn").value.trim();
    }
    $("nextBtn").onclick = () => next(st.title, $("txIn").value.trim() || "（沒有寫）");
  }

  else if(st.type === "cards"){
    let ci = 0;
    html += `<div class="card-big" id="cardBox"></div>
      <button class="btn block" id="nextBtn"></button>`;
    page.innerHTML = html;
    const render = () => {
      const box = $("cardBox");
      box.textContent = st.items[ci];
      box.style.animation = "none"; box.offsetHeight; box.style.animation = "";
      $("nextBtn").textContent = ci < st.items.length - 1 ? `再來一個 (${ci+1}/${st.items.length})` : "下一步 →";
    };
    render();
    $("nextBtn").onclick = () => { if(ci < st.items.length - 1){ ci++; render(); spawnHeart(); } else next(null); };
  }

  else if(st.type === "slider"){
    html += `<div class="slider-val" id="slVal"></div>
      <input type="range" id="slIn" min="${st.min}" max="${st.max}" value="${Math.round((st.min+st.max)/2)}">
      <div class="slider-label" id="slLabel"></div>
      <button class="btn block" id="nextBtn">確定 ✔</button>`;
    page.innerHTML = html;
    const upd = () => {
      const v = +$("slIn").value;
      $("slVal").textContent = v + st.unit;
      let lab = ""; st.labels.forEach(([th,t]) => { if(v >= th) lab = t; });
      $("slLabel").textContent = lab;
    };
    $("slIn").oninput = upd; upd();
    $("nextBtn").onclick = () => next(st.title, $("slVal").textContent + " " + $("slLabel").textContent);
  }
}
function next(title, value){
  if(title) answers.push({ title, value });
  stepIdx++;
  showStep();
}

function finish(){
  $("stepPage").classList.add("hidden");
  $("donePage").classList.remove("hidden");
  $("doneEmoji").innerHTML = emojiHTML(S.done.emoji, S.done.anim, 130);
  $("doneTitle").textContent = S.done.title;
  $("doneText").textContent = S.done.text;
  const sum = $("summary");
  if(answers.length){
    sum.innerHTML = answers.map(a => `<div><b>${a.title}</b><br>${escapeHtml(a.value)}</div>`).join("<hr style='border:none;border-top:1px dashed #f3c;opacity:.3;margin:8px 0'>");
  } else sum.classList.add("hidden");
  for(let i = 0; i < 30; i++) setTimeout(spawnHeart, i * 70);
  sendEmail();
}
function escapeHtml(s){ return s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

/* 寄 Email 通知你（用 Web3Forms 免費服務，不用後端） */
function sendEmail(){
  const key = CONFIG.web3formsKey;
  if(!key || key.includes("貼上")){
    $("sendStatus").textContent = "（尚未設定 Web3Forms Access Key，結果沒有寄出）";
    return;
  }
  $("sendStatus").textContent = "正在通知對方… 📨";
  const who = params.get("to") || CONFIG.defaultTo || "對方";
  const data = {
    access_key: key,
    subject: `💌 ${who} 回覆了你的「${S.label}」！`,
    from_name: "戀愛小網站",
    "情境": S.label,
    "對方": who,
    "問題": $("askText").textContent,
    "按了幾次「否」": noCount + " 次",
    "時間": new Date().toLocaleString("zh-TW")
  };
  answers.forEach(a => data[a.title] = a.value);
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type":"application/json", "Accept":"application/json" },
    body: JSON.stringify(data)
  }).then(r => r.json())
    .then(res => {
      if(res.success) $("sendStatus").textContent = "已經通知他了 ✅";
      else {
        $("sendStatus").textContent = "通知寄送失敗，截圖傳給他也可以 📸";
        console.log("Web3Forms 錯誤：", res.message);
      }
    })
    .catch(err => {
      $("sendStatus").textContent = "通知寄送失敗，截圖傳給他也可以 📸";
      console.log("網路錯誤：", err);
    });
}

/* ---------------- 愛心特效 ---------------- */
const icons = ["💗","💕","💖","💘","❤️","🌸"];
function spawnHeart(){
  const h = document.createElement("div");
  h.className = "float-heart";
  h.textContent = icons[Math.floor(Math.random() * icons.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (16 + Math.random() * 22) + "px";
  h.style.animationDuration = (5 + Math.random() * 5) + "s";
  $("hearts").appendChild(h);
  setTimeout(() => h.remove(), 10000);
}
function burst(){ for(let i = 0; i < 25; i++) setTimeout(spawnHeart, i * 50); }
setInterval(spawnHeart, 900);

/* ---------------- 進入點 ---------------- */
const m = params.get("m") || location.pathname.replace(/^\/|\/$/g, "");
if(m && CONFIG.scenarios[m]) initReceiver(m);
else initSender();
