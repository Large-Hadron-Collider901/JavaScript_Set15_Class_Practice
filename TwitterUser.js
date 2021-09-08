// #### TwitterUser Class
// Create a TwitterUser class with attributes userName, followingNumber, followersNumber, and pictureURL.
// Create a function that prints each attribute. Create an object of the class in your main function.

class TwitterUser {
  constructor(userName, followingNumber, followersNumber, pictureUrl) {
    this.userName = userName;
    this.followingNumber = followingNumber;
    this.followersNumber = followersNumber;
    this.pictureUrl = pictureUrl;
  }
}

function main() {
  let user1 = new TwitterUser(
    "@officialmcafee",
    "13.9K",
    "1.1M",
    "https://twitter.com/officialmcafee/photo"
  );
  console.log(
    ` John McAfee Twitter Username: ${user1.userName}, Following: ${user1.followingNumber}, Followers: ${user1.followersNumber}, Picture URL: ${user1.pictureUrl}`
  );
}

main();
