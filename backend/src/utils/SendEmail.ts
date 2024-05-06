// import nodeMailer from "nodemailer";
// import { TransportOptions } from "nodemailer";
// const transporter = nodeMailer.createTransport({
//     service: "gmail",
//     secure: false,
//     auth: {
//         user: "ankurghosh6638@gmail.com",
//         pass: "olvk mctq hkun vczd"
//     }
// });

// class sendEmail {
//     transporter: any;
//     items: any[];
//     constructor(transporter: any) {
//         this.transporter = transporter;
//         this.items = [];
//     }
//     enqueue(element: any) {
//         this.items.push(element);
//         const res = this.sendMail();
//         return [res];
//     }
//     #dequeue() {
//         if (this.#isEmpty()) {
//             return "Underflow";
//         }
//         return this.items.shift();
//     }
//     #isEmpty() {
//         return this.items.length === 0;
//     }
//     #front() {
//         if (this.#isEmpty()) {
//             return "No elements in Queue";
//         }
//         return this.items[0];
//     }
//     async sendMail() {
//         console.log("sendMail called::");
//         if (this.#isEmpty()) return "No mail to send";
//         for (let i = 0; i < this.items.length + 1; i++) {
//             const currentMail = this.items[i];
//             const response = await transporter.sendMail({
//                 from: "ankurghosh6638@gmail.com",
//                 to: currentMail.mail,
//                 subject: currentMail.subject,
//                 text: currentMail?.massage,
//                 html: currentMail?.html
//             });

//             if (response) {
//                 this.#dequeue();
//                 return {
//                     massage: "Mail sent",
//                     success: true
//                 };
//             } else {
//                 return {
//                     error: "Mail not sent",
//                     response,
//                     seccess: false
//                 };
//             }
//         }
//     }
// }

// export const sendMail = new sendEmail(transporter);
