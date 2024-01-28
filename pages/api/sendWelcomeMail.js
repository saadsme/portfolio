
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.resend);

export default async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: 'Ahmed Saad <hello@saads.me>',
    to: req.body.email,
    subject: 'Thanks for subscribing!',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};