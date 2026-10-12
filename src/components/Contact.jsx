import { useState } from "react";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { Button } from "./ui/button";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring/50";

  return (
    <section
      id="contact"
      className="mt-24 mb-16 grid gap-12 lg:grid-cols-2"
      aria-labelledby="contact-title"
    >
      <div>
        <h2 id="contact-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contactez-nous
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          Une question, une suggestion ou une commande spéciale ? Notre équipe
          se fera un plaisir de vous aider.
        </p>

        <dl className="mt-8 space-y-4 text-lg">
          <div className="flex items-center gap-3">
            <LuMapPin aria-hidden="true" className="size-6 text-primary" />
            <dd className="m-0">123 Avenue des Saveurs, Gbadago</dd>
          </div>
          <div className="flex items-center gap-3">
            <LuPhone aria-hidden="true" className="size-6 text-primary" />
            <dd className="m-0">+228 71 50 16 60</dd>
          </div>
          <div className="flex items-center gap-3">
            <LuMail aria-hidden="true" className="size-6 text-primary" />
            <dd className="m-0">modev228@gmail.com</dd>
          </div>
        </dl>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-2xl border border-border p-6"
      >
        <label htmlFor="contact-name" className="sr-only">
          Nom
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Votre nom"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />

        <label htmlFor="contact-email" className="sr-only">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="Votre email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />

        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows="5"
          placeholder="Votre message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />

        <Button
          type="submit"
          className="w-fit px-8 py-4 text-md cursor-pointer"
        >
          Envoyer
        </Button>

        {sent && (
          <p role="status" className="text-sm text-primary">
            Merci ! Votre message a bien été envoyé.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;