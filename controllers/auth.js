const bcrypt = require('bcryptjs')

const signUp = (req, res) => {
    try {
        const { body } = req

        return res.send({ success: true })
    } catch (e) {
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

module.exports = { signUp }