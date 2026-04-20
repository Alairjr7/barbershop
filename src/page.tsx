import { Header } from "./components/barbershop/header";

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Agende seu horário
          </h2>
          <p className="mt-2 text-muted-foreground">
            Escolha a data e o horário que melhor se adequa à sua agenda
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6"></div>

          <div className="lg:sticky lg:top-8 lg:self-start"></div>
        </div>
      </main>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p>© 2026 BarberShop. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Page;
