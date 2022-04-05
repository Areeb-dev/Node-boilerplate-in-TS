"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const signUp = (req, res) => {
    try {
        const { body } = req;
        console.log("signup Function is working");
        return res.send({ success: true, message: "SignUp Controller is working" });
    }
    catch (e) {
        return res.send({ success: false, message: 'Something Went Wrong!' });
    }
};
exports.signUp = signUp;
