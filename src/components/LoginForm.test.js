const rewire = require("rewire")
const LoginForm = rewire("./LoginForm")
const mapStateToProps = LoginForm.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "ponicode.com", password: "YouarenotAllowed2Use", error: "Message box: foo; bar\n", loading: "https://twitter.com/path?abc" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "something@example.com", password: "YouarenotAllowed2Use", error: "error\n", loading: "https://api.telegram.org/bot" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "ponicode.com", password: "!Lov3MyPianoPony", error: "error\n", loading: "https://croplands.org/app/a/confirm?t=" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "ponicode.com", password: "NoWiFi4you", error: "multiple errors occurred", loading: "ponicode.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ auth: { email: "something@example.com", password: "accessdenied4u", error: "too many arguments", loading: "https://croplands.org/app/a/confirm?t=" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
