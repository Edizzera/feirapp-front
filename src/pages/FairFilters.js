import React, { useState } from 'react';

import './FairFilters.css';

const FairFilters = ({ onFilterSubmit }) => {
    const [category, setCategory] = useState('');
    const [weekDay, setWeekDay] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onFilterSubmit({ category, weekDay });
    };
  
    const handleReset = () => {
      setCategory('');
      setWeekDay('');

      onFilterSubmit({ category: '', weekDay: '' }); 
    };
  return (
    <form onSubmit={handleSubmit} className="fair-filters-form">
      <label htmlFor="category">Categoria:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Selecione uma categoria</option>
        <option value="MODELO">Modelo</option>
        <option value="MERCADAO">Mercadão</option>
        <option value="MISTA">Mista</option>
        <option value="ECOLOGICA">Ecológica</option>
      </select>

      <label htmlFor="weekDay">Dia da Semana:</label>
      <select
        id="weekDay"
        value={weekDay}
        onChange={(e) => setWeekDay(e.target.value)}
      >
        <option value="">Selecione um dia</option>
        <option value="DOMINGO">Domingo</option>
        <option value="SEGUNDA">Segunda</option>
        <option value="TERCA">Terça</option>
        <option value="QUARTA">Quarta</option>
        <option value="QUINTA">Quinta</option>
        <option value="SEXTA">Sexta</option>
        <option value="SABADO">Sábado</option>
      </select>

      <button type="submit">Filtrar</button>
      <button type="button" onClick={handleReset} className="reset-button">Resetar</button> {/* Botão de reset com classe */}
    </form>
  );
};
  
  export default FairFilters;