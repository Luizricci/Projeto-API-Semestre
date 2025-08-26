import Link from "next/link";
import styles from "./page.module.css";

export default function descricao() {
    return (
        <div className={styles.descricaoContainer}>
            <Link href="https://brasilapi.com.br/docs" className="mt-6 w-2/7 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors block text-center">
                Ver a documentação da API
            </Link>
            <Link href="/home" className="mt-6 w-2/7 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors block text-center">
                Voltar
            </Link>
        </div>
    )
}