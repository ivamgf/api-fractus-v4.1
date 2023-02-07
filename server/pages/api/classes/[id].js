"use strict";
(() => {
var exports = {};
exports.id = 36;
exports.ids = [36];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 9267:
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ 2657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9056);
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9267);
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  await nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default()(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

  });

  try {
    const {
      method
    } = req;
    const cod = req.query.id;

    switch (method) {
      case 'GET':
        // Access to MongoDB and Classes data
        const {
          db
        } = await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        const response = await db.collection('classes').findOne({
          "_id": new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(`${cod}`)
        });
        return res.status(200).json(response);
        break;

      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed!`);
    }
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error!'
    });
  }
});

/***/ }),

/***/ 9056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ connect)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const uri = process.env.DATABASE_URL;
const dbName = process.env.MONGODB_DB;
let cachedClient;
let cachedDb;

if (!uri) {
  throw new Error('Please define the DATABASE_URL environment');
}

if (!dbName) {
  throw new Error('Please define the MONGODB_DB environment');
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
async function connect() {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb
    };
  }

  const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
  await client.connect();
  const db = await client.db(dbName);
  cachedClient = client;
  cachedDb = db;
  return {
    db,
    client
  };
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2657));
module.exports = __webpack_exports__;

})();