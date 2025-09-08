"use client";
import styles from './listagem.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Pagination } from "antd";
import AgentCard from '../../components/AgentCard';
import Link from 'next/link';

export default function Listagem() {
    const [agentes, setAgentes] = useState([]);

    useEffect(() => {
        async function fetchAgentes() {
            try {
                const response = await axios.get('https://valorant-api.com/v1/agents');
                setAgentes(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Erro ao buscar agentes:', error);
            }
        }

        fetchAgentes();
    }, []);

    return (
        <div className={styles.container}>
            <Link href="/descricao" className={styles.backButton} >
                <ArrowLeftOutlined />
            </Link>
            <div className={styles.card}>
                <h1 className={styles.title}>Listagem de Agentes</h1>
                <p className={styles.description}>
                    Aqui você pode visualizar a listagem de agentes disponíveis na API.
                </p>
                
                <div className={styles.grid}>
                    {agentes.map((agent) => (
                        <AgentCard key={agent.uuid} agent={agent} />
                    ))}
                </div>
            </div>
        </div>
    )
}