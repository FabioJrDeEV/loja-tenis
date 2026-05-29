import { CreateUserSchema } from "../../schemas/create-user-schema";
import { User, Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-surface px-6 relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="w-full max-w-xl animate-fade-in relative z-10">
        {/* Card de Cadastro */}
        <div className="bg-white rounded-[2.5rem] shadow-strong p-6 md:p-10 border border-line/20">
          <div className="text-center space-y-2 mb-8">
            <div className="w-12 h-12 bg-ink rounded-xl flex items-center justify-center mx-auto shadow-medium">
              <span className="text-white text-lg font-black italic">FJ</span>
            </div>
            <h1 className="text-ink font-black text-3xl tracking-tighter">Crie sua conta</h1>
            <p className="text-muted text-xs font-medium">
              Junte-se à nossa comunidade exclusiva.
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-3">
              {/* Campo: Nome */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-ink font-black text-[10px] uppercase tracking-widest ml-1">
                  Nome Completo
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/40 group-focus-within:text-primary transition-colors" />
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome"
                    className="w-full bg-surface border border-line/50 rounded-xl py-3 pl-12 pr-4 text-xs focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                  />
                </div>
              </div>

              {/* Campo: E-mail */}
              <div className="space-y-1">
                <label htmlFor="email" className="text-ink font-black text-[10px] uppercase tracking-widest ml-1">
                  E-mail
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/40 group-focus-within:text-primary transition-colors" />
                  <input
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                    className="w-full bg-surface border border-line/50 rounded-xl py-3 pl-12 pr-4 text-xs focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                  />
                </div>
              </div>

              {/* Campo: Senha */}
              <div className="space-y-1">
                <label htmlFor="senha" className="text-ink font-black text-[10px] uppercase tracking-widest ml-1">
                  Senha
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/40 group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    id="senha"
                    placeholder="••••••••"
                    className="w-full bg-surface border border-line/50 rounded-xl py-3 pl-12 pr-4 text-xs focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                  />
                </div>
              </div>

              {/* Campo: Confirmar Senha */}
              <div className="space-y-1">
                <label htmlFor="passwordConfirmation" className="text-ink font-black text-[10px] uppercase tracking-widest ml-1">
                  Confirmar Senha
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/40 group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    id="passwordConfirmation"
                    placeholder="••••••••"
                    className="w-full bg-surface border border-line/50 rounded-xl py-3 pl-12 pr-4 text-xs focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-4">
              <button
                type="submit"
                className="group w-full bg-ink text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary transition-all duration-500 shadow-medium hover:shadow-primary/30 active:scale-[0.98] text-sm"
              >
                Criar Minha Conta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-muted text-[10px] font-bold uppercase tracking-tighter">
                <ShieldCheck className="w-3.5 h-3.5 text-mint" />
                Dados protegidos
              </div>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-line/30 text-center">
            <p className="text-muted text-xs font-medium">
              Já tem uma conta?{" "}
              <Link href="/signin" className="text-primary font-black hover:underline underline-offset-4">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
