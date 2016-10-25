var getIntersectClientRects = require('intersect-client-rects')
var getElementClientRect = require('element-client-rect')

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = inDocument
} else {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return inDocument
    })
  } else {
    window.elementInDocument = inDocument
  }
}

/**
 * Finding out if the element exists `threshold * 100`% on the document
 *
 * @param el {Element}
 * @param threshold
 * @returns {boolean}
 */
function inDocument (el, threshold) {
  threshold = threshold || 1.0

  var elemRect = getElementClientRect(el)
  var doc = el.ownerDocument

  var docWidth = Math.max(doc.body.clientWidth, doc.documentElement.offsetWidth, doc.documentElement.scrollWidth)
  var docHeight = Math.max(doc.body.clientHeight, doc.documentElement.offsetHeight, doc.documentElement.scrollHeight)

  var docRect = {
    top: 0,
    left: 0,
    right: docWidth,
    bottom: docHeight,
    width: docWidth,
    height: docHeight
  }

  var clip = getIntersectClientRects(elemRect, docRect)

  var isElemInsideOfDocument =
  elemRect.left >= 0 &&
    elemRect.right <= docWidth &&
    elemRect.top >= 0 &&
    elemRect.bottom <= docHeight

  var isElemHasIntersectWithDocument =
  clip.left >= 0 &&
    clip.right <= docWidth &&
    clip.top >= 0 && clip.bottom <= docHeight &&
    Math.abs(clip.width) > 0 &&
    Math.abs(clip.height) > 0

  var intersectArea = 0
  var elementArea = 0
  var areaRatio = 0

  if (isElemHasIntersectWithDocument) {
    intersectArea = clip.width * clip.height
    elementArea = elemRect.width * elemRect.height
    areaRatio = +elementArea ? intersectArea / elementArea : 0

    isElemHasIntersectWithDocument = areaRatio >= threshold
  }

  return isElemInsideOfDocument || isElemHasIntersectWithDocument
}
