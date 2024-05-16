const categories = { javascript: [{ url: `/posts/valorant-discord-bot/`, date: `06 Jan 2022`, title: `Valorant Discord Bot`},],mongodb: [{ url: `/posts/valorant-discord-bot/`, date: `06 Jan 2022`, title: `Valorant Discord Bot`},],discord: [{ url: `/posts/valorant-discord-bot/`, date: `06 Jan 2022`, title: `Valorant Discord Bot`},],expo: [{ url: `/posts/Gains-App/`, date: `22 Nov 2022`, title: `Gains App`},],typescript: [{ url: `/posts/BEAPEngine/`, date: `28 Jan 2024`, title: `BEAPEngine`},{ url: `/posts/Gains-App/`, date: `22 Nov 2022`, title: `Gains App`},],react-native: [{ url: `/posts/Gains-App/`, date: `22 Nov 2022`, title: `Gains App`},],react-redux: [{ url: `/posts/Gains-App/`, date: `22 Nov 2022`, title: `Gains App`},],java: [{ url: `/posts/BEAPEngine/`, date: `28 Jan 2024`, title: `BEAPEngine`},],react: [{ url: `/posts/BEAPEngine/`, date: `28 Jan 2024`, title: `BEAPEngine`},],java-spring: [{ url: `/posts/BEAPEngine/`, date: `28 Jan 2024`, title: `BEAPEngine`},],postgresql: [{ url: `/posts/BEAPEngine/`, date: `28 Jan 2024`, title: `BEAPEngine`},],redis: [{ url: `/posts/BEAPEngine/`, date: `28 Jan 2024`, title: `BEAPEngine`},],docker: [{ url: `/posts/BEAPEngine/`, date: `28 Jan 2024`, title: `BEAPEngine`},],r: [{ url: `/posts/BEAPEngine/`, date: `28 Jan 2024`, title: `BEAPEngine`},],wip: [{ url: `/posts/Game-Server-Manager/`, date: `14 May 2024`, title: `Game Server Manager (WIP)`},],go: [{ url: `/posts/Game-Server-Manager/`, date: `14 May 2024`, title: `Game Server Manager (WIP)`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};