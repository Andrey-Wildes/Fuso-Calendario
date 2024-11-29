import React, { useState } from 'react';

function App() {
  const [orbita, setOrbita] = useState('');
  const [rotacao, setRotacao] = useState('');
  const [ro, setRo] = useState('');
  const [resultado, setResultado] = useState('');

  const converter = () => {
    const o = parseInt(orbita);
    const rs = parseInt(rotacao);
    const nr = o / rs;
    const f = rs / (nr - 1);
    const ro = f * nr;

    setRo(ro);

    const resultados = `
      A Órbita dura ${o} segundos.
      A Rotação Sideral dura ${rs} segundos.
      A Rotação Orbital dura ${ro} segundos.
      Uma Órbita possui ${nr} Rotações.
      O Fatorial é ${f}. (???)
    `;
    setResultado(resultados);

    calcularCalendario();
  };

  const calcularCalendario = () => {
    const nda = ro - 1;
    const nde = (ro - 1) / 4;
    const ndm = (ro - 1) / 12;
    const ds = ro;
    const dm = ds / 60;
    const dh = dm / 60;
    const as = orbita;
    const am = as / 60;
    const ah = am / 60;
    const es = as / 4;
    const em = es / 60;
    const eh = em / 60;
    const ms = es / 3;
    const mm = ms / 60;
    const mh = mm / 60;

    const resultados = `
      ${resultado}
      O Dia dura ${ds} segundos, ou ${dm} minutos, ou ${dh} horas.
      O Ano dura ${as} segundos, ou ${am} minutos, ou ${ah} horas. O Ano possui ${nda} Dias.
      A Estação dura ${es} segundos, ou ${em} minutos, ou ${eh} horas. O Ano possui ${nde} Dias.
      O Mês dura ${ms} segundos, ou ${mm} minutos, ou ${mh} horas. O Ano possui ${ndm} Dias.
    `;
    setResultado(resultados);
  };

  return (
    <div align="center">
      <h1>Fuso-Calendário</h1>
      <label>Tempo de Órbita (segundos):</label>
      <input type="number" value={orbita} onChange={(e) => setOrbita(e.target.value)} /><br />
      <label>Tempo de Rotação Sideral (segundos):</label>
      <input type="number" value={rotacao} onChange={(e) => setRotacao(e.target.value)} /><br />
      <button onClick={converter}>Converter e Calcular</button><br /><br />
      {ro && <div>
        <label>Tempo de Rotação Orbital (segundos):</label>
        <span>{ro}</span><br />
        <button onClick={calcularCalendario}>Apenas Calcular</button>
      </div>}
      <p>{resultado}</p>
    </div>
  );
}

export default App;
