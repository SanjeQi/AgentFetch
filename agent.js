const agentDiv = document.querySelector("#agent");
const agentId = localStorage.getItem("id");

const getAgent = () => {
  const agentDetails = document.createElement("div");
  fetch("http://localhost:3000/agents/" + agentId)
    .then(res => res.json())
    .then(
      agent =>
        (agentDetails.innerHTML = `
        <img src="${agent.image}" />
    <h1>Agent: ${agent.name}</h1>
    <h3>Current Status: ${agent.status}</h3>
    <h3>Email: ${agent.email}</h3>
  `)
    );
  agentDiv.appendChild(agentDetails);
};

document.addEventListener("DOMContentLoaded", getAgent());
