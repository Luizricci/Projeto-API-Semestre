import Link from "next/link"

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen flex flex-col">
            <header className="w-full py-6 bg-white shadow-md flex justify-center">
                <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">APIHub</h1>
            </header>
            <main className="flex flex-1 items-center justify-center p-4">
                <div className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center max-w-xl w-full border border-blue-100">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sejam todos bem-vindos</h2>
                        <p className="text-gray-500">Projeto de integração de APIs públicas brasileiras</p>
                    </div>

                    <div className="space-y-4 text-left">
                        <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <span className="font-semibold text-blue-700">Nome:</span>
                            <span className="text-gray-800">Luiz Henrique Ricci Aureliano</span>
                        </div>
                        <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <span className="font-semibold text-blue-700">docente 1:</span>
                            <span className="text-gray-800">Thiago</span>
                        </div>
                        <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <span className="font-semibold text-blue-700">docente 2:</span>
                            <span className="text-gray-800">Marcelo</span>
                        </div>
                    </div>

                    <div className="my-8">
                        <h3 className="text-xl font-bold text-blue-700 mb-2">Descrição</h3>
                        <p className="text-gray-700 leading-relaxed">
                            <span className="font-semibold text-blue-600">APIHub</span> é um projeto experimental e de código aberto, com o propósito de “transformar o Brasil em uma API”, centralizando endpoints modernos — como CEP, CNPJ, bancos, DDD, entre outros.
                        </p>
                    </div>

                    <Link
                        href="/descricao"
                        className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold shadow-md block text-center"
                    >
                        Ver agora
                    </Link>
                </div>
            </main>
            <footer className="w-full py-4 bg-white border-t border-blue-100 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} APIHub. Todos os direitos reservados.
            </footer>
        </div>
    )
}