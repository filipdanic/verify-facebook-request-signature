import crypto from 'crypto';

export default verifyFacebookRequestSignature = (appSecret) =>
  (req, res, buf) => {
    const signature = req.headers['x-hub-signature'];
    if (!signature) {
      throw new Error('No signature present in header.');
    } else {
      const elements = signature.split('=');
      const signatureHash = elements[1];
      const expectedHash = crypto
        .createHmac('sha1', appSecret)
        .update(buf)
        .digest('hex');

      if (signatureHash !== expectedHash) {
        throw new Error('Signature hash did not match expected hash.');
      }
    }
  };
