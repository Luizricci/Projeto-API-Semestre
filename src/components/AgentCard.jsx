import styles from '../styles/agenteCard.module.css';


export default function AgentCard({ agent }) {
    return (
        <div className={styles.cardItem}>
            <h2>{agent.displayName}</h2>
            <img 
                src={agent.displayIcon} 
                alt={agent.displayName} 
                className={styles.agentImage} 
            />
        </div>
    );
}
