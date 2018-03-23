'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = verifyFacebookRequestSignature = function verifyFacebookRequestSignature(appSecret) {
  return function (req, res, buf) {
    var signature = req.headers['x-hub-signature'];
    if (!signature) {
      throw new Error('No signature present in header.');
    } else {
      var elements = signature.split('=');
      var signatureHash = elements[1];
      var expectedHash = _crypto2.default.createHmac('sha1', appSecret).update(buf).digest('hex');

      if (signatureHash !== expectedHash) {
        throw new Error('Signature hash did not match expected hash.');
      }
    }
  };
};