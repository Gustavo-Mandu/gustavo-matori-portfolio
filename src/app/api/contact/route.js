import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['gmandu10@gmail.com'],
      subject: `Nova Mensagem do Portfólio de ${name}`,
      reply_to: email,
      html: `
        <div>
          <h1>Nova mensagem de contato recebida!</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erro do Resend:", error);
      return NextResponse.json({ error: 'Erro ao enviar o e-mail.' }, { status: 500 });
    }
    
    console.log("E-mail enviado com sucesso:", data);
    return NextResponse.json({ success: true, message: 'Mensagem enviada com sucesso!' }, { status: 200 });

  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json({ error: 'Erro interno do servidor.' }, { status: 500 });
  }
}