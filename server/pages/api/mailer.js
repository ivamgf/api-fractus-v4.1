"use strict";
(() => {
var exports = {};
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 9267:
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ 5186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sendEmail)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
// EXTERNAL MODULE: external "nextjs-cors"
var external_nextjs_cors_ = __webpack_require__(9267);
var external_nextjs_cors_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_cors_);
;// CONCATENATED MODULE: ./pages/api/mailer/index.ts


function sendEmail(req, res) {
  // const data: any = req.body
  external_nextjs_cors_default()(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

  });
  let transporter = external_nodemailer_default().createTransport({
    host: 'app-fractus.orkneytech.com.br',
    port: 465,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
  let info = transporter.sendMail({
    from: `"Contact 👻" <${process.env.USERMAIL}>`,
    // sender address
    to: process.env.USERMAIL,
    // list of receivers
    replyTo: req.body.email,
    subject: req.body.subject,
    // Subject line
    text: req.body.message,
    // plain text body
    html: ` <h3>Mensagem App Fractus</h3>
                <br />
                <b>Nome Usuário:</b> <span>${req.body.name}</span>
                <br />
                <b>Assunto:</b> <span>${req.body.subject}</span>
                <br />
                <b>E:mail Usuário:</b> <span>${req.body.email}</span>
                <br />
                <b>Mensagem:</b><p>${req.body.message}</p>
                <br />
                <span>Powered by OrkneyTech</span>` // html body

  }).then(response => {
    res.send(response);
  }).catch(error => {
    res.send(error);
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5186));
module.exports = __webpack_exports__;

})();