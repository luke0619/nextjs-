(function() {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 6200:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _meetupId_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(7548);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(301);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js





function MeetupDetail(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (MeetupDetail_module_default()).detail,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: props.image,
      alt: props.title
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: props.title
    }), /*#__PURE__*/jsx_runtime_.jsx("address", {
      children: props.address
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: props.description
    })]
  });
}

/* harmony default export */ var meetups_MeetupDetail = (MeetupDetail);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js







function MeetupDetails(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: props.meetupData.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: props.meetupData.description
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupDetail, {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    })]
  });
}

async function getStaticPaths() {
  const client = await external_mongodb_.MongoClient.connect('mongodb+srv://luke0619s:slf200000@cluster0.gr8qeqp.mongodb.net/luke?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const client = await external_mongodb_.MongoClient.connect('mongodb+srv://luke0619s:slf200000@cluster0.gr8qeqp.mongodb.net/luke?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({
    _id: (0,external_mongodb_.ObjectId)(meetupId)
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    }
  };
}
/* harmony default export */ var _meetupId_ = (MeetupDetails);

/***/ }),

/***/ 301:
/***/ (function(module) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ 7548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6200));
module.exports = __webpack_exports__;

})();