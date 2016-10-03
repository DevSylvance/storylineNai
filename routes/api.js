/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
  "posts": [
    {
      "title": "Lorem ipsum",
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "title": "Sed egestas",
      "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
    }
  ]
};

var landing = {
  "landings": [
    {
      "title": "Write your Story",
      "text": "We have a user friendly portal that allows you to write your story. Anything that interests you counts, anything that happened within Nairobi counts. The share your story with the world."
    },
    {
      "title": "Share your Story",
      "text": "With Storyline you will be able to share your stories with a huge audience keen on stories out of Nairobi. So type away to share your story with others."
    },
    {
      "title": "Discover Blogs",
      "text": "You will disover tons of other blogs with stories from Nairobi. Many stories are told and a chance to connect with other writes in Nairobi."
    }
  ]
};

// GET

exports.posts = function (req, res) {
  var posts = [];
  data.posts.forEach(function (post, i) {
    posts.push({
      id: i,
      title: post.title,
      text: post.text.substr(0, 50) + '...'
    });
  });
  res.json({
    posts: posts
  });
};

exports.post = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.posts.length) {
    res.json({
      post: data.posts[id]
    });
  } else {
    res.json(false);
  }
};

exports.landings = function (req, res) {
  var landings = [];
  landing.landings.forEach(function (landing, i) {
    landings.push({
      id: i,
      title: landing.title,
      text: landing.text
    });
  });
  res.json({
    landings: landings
  });
};


// POST

exports.addPost = function (req, res) {
  data.posts.push(req.body);
  res.json(req.body);
};

// PUT

exports.editPost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

// DELETE

exports.deletePost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};