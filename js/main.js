const API = "https://min-api.cryptocompare.com/data";
const API_KEY =
  "&api_key=9003fd5d6c34ac3309b6f48961bdf30b6fe461bfe1bb74b4803a1c4645f68915";

const createPost = (parentNodeId, post) => {
  const parentNode = document.getElementById(parentNodeId);
  // Kreiranje elemenata
  const createElement = (classList, tagName, content, attrList) => {
    const el = document.createElement(tagName);
    if (classList) {
      classList.forEach(i => {
        el.classList.add(i);
      });
    }
    if (attrList) {
      attrList.forEach(i => {
        el.setAttribute(i.name, i.value);
      });
    }
    if (content) {
      const c = document.createTextNode(content);
      el.appendChild(c);
    }
    return el;
  };
  // Kreiranje post kartice
  const div = createElement(["box"], "div");
  const figure = createElement(["image", "is-16by9"]);
  const img = createElement(null, "img", null, [
    { name: "src", value: post.imageurl }
  ]);
  figure.appendChild(img);
  div.appendChild(figure);
  const hr = createElement(null, "hr");
  div.appendChild(hr);
  const h2 = createElement(["title", "is-4"], "h2");
  const a = createElement(null, "a", post.title, [
    { name: "href", value: post.url }
  ]);
  h2.appendChild(a);
  div.appendChild(h2);
  const h3 = createElement(
    ["subtitle"],
    "h3",
    new Date(post.published_on).toLocaleDateString()
  );
  div.appendChild(h2);
  const categories = post.categories.split("|");
  categories.forEach(category => {
    const tag = createElement(["tag"], "span", category);
    div.appendChild(tag);
  });
  const source = createElement(["tag", "is-info"], "span", post.source);
  div.appendChild(source);
  const upvotes = createElement(["tag", "is-success"], "span", post.upvotes);
  div.appendChild(upvotes);
  const downvotes = createElement(["tag", "is-danger"], "span", post.downvotes);
  div.appendChild(downvotes);
  const hr2 = createElement(null, "hr");
  div.appendChild(hr2);
  const p = createElement(null, "p", post.body);
  div.appendChild(p);
  // Insertovanje kartice u post container
  parentNode.append(div);
};

const fetchData = fetch(`${API}/v2/news/?lang=EN${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    if (!data.HasWarning) {
      return data.Data;
    } else {
      return new Error(data.Message);
    }
  });

$(document).ready(async () => {
  let posts;
  try {
    posts = await fetchData;
    posts.forEach(post => {
      createPost("posts", post);
    });
  } catch (error) {
    console.log(error);
  }
  $("#search").click(e => {
    const value = $("#searchBox").val();
    const regex = new RegExp(value, "i");
    // Pretraga
    console.log($("#posts").find(".box"));
  });
});
