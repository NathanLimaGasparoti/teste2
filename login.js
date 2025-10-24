document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = {
    login: document.getElementById("login"),
    cadastro: document.getElementById("cadastro"),
    esqueceu: document.getElementById("esqueceu")
  };

  function showTab(tabId) {
    // Ativar aba
    tabs.forEach(t => {
      t.classList.toggle("active", t.dataset.tab === tabId);
    });

    // Mostrar conteúdo
    Object.keys(tabContents).forEach(key => {
      tabContents[key].classList.remove("active");
    });

    const target = tabContents[tabId];
    if (target) {
      target.classList.add("active");
    }
  }

  // SPA: Clique nas abas
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.dataset.tab;
      history.pushState({ tab: tabId }, "", `#${tabId}`);
      showTab(tabId);
    });
  });

  // SPA: Ao voltar ou avançar no histórico
  window.addEventListener("popstate", (e) => {
    const tab = e.state?.tab || location.hash.replace("#", "") || "login";
    showTab(tab);
  });

  // SPA: Carregar direto pela URL
  const hash = location.hash.replace("#", "") || "login";
  showTab(hash);
  history.replaceState({ tab: hash }, "", `#${hash}`);
});
