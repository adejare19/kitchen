import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()
    const { firstName, lastName, email, phone, date, time, guests, message } = data

    if (!firstName || !email || !date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Send email via Resend if API key is configured
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'reservations@asakitchen.co.uk',
          to: process.env.RESTAURANT_EMAIL || 'hello@asakitchen.co.uk',
          subject: `New Reservation — ${firstName} ${lastName} on ${date}`,
          html: `
            <h2>New Table Reservation</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Guests:</strong> ${guests}</p>
            <p><strong>Message:</strong> ${message || 'None'}</p>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reservation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
