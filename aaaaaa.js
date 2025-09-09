"use client";

import { useState, useEffect } from "react";

export default function FavoritosComponent() {
  const [favoritos, setFavoritos] = useState([]);

  // ⭐ Hook para adicionar favorito
  const adicionarFavorito = (usuario) => {
    try {
      console.log('⭐ Adicionando aos favoritos:', usuario.name);
      
      // 1. Verificar se já existe
      const jaExiste = favoritos.some(fav => fav.id === usuario.id);
      if (jaExiste) {
        console.log('⚠️ Usuário já está nos favoritos');
        return;
      }
      
      // 2. Adicionar à lista
      const novosFavoritos = [...favoritos, usuario];
      console.log('📝 Nova lista de favoritos:', novosFavoritos.length, 'itens');
      
      // 3. Salvar no LocalStorage
      localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
      console.log('💾 Favoritos salvos no LocalStorage');
      console.log('🔍 Veja em: F12 → Application → Local Storage → favoritos');
      
      // 4. Atualizar state
      setFavoritos(novosFavoritos);
      console.log('✅ State atualizado');
      
    } catch (error) {
      console.error('❌ Erro ao adicionar favorito:', error.message);
    }
  };

  // 🗑️ Hook para remover favorito
  const removerFavorito = (userId) => {
    try {
      console.log('🗑️ Removendo favorito ID:', userId);
      
      const novosFavoritos = favoritos.filter(fav => fav.id !== userId);
      console.log('📝 Favoritos restantes:', novosFavoritos.length);
      
      localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
      setFavoritos(novosFavoritos);
      console.log('✅ Favorito removido com sucesso');
      
    } catch (error) {
      console.error('❌ Erro ao remover favorito:', error.message);
    }
  };

  // 📖 Carregar favoritos salvos
  useEffect(() => {
    try {
      console.log('🚀 Carregando favoritos do LocalStorage...');
      
      const favoritosSalvos = localStorage.getItem('favoritos');
      if (favoritosSalvos) {
        const dados = JSON.parse(favoritosSalvos);
        setFavoritos(dados);
        console.log('📂 Favoritos carregados:', dados.length, 'itens');
      } else {
        console.log('📭 Nenhum favorito encontrado');
      }
    } catch (error) {
      console.error('❌ Erro ao carregar favoritos:', error.message);
    }
  }, []);

  return (
    <div>
      <p>Favoritos: {favoritos.length}</p>
    </div>
  );
}