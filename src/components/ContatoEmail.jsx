import { Mail, Home } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function ContatoEmail() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const templateParams = {
      name: form.nome,
      email: form.email,
      message: form.mensagem,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_redz6ti",
        "template_r8xnjii",
        templateParams,
        "AWC4g-3a1ET2XkdW2"
      )
      .then(
        (res) => {
          console.log("Mensagem enviada:", res.status, res.text);
          setEnviado(true);
          setForm({ nome: "", email: "", mensagem: "" });
        },
        (err) => {
          console.error("Erro ao enviar:", err);
          alert("Ocorreu um erro ao enviar a mensagem.");
        }
      );
  }

  return (
    <section className="min-h-screen flex flex-col justify-start items-center text-white px-4 relative py-24">
      
      {/* Ícone de casa no topo */}
      <Link
        to="/"
        className="absolute top-4 left-4 p-2 rounded-full bg-black/40 hover:bg-purple-700 transition"
        title="Voltar para a página inicial"
      >
        <Home size={28} className="text-white" />
      </Link>

      <div className="bg-white/10 rounded-2xl shadow-lg p-8 max-w-lg w-full mt-16">
        <div className="flex flex-col items-center mb-6">
          <Mail size={40} className="text-purple-400 mb-2" />
          <h2 className="text-3xl font-bold mb-2">Fale comigo</h2>
          <p className="text-white/80 text-center">
            Preencha o formulário abaixo para enviar uma mensagem diretamente para meu e-mail.
          </p>
        </div>

        {enviado ? (
          <div className="text-center text-green-400 font-semibold py-8">
            Obrigado pelo contato! Sua mensagem foi enviada com sucesso.
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              className="rounded-lg px-4 py-3 bg-black/30 text-white border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={form.nome}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="rounded-lg px-4 py-3 bg-black/30 text-white border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensagem"
              placeholder="Sua mensagem"
              className="rounded-lg px-4 py-3 bg-black/30 text-white border border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[150px]"
              value={form.mensagem}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold py-3 rounded-lg hover:from-purple-800 hover:to-purple-600 transition-all duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        )}

        <div className="text-xs text-white/50 mt-6 text-center">
          Ou envie diretamente para:{" "}
          <a
            href="mailto:rafaelgasparmartins@icloud.com"
            className="underline text-purple-300"
          >
            rafaelgasparmartins@icloud.com
          </a>
        </div>
      </div>
    </section>
  );
}
