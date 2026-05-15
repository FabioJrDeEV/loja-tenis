import { CreateUserSchema } from "../../schemas/create-user-schema";
import { User, Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-surface py-20 px-6 relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="w-full max-w-xl animate-fade-in relative z-10">
        {/* Card de Cadastro */}
        <div className="bg-white rounded-[2.5rem] shadow-strong p-8 md:p-12 border border-line/20">
          <div className="text-center space-y-4 mb-12">
            <div className="w-16 h-16 bg-ink rounded-2xl flex items-center justify-center mx-auto shadow-medium">
              <span className="text-white text-xl font-black italic">PF</span>
            </div>
            <h1 className="text-ink font-black text-4xl tracking-tighter">Crie sua conta</h1>
            <p className="text-muted text-sm font-medium">
              Junte-se à nossa comunidade exclusiva e aproveite benefícios únicos.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-5">
              {/* Campo: Nome */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-ink font-black text-xs uppercase tracking-widest ml-1">
                  Nome Completo
                </label>
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted/40 group-focus-within:text-primary transition-colors" />
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome"
                    className="w-full bg-surface border border-line/50 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                  />
                </div>
              </div>

              {/* Campo: E-mail */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-ink font-black text-xs uppercase tracking-widest ml-1">
                  E-mail
                </label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted/40 group-focus-within:text-primary transition-colors" />
                  <input
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                    className="w-full bg-surface border border-line/50 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                  />
                </div>
              </div>

              {/* Campo: Senha */}
              <div className="space-y-2">
                <label htmlFor="senha" className="text-ink font-black text-xs uppercase tracking-widest ml-1">
                  Senha
                </label>
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted/40 group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    id="senha"
                    placeholder="••••••••"
                    className="w-full bg-surface border border-line/50 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                  />
                </div>
              </div>

              {/* Campo: Confirmar Senha */}
              <div className="space-y-2">
                <label htmlFor="passwordConfirmation" className="text-ink font-black text-xs uppercase tracking-widest ml-1">
                  Confirmar Senha
                </label>
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted/40 group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    id="passwordConfirmation"
                    placeholder="••••••••"
                    className="w-full bg-surface border border-line/50 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-6">
              <button
                type="submit"
                className="group w-full bg-ink text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary transition-all duration-500 shadow-strong hover:shadow-primary/30 active:scale-[0.98]"
              >
                Criar Minha Conta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-muted text-xs font-bold uppercase tracking-tighter">
                <ShieldCheck className="w-4 h-4 text-mint" />
                Seus dados estão protegidos e criptografados
              </div>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-line/30 text-center">
            <p className="text-muted text-sm font-medium">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-primary font-black hover:underline underline-offset-4">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
