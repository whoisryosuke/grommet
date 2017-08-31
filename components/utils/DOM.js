'use strict';

exports.__esModule = true;
exports.filterByFocusable = filterByFocusable;
exports.findScrollParents = findScrollParents;
exports.getBodyChildElements = getBodyChildElements;
exports.getNewContainer = getNewContainer;
function filterByFocusable(elements) {
  return Array.prototype.filter.call(elements || [], function (element) {
    var currentTag = element.tagName.toLowerCase();
    var validTags = /(svg|a|area|input|select|textarea|button|iframe|div)$/;
    var isValidTag = currentTag.match(validTags) && element.focus;
    if (currentTag === 'a') {
      return isValidTag && element.childNodes.length > 0 && element.getAttribute('href');
    } else if (currentTag === 'svg' || currentTag === 'div') {
      return isValidTag && element.hasAttribute('tabindex');
    }
    return isValidTag;
  });
}

function findScrollParents(element, horizontal) {
  var result = [];
  if (element) {
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
  }
  return result;
}

function getBodyChildElements() {
  var excludeMatch = /^(script|link)$/i;
  var children = [];
  [].forEach.call(document.body.children, function (node) {
    if (!excludeMatch.test(node.tagName)) {
      children.push(node);
    }
  });
  return children;
}

function getNewContainer() {
  // setup DOM
  var container = document.createElement('div');
  // prepend in body to avoid browser scroll issues
  document.body.insertBefore(container, document.body.firstChild);
  return container;
}

exports.default = {
  filterByFocusable: filterByFocusable,
  findScrollParents: findScrollParents,
  getBodyChildElements: getBodyChildElements,
  getNewContainer: getNewContainer
};