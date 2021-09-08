// #### GitHubRepository Class
// Create a GitHubRepository class with attributes userName, fileName, descriptionOfRepository, and code.
// Create a function that prints each attribute. Create an object of the class in your main function.

class GitHubRepository {
  constructor(userName, fileName, descriptionOfRepository, codeURL) {
    this.userName = userName;
    this.fileName = fileName;
    this.descriptionOfRepository = descriptionOfRepository;
    this.codeURL = codeURL;
  }
}

function main() {
  let user1 = new GitHubRepository(
    "Large-Hadron-Collider901",
    "Botanic-Memory-Match-Game",
    "Memory match card game with botanic flower theme",
    "https://github.com/Large-Hadron-Collider901/Botanic-Memory-Match-Game"
  );
  console.log(
    ` Skye McCullough GitHub Username: ${user1.userName}, File Name: ${user1.fileName}, Description of Repo: ${user1.descriptionOfRepository}, Code URL: ${user1.codeURL}`
  );
}

main();
