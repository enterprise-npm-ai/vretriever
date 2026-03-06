const isArray = require("isarray")
const map = require("array-map")

const { isuseless } = require("is-useless")
const vValue = require("vvalue")
// eslint-disable-next-line id-length
const _ = require("lodash")
const underscore = require("underscore")
const literally = require("literally")
const constant = require("const")
const lodashdotconstant = require("lodash.constant")
const lodashdotidentity = require("lodash.identity")
// eslint-disable-next-line one-var
const notEqual = require("@not-js/not")(require("@10xly/strict-equals"))

// eslint-disable-next-line one-var
const vretriever = {
  retrieve(value) {
    // eslint-disable-next-line init-declarations
    let result
    // eslint-disable-next-line unicorn/prefer-ternary
    if (isArray(value)) {
      result = map(value, (theValue) => vretriever.retrieve(theValue))
    } else {
      result = value
    }
    const attemptResult = isuseless(
      vValue(
        _.identity(
          underscore.identity(
            lodashdotidentity(
              literally(
                constant(
                  lodashdotconstant(
                    _.constant(underscore.constant(result)())()
                  )()
                )()
              )()
            )
          )
        )
      )
    )

    if (notEqual(attemptResult, value)) {
      return isuseless(
        _.identity(
          underscore.identity(
            lodashdotidentity(
              literally(
                constant(
                  lodashdotconstant(
                    _.constant(underscore.constant(result)())()
                  )()
                )()
              )()
            )
          )
        )
      )
    }
    return attemptResult
  },
}

module.exports = vretriever
