function unscape_JSON_recursively(object) {
  if (object instanceof Array) {
      var newArray = [];
      object.forEach(function (element) {
          newArray.push(unscape_JSON_recursively(element));
      });
      return newArray;
  } else if (object && typeof object == 'object') {
      var newObject = {};
      Object.keys(object).forEach(function (key) {
          newObject[`${key}`] = unscape_JSON_recursively(object[key]);
      });
      return newObject;
  } else if (object && typeof object == 'string') {
      try {
          parsed = JSON.parse(object);
          if (parsed instanceof Array) {
              var newArray = [];
              parsed.forEach(function (element) {
                  newArray.push(unscape_JSON_recursively(element));
              });
              return newArray;
          } else if (typeof parsed == 'object') {
            var newObject = {};
            Object.keys(parsed).forEach(function (key) {
                newObject[`${key}`] = unscape_JSON_recursively(parsed[key]);
            });
            return newObject;
          } else {
            return parsed;
          }
      } catch (ex) {
          return object;
      }
  } else {
      return object;
  }
}

module.exports = unscape_JSON_recursively;
