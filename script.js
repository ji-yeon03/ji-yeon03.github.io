/*---------------------------------------- 섹션 1: cover ----------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".year_mark");
  if (!el) return;

  const fullText = el.textContent.trim();
  el.textContent = "";
  el.classList.add("is-typing");

  let i = 0;
  const speed = 60; // 숫자 작을수록 빠름

  const timer = setInterval(() => {
    el.textContent += fullText[i];
    i++;
    if (i >= fullText.length) clearInterval(timer);
  }, speed);
});

/*---------------------------------------- 섹션 2: profile ----------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  // ===== profile right: resume blocks (또르륵) =====
  const blocks = document.querySelectorAll(".profile_textbox-right .resume_block");
  if (blocks.length) {
    blocks.forEach((block, i) => {
      block.style.setProperty("--delay", `${i * 140}ms`);
    });

    const ioProfile = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible"); // 다시 올렸다 내려도 재실행
          }
        });
      },
      { threshold: 0.15 }
    );

    blocks.forEach((block) => ioProfile.observe(block));
  }
});

/*---------------------------------------- 섹션 3: project ----------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".projects_list .projects_card");
  if (!cards.length) return;

  // 카드별 딜레이(왼쪽부터 순서대로)
  cards.forEach((card, i) => {
    card.style.setProperty("--delay", `${i * 140}ms`);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible"); // ✅ 다시 올라가면 리셋
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  cards.forEach((card) => io.observe(card));
});

/*---------------------------------------- 섹션 3: project - 작업 페이지 바로가기 ----------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".projects_list .projects_card");

  const targets = [
    document.querySelector(".kumu"),
    document.querySelector(".rhythm_fit"),
    document.querySelector(".flower_knows"),
    document.querySelector(".misodam_dantal_clinic"),
  ];

  // 카드가 없으면 종료
  if (!cards.length) return;

  cards.forEach((card, i) => {
    const target = targets[i];
    if (!target) return;

    // 클릭 가능한 UI처럼 보이게(선택)
    card.style.cursor = "pointer";

    card.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link) e.preventDefault();

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});