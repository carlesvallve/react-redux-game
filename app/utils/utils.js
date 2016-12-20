// generates a random integer between 2 values

export const randomInt = (min, max) => {
  return Math.floor(Math.random()*(max-min+1)+min);
}


// set language from html tag and load content file

export const getLanguage = () => {
  const lang = document.getElementsByTagName('html')[0].getAttribute('lang') || 'en';
  //console.log('   - lang: ' + lang);
  return lang
}


// set platform by browser's userAgent

export const getDevice = () => {
  function detectDevice() {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    //|| navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return 'MOBILE';
    } else if (navigator.userAgent.match(/iPad/i)) {
      return 'TABLET';
    } else {
      return 'DESKTOP';
    }
  }

  const device = detectDevice();
  //console.log('   - device: ' + device);
  return device;
}


// Modify site styles depending on cookie / login / platform

export const SetCookieState = () => {
  // get cookie by name
  function getCookie(name) {
    function escape(s) {
        return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
    };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
  }


  // keep this as separate function for later refactor
  // should callback be handled here or in calling wrapper function?

  function _doAJAX(url, method, params, callback, errorCallback) {
    // NO JQ VERSION - based on code from http://youmightnotneedjquery.com/
    // doesn't need to wait for jQuery to load..
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) { // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") { // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else { // CORS not supported.
        xhr = null;
    }

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.withCredentials = true;

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        if(typeof callback === 'function') {
            callback(xhr.responseText);
        } else {
            return xhr.responseText;
        }
      } else {
        console.log('server returned 400+ error'); // We reached our target server, but it returned an error
        if(typeof errorCallback === 'function') errorCallback();
      }
    };

    xhr.onerror = function() { // There was a connection error of some sort
      if(typeof errorCallback === 'function') errorCallback();
    };

    if(method === 'POST') {
      xhr.send(params);
    } else {
      xhr.send();
    }
  }


  // prepare params for AJAX

  function xparams(params) {
    var keys = Object.keys(params);
    var out = [];
    keys.map(function(a) {
      out.push(a + '=' + params[a])
    });

    return out.join('&');
  }


}
