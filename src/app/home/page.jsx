import Link from "next/link"

export default function home() {
    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-lg w-full">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Sejam todos bem-vindos</h1>
                </div>

                <div className="space-y-4 text-start">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p><strong className="text-blue-600">Nome:</strong> <span className="text-gray-700">Luiz Henrique Ricci Aureliano</span></p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p><strong className="text-blue-600">Professor 1:</strong> <span className="text-gray-700">Thiago</span></p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p><strong className="text-blue-600">Professor 2:</strong> <span className="text-gray-700">Marcelo</span></p>
                    </div>
                    <div className="mb-5 mt-5 flex align-center justify-center ">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Descrição</h2>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">
                            APIHub é um projeto experimental, de código aberto, com o propósito de “transformar o Brasil em uma API”, centralizando endpoints modernos — como CEP, CNPJ, bancos, DDD, cotações, feriados, índices financeiros, participação no PIX
                        </p>
                    </div>
                    <div>
                        <Link href="/descricao" className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors block text-center">
                            Ver agora
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}