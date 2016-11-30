

window.console=(function(origConsole){
    var isDebug = true;
    console.log('%c Logger -> isDebug ' + isDebug + ' ', "background: grey; font-size:11px; color: white;");

    if (!window.console) {
      console = {};
    }

    var logArray = {
      logs: [],
      errors: [],
      warns: [],
      infos: []
    }

    return {
        log: function(){
          logArray.logs.push(arguments)
          isDebug && origConsole.log && origConsole.log.apply(origConsole,arguments);
        },
        warn: function(){
          logArray.warns.push(arguments)
          isDebug && origConsole.warn && origConsole.warn.apply(origConsole,arguments);
        },
        error: function(){
          console.log('tracing error...')
          logArray.errors.push(arguments)
          isDebug && origConsole.error && origConsole.error.apply(origConsole,arguments);
        },
        info: function(v){
          logArray.infos.push(arguments)
          isDebug && origConsole.info && origConsole.info.apply(origConsole,arguments);
        },
        debug: function(bool){
          isDebug = bool;
        },
        logArray: function(){
          return logArray;
        }
    };

}(window.console));


// (function(){
//     //
//     var isDebug = true;
//
//     console.log('>>>' + isDebug);
//
//
//     var preservedConsoleLog = console.log;
//     console.log = function() {
//       if (!isDebug) { return; }
//       // we need the function to be inside the of the `console` object
//       preservedConsoleLog.apply(console, arguments);
//     }
//
//     var preservedConsoleWarn = console.warn;
//     console.warn = function() {
//       if (!isDebug) { return; }
//       // we need the function to be inside the of the `console` object
//       preservedConsoleWarn.apply(console, arguments);
//     }
//
//     var preservedConsoleError = console.error;
//     console.error = function() {
//       if (!isDebug) { return; }
//       // we need the function to be inside the of the `console` object
//       preservedConsoleError.apply(console, arguments);
//     }
// })();
