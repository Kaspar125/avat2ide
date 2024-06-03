import {Resend} from 'resend';
import * as process from 'process';

export async function SendNotification(email: string, name:string, message: string) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string;
    await resend.emails.send({
        from: 'teavitused@avataide.ee',
        to: ADMIN_EMAIL,
        cc: ADMIN_EMAIL,
        reply_to: email,
        subject: 'Avatäide - Kontaktivormi teade - ' + new Date().toLocaleString(),
        html: '<h1>Hei</h1> <br/> <p>' + name + 'esitas teade kontaktvormi kaudu. Milles on järgnev teade:</p> <br/> <p>' + message + '</p> <br/><p>Kontakt info:' + email + '<br/>' + name + '</p>'
    });
}