export const fetchAll = () =>
  fetch(`http://178.128.23.9:5952/api/index.html`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json());

export const create = (data = {}) =>
  fetch(`http://178.128.23.9:5952/api/index.html`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  }).then(response => response.json());

export const update = (data = {}) =>
  fetch(`http://178.128.23.9:5952/api/index.html`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  }).then(response => response.json());

export const remove = (data = {}) =>
  fetch(`http://178.128.23.9:5952/api/index.html`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  }).then(response => response.json());
