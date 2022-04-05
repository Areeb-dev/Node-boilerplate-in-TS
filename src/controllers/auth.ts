import express, { Application, Request, Response } from 'express'

const signUp = (req: Request, res: Response) => {
    try {
        const { body } = req
        console.log("signup Function is working")
        return res.send({ success: true, message: "SignUp Controller is working" })
    } catch (e) {
        return res.send({ success: false, message: 'Something Went Wrong!' })
    }
}

export { signUp }