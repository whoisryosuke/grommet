function getHash(input) {
  var hash = 0;
  var i = void 0;
  var chr = void 0;
  var len = void 0;
  if (input.length === 0) return hash;
  for (i = 0, len = input.length; i < len; i += 1) {
    chr = input.charCodeAt(i);
    /* eslint-disable no-bitwise */
    hash = (hash << 5) - hash + chr;
    hash &= hash; // Convert to 32bit integer
    /* eslint-enable no-bitwise */
  }
  return hash;
}

export function findScrollParents(element, horizontal) {
  var result = [];
  var parent = element.parentNode;
  while (parent && parent.getBoundingClientRect) {
    var rect = parent.getBoundingClientRect();
    // 10px is to account for borders and scrollbars in a lazy way
    if (horizontal) {
      if (rect.width && parent.scrollWidth > rect.width + 10) {
        result.push(parent);
      }
    } else if (rect.height && parent.scrollHeight > rect.height + 10) {
      result.push(parent);
    }
    parent = parent.parentNode;
  }
  // last scrollable element will be the document 
  // if nothing else is scrollable in the page
  if (result.length === 0) {
    result.push(document);
  }
  return result;
}

export function generateId(element) {
  if (element) {
    var id = void 0;
    var elementId = element.getAttribute('id');
    if (!elementId) {
      // IE11 fix: check for parentNode instead of parentElement
      var parentElement = element.parentElement || element.parentNode;
      if (parentElement) {
        id = getHash(parentElement.innerHTML);
        element.setAttribute('id', id);
      }
    } else {
      id = elementId;
    }
    return id;
  }
  return undefined;
}

export default {
  findScrollParents: findScrollParents,
  generateId: generateId
};