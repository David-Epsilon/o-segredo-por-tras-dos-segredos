import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Play, RotateCcw } from 'lucide-react';

const DavidEpsilonSimulation: React.FC = () => {
  const [simData, setSimData] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [finalMetrics, setFinalMetrics] = useState<any>(null);

  const THETA = 0.800;
  const PHI_POW = 1.4;

  const calculateKest = (nodeType: string, transactions: number, time: number) => {
    if (nodeType === 'pow') return 512 + (transactions * 0.1) - (time * 0.5);
    return 3800 + (transactions * 0.05);
  };

  const calculateE = (nodeType: string, time: number, coherence: number) => {
    if (nodeType === 'pow') {
      const baseE = 126;
      const coherencePenalty = coherence > THETA ? (coherence - THETA) * 50 : 0;
      return baseE + coherencePenalty + (time * 0.01);
    }
    return 38 + (time * 0.005);
  };

  const calculateCoherence = (nodeType: string, kappa: number, time: number, dvpActive: boolean) => {
    if (nodeType === 'pow') {
      let baseC = 0.77 + (time * 0.0015);
      if (dvpActive && time > 60) baseC += (time - 60) * 0.008;
      if (kappa < 2.5) baseC += (2.5 - kappa) * 0.05;
      return Math.min(baseC, 0.95);
    }
    return 0.12 + (time * 0.0001);
  };


  const runSimulation = () => {
    setIsRunning(true);
    const data: any[] = [];
    let dvpActivated = false, orphanBlocks = 0, totalBlocks = 0;

    for (let t = 0; t <= 120; t += 2) {
      if (t >= 90) dvpActivated = true;
      const pow = { Kest: calculateKest('pow', 1000, t), E: 0, kappa: 0, coherence: 0 };
      const dvp = { Kest: calculateKest('dvp', 1000, t), E: 0, kappa: 0, coherence: 0 };

      pow.coherence = calculateCoherence('pow', 3.0, t, dvpActivated);
      pow.E = calculateE('pow', t, pow.coherence);
      pow.kappa = pow.Kest / pow.E;
      pow.coherence = calculateCoherence('pow', pow.kappa, t, dvpActivated);

      dvp.E = calculateE('dvp', t, 0.12);
      dvp.kappa = dvp.Kest / dvp.E;
      dvp.coherence = calculateCoherence('dvp', dvp.kappa, t, dvpActivated);

      if (t > 0 && t % 10 === 0) {
        totalBlocks++;
        if (pow.coherence > THETA && Math.random() < Math.min((pow.coherence - THETA) * 8, 0.98)) orphanBlocks++;
      }

      data.push({
        time: t, kappa_pow: +pow.kappa.toFixed(2), kappa_dvp: +dvp.kappa.toFixed(2),
        coherence_pow: +pow.coherence.toFixed(3), coherence_dvp: +dvp.coherence.toFixed(3), theta: THETA
      });
    }

    setSimData(data);
    const final = data[data.length - 1];
    setFinalMetrics({
      pow: { kappa: final.kappa_pow, coherence: final.coherence_pow, descohesion: final.coherence_pow > THETA },
      dvp: { kappa: final.kappa_dvp, coherence: final.coherence_dvp, descohesion: final.coherence_dvp > THETA },
      orphanRate: +(totalBlocks > 0 ? (orphanBlocks / totalBlocks) * 100 : 0).toFixed(1), totalBlocks, orphanBlocks
    });
    setIsRunning(false);
  };

  const reset = () => { setSimData([]); setFinalMetrics(null); };


  return (
    <section id="david-simulation" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold mb-6">Simulação <span className="text-amber-500">DAVID-ε</span></h2>
          <p className="text-slate-400 text-lg">5 Nós: 4 PoW + 1 DVP | Ativação DVP em t=90s</p>
        </div>
        <div className="max-w-6xl mx-auto bg-gray-900 p-6 rounded-3xl border border-slate-700/50">
          <div className="mb-6 p-4 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-white">Parâmetros do Sistema</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div><span className="text-slate-400">Umbral Θ:</span><span className="ml-2 font-mono text-white">{THETA} bits/kJ</span></div>
              <div><span className="text-slate-400">Transações:</span><span className="ml-2 font-mono text-white">1000 tx/s</span></div>
              <div><span className="text-slate-400">Fator φ:</span><span className="ml-2 font-mono text-white">{PHI_POW}</span></div>
              <div><span className="text-slate-400">Duração:</span><span className="ml-2 font-mono text-white">120s</span></div>
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <button onClick={runSimulation} disabled={isRunning} className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 disabled:bg-gray-600 text-slate-950 rounded-lg font-bold transition-all">
              <Play size={20} />{isRunning ? 'Executando...' : 'EXECUTAR SIMULAÇÃO'}
            </button>
            <button onClick={reset} disabled={isRunning} className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all">
              <RotateCcw size={20} />Reset
            </button>
          </div>

          {simData.length > 0 && (<>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 text-white">κ (Ratio de Compressão) - bits/kJ</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={simData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="kappa_pow" stroke="#ef4444" name="PoW κ" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="kappa_dvp" stroke="#10b981" name="DVP κ" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 text-white">C(t) Coerência vs Umbral Θ</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={simData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis domain={[0, 1]} stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="coherence_pow" stroke="#f59e0b" name="PoW C(t)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="coherence_dvp" stroke="#06b6d4" name="DVP C(t)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="theta" stroke="#dc2626" name="Umbral Θ" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {finalMetrics && (
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-500">VEREDICTO EMPÍRICO</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-red-400">RED PoW (Final)</h4>
                    <div className="space-y-2 text-sm font-mono text-white">
                      <div>κ: {finalMetrics.pow.kappa} bits/kJ</div>
                      <div>C(t): {finalMetrics.pow.coherence}</div>
                      <div className={finalMetrics.pow.descohesion ? "text-red-500 font-bold" : "text-green-500"}>
                        {finalMetrics.pow.descohesion ? '❌ DESCOHESÃO DETECTADA' : '✓ Coerente'}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-green-400">RED DVP (Final)</h4>
                    <div className="space-y-2 text-sm font-mono text-white">
                      <div>κ: {finalMetrics.dvp.kappa} bits/kJ</div>
                      <div>C(t): {finalMetrics.dvp.coherence}</div>
                      <div className={finalMetrics.dvp.descohesion ? "text-red-500" : "text-green-500 font-bold"}>
                        {finalMetrics.dvp.descohesion ? '❌ Descohesão' : '✓ COERÊNCIA MANTIDA'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="font-bold mb-2 text-white">Blocos Órfãos (Forks)</h4>
                  <div className="text-sm font-mono text-slate-300">
                    <div>Total: {finalMetrics.totalBlocks} | Órfãos: {finalMetrics.orphanBlocks}</div>
                    <div className="text-xl font-bold mt-2 text-amber-500">Taxa: {finalMetrics.orphanRate}%</div>
                  </div>
                </div>
              </div>
            )}
          </>)}
          <div className="mt-6 p-4 bg-gray-800 rounded-xl text-sm text-slate-400">
            <p className="font-bold mb-2 text-white">Nota metodológica:</p>
            <p>Simulação DAVID-ε: κ = K-est/E, onde K-est modela complexidade de Kolmogorov e E o gasto energético.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DavidEpsilonSimulation;
