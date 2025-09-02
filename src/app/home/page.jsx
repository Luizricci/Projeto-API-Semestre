import Link from "next/link"
import Image from "next/image"

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen flex flex-col">
            <main className="flex flex-1 items-center justify-center p-4">
                <div className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center max-w-xl w-full border border-blue-100">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sejam todos bem-vindos</h2>
                        <Image src="/MinhaFoto.png" alt="Descrição da imagem" width={500} height={300} className="rounded-lg shadow-md" />
                    </div>

                    <div className="space-y-4 text-left">
                        <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <span className="font-semibold text-blue-700">Nome:</span>
                            <span className="text-gray-800">Luiz Henrique Ricci Aureliano</span>
                        </div>
                        <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <span className="font-semibold text-blue-700">Nome da Escola:</span>
                            <span className="text-gray-800">SENAI</span>
                        </div>
                        <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <span className="font-semibold text-blue-700">Nome da Turma:</span>
                            <span className="text-gray-800">2TDS1</span>
                        </div>
                    </div>
                    
                    {/* Frase inspiradora */}
                    <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl ">
                        <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                            "A tecnologia é melhor quando aproxima as pessoas e simplifica suas vidas."
                        </blockquote>
                        <cite className="text-sm text-blue-600 font-medium block mt-2">— Matt Mullenweg</cite>
                    </div>
                    
                    <Link
                        href="/descricao"
                        className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold shadow-md block text-center"
                    >
                        Ver agora
                    </Link>
                </div>
            </main>
        </div>
    )
}