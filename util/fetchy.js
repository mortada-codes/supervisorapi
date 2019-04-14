import fetchNode  from 'node-fetch';

let proFetch  = null;
 if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
    proFetch = fetch
  }
  else {
    proFetch = fetchNode
  }



export default proFetch ;