import * as types from './actiontypes';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
let ROOT_URL = 'https://520j0icrqyx8y7og.mojostratus.io';
/*
Action Creators
*/

export function changeAppRoot(root) {
  return {
    type: types.ROOT_CHANGED,
    root: root
  };
}

/*
dispatch the actionCreators
*/

export function appInitialized() {
  return async function (dispatch, getState) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot('InitialPageState'));
  };
}

export function loginHome() {
  return async function (dispatch, getState) {
    dispatch(changeAppRoot('after-login'));
  };
}

export function HomePage() {
  return async function (dispatch, getState) {
    dispatch(changeAppRoot('home-page'));
  };
}

// export function registration (data) {
//   return axios.post(`${ROOT_URL}/rest/V1/customers`, data)
//     .then((response) => {
//       return response;
//     }).catch(function (error) {
//       return handleErorr(error.message);
//     });
// }

export async function registration(requestData) {
  debugger
  let request = await requestProcess(requestData);
  return axios.post(`${ROOT_URL}/rest/V1/customers`, request)
    .then((response) => {
      return response;
    }).catch(function (error) {
      console.log(error);
      return handleErorr(error.message);
    });
}

export async function resetpassword(requestData) {
  let request = await requestProcess(requestData);
  return axios.put(`${ROOT_URL}/rest/V1/customers/password`, request)
    .then((response) => {
      return response;
    }).catch(function (error) {
      return handleErorr(error.message);
    });
}

export async function login(requestData) {
  let request = await requestProcess(requestData);
  return axios.post(`${ROOT_URL}/rest/V1/integration/customer/token`, request)
    .then((response) => {
      const cookieToSave = response.headers['set-cookie'][0];
      AsyncStorage.setItem('AEsession', cookieToSave);
      return response;
    }).catch(function (error) {
      return handleErorr(error.message);
    });
}

export async function getProfileDetails() {
  axios.defaults.withCredentials = true;
  return axios.get(`${ROOT_URL}/rest/V1/customers/me`)
    .then((response) => {
      return response;
    }).catch(function (error) {
      console.log(error);
      return handleErorr(error.message);
    });
}
// https://520j0icrqyx8y7og.mojostratus.io/mobile-home-page

export async function getHomedata() {
  console.log("call getHomedata ");
  debugger
  axios.defaults.withCredentials = true;
  let headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  }

  /*axios.request(options).catch(function (error) {
    if (!error.response) {
      // network error
    } else {
      // http status code
      const code = error.response.status
      // response data
      const response = error.response.data
    }
  });*/

  var url = "https://520j0icrqyx8y7og.mojostratus.io/pricing-mobile";

  axios.get(url).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    alert("e====" + error)
  })

  return axios.get(`https://520j0icrqyx8y7og.mojostratus.io/pricing-mobile`, headers)
    .then(response => {
      console.log("111 response===" + response);
      return response;
    }).catch(function (error) {
      console.log("error" + error);
      return handleErorr(error.message);
    });
}

export async function getTalentHomeDetails(headers) {
  axios.defaults.withCredentials = true;
  let request = headers;
  let requestData = {};
  if (headers != undefined && headers != null && headers != '') {
    console.log('request ...')
    console.log(request)
    requestData = requestProcess(request);
  }
  return axios.get(`${ROOT_URL}/rest/V1/customers/me`, headers)
    .then((response) => {
      console.log(response);
      return response;
    }).catch(function (error) {
      console.log(error);
      return handleErorr(error.message);
    });
}

async function requestProcess(data) {
  return data;
}



function parseResponse(APIresponse) {
  let response = {
    success: true,
    responseData: '',
    errorMessage: '',
    status: 0,
    screen: ''
  }
  if (APIresponse !== undefined && APIresponse !== '' && APIresponse !== null &&
    APIresponse.data !== undefined && APIresponse.data !== '' && APIresponse.data !== null &&
    APIresponse.data.status !== undefined && APIresponse.data.status !== '' && APIresponse.data.status !== null
  ) {
    let responseStatus = APIresponse.data.status;
    if (APIresponse.data.result !== undefined && APIresponse.data.result !== '' && APIresponse.data.result !== null) {
      if (responseStatus === 200) {
        response.status = responseStatus
        response.responseData = APIresponse.data.result;
      }
    }
    response.status = responseStatus;
  }
  return response;
}

function handleErorr(error) {
  console.log(error);
  if (error === "Network Error") {
    return { errorMessage: 'Please check your Network', isFailed: true };
  } else {
    return { errorMessage: 'Server Down, please try after sometime', isFailed: true };
  }
}