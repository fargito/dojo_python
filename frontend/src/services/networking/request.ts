import 'whatwg-fetch';

function parseJSON(response: Response) {
  return response.json();
}

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  // @ts-ignore
  error.response = response;
  throw error;
}

interface ParamsKeyValueType {
  [key: string]: string | number | null;
}

const getCsrfTokenFromCookie = (): string => {
  const cookies = document.cookie.split(';');
  const csrfCookie = cookies.find(cookie => cookie.trim().startsWith('csrftoken'));
  if (!csrfCookie) {
    return '';
  }
  return csrfCookie.split('=')[1];
};

const buildQueryParamsForUrl = (paramsKeyValue: ParamsKeyValueType) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(paramsKeyValue)) {
    value !== null && params.append(key, String(value));
  }
  return params.toString();
};

export const makeGetRequest = (url: string, params?: ParamsKeyValueType) => {
  const urlWithParams = params ? `${url}?${buildQueryParamsForUrl(params)}` : url;
  return fetch(urlWithParams, { credentials: 'same-origin' })
    .then(checkStatus)
    .then(parseJSON);
};

export const makePostRequest = (url: string, postData?: object, params?: ParamsKeyValueType) => {
  const urlWithParams = params ? `${url}?${buildQueryParamsForUrl(params)}` : url;
  return fetch(urlWithParams, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfTokenFromCookie(),
    },
    body: JSON.stringify(postData),
  })
    .then(checkStatus)
    .then(parseJSON);
};

export const makePutRequest = (url: string, data: object, params?: ParamsKeyValueType) => {
  const urlWithParams = params ? `${url}?${buildQueryParamsForUrl(params)}` : url;
  return fetch(urlWithParams, {
    credentials: 'same-origin',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfTokenFromCookie(),
    },
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then(parseJSON);
};

export const makeDeleteRequest = (url: string, data: object) =>
  fetch(url, {
    credentials: 'same-origin',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfTokenFromCookie(),
    },
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then(parseJSON);
