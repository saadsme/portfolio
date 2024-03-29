import { Resend } from 'resend';

const resend = new Resend(process.env.resend);

export default async (req, res) => {
  try {
    const { data, error } = await resend.contacts.create({
        email: req.body.email,
        firstName: '',
        lastName: '',
        unsubscribed: false,
        audienceId: '2eef985f-c140-4975-90a5-0e7eed510061',
      });
      
    if (error) {
      res.status(400).json({ error });
      return 'error'
    }

    res.status(200).json({ data });
    return 'success'
  } catch (error) {
    res.status(400).json({ error });
  }
}