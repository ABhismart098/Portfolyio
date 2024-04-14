import {createTransport} from "nodemailer"

export const sendMail =  async(text) =>{
    const transpoter = createTransport({
        service: process.env.service,
  host: process.env.host,
  port: 465,
  secure: true,
  auth: {
    user: process.env.user,
    pass: process.env.password
  },
    })

    await transpoter.sendMail({
        subject: "Contact request from portfolio",
        to: process.env.user,
        from: process.env.user, 
        text});
}