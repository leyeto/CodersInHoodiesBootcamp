const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/**
 *
 * REQUIREMENTS:
 *
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

const getGotData = (url = houseURL) => {
  const data = fetch(url).then((response) => response.json());
  return data;
};

const getValues = () =>
  getGotData(houseURL).then((data) => {
    let swornMembers = data.swornMembers;
    swornMembers.forEach((swornMember) => {
      getGotData(swornMember).then((memberInfo) => {
        members.push({ name: `${memberInfo.name}`, url: `${memberInfo.url}` });
        const addMember = document.createElement("li");
        addMember.innerHTML = `<p class="name">${memberInfo.name}</p>
                               <p class="life">Born: ${memberInfo.born} - Died: ${memberInfo.died}</p>
                               <p class="gender"><strong>Gender: </strong>${memberInfo.gender}</p>
                               <p class="culture"><strong>Culture: </strong>${memberInfo.culture}</p>`;
        resultEl.appendChild(addMember);
      });
    });
  });

getValues();

const searchName = (search) => {
  let searchResults = [];
  let searchResultsUrl = [];

  members.forEach((member) => {
    const memberName = member.name.toLowerCase();
    if (memberName.includes(search)) {
      searchResults.push(member.name);
      searchResultsUrl.push(member.url);
    }
  });

  resultEl.innerHTML = "";
  searchResultsUrl.forEach((url) =>
    getGotData(url).then((searchData) => {
      const searchMember = document.createElement("li");
      searchMember.innerHTML = `<p class="name">${searchData.name}</p>
                                <p class="life">Born: ${searchData.born} - Died: ${searchData.died}</p>
                                <p class="gender"><strong>Gender: </strong>${searchData.gender}</p>
                                <p class="culture"><strong>Culture: </strong>${searchData.culture}</p>`;
      resultEl.appendChild(searchMember);
    })
  );
};

searchEl.addEventListener("input", (event) => {
  console.log("listener fired");
  searchName(event.target.value);
});

/**
 * HTML for each member:
 * <li>
 *     <p class="name">Bilbo Baggins</p>
 *     <p class="life">1777 – 1888</p>
 *     <p class="gender"><strong>Gender: </strong>Male</p>
 *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
 * </li>
 */
