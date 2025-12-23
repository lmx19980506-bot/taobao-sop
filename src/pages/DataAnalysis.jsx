import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CHART_DATA, QUIZ_QUESTIONS } from '../data/mockData';
import { CheckCircle, XCircle, Trophy } from 'lucide-react';
import { cn } from '../lib/utils';

const DataAnalysis = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (index) => {
    setSelectedOption(index);
    setShowResult(true);
    if (index === QUIZ_QUESTIONS[currentQuiz].correct) setScore(s => s + 10);
  };

  const nextQuestion = () => {
    if (currentQuiz < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuiz(c => c + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-6">本月高频售后问题 Top 5</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: '#f5f5f5'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>{CHART_DATA.map((entry, index) => (<Cell key={`cell-${index}`} fill={index === 0 ? '#FF6600' : '#FFB266'} />))}</Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center">
          <div className="relative w-40 h-40 mb-4">
            <svg className="w-full h-full transform -rotate-90"><circle cx="80" cy="80" r="70" stroke="#f3f4f6" strokeWidth="12" fill="transparent" /><circle cx="80" cy="80" r="70" stroke="#00CC66" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeDashoffset="35" strokeLinecap="round" /></svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-4xl font-bold text-gray-800">92%</span><span className="text-sm text-gray-500">客户满意度</span></div>
          </div>
          <p className="text-sm text-gray-500 px-4">您的服务评价优于全网 <span className="text-[#FF6600] font-bold">85%</span> 的商家。继续保持！</p>
        </div>
      </section>
      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2"><Trophy className="text-yellow-500" /> 业务知识每日一测</h2>
          <span className="text-sm text-gray-500">进度: {quizFinished ? QUIZ_QUESTIONS.length : currentQuiz + 1} / {QUIZ_QUESTIONS.length}</span>
        </div>
        {!quizFinished ? (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">{QUIZ_QUESTIONS[currentQuiz].question}</h3>
            <div className="space-y-3">
              {QUIZ_QUESTIONS[currentQuiz].options.map((opt, idx) => {
                let stateClass = "border-gray-200 hover:bg-gray-50";
                if (showResult) {
                  if (idx === QUIZ_QUESTIONS[currentQuiz].correct) stateClass = "bg-green-50 border-green-500 text-green-700";
                  else if (idx === selectedOption) stateClass = "bg-red-50 border-red-500 text-red-700";
                  else stateClass = "border-gray-200 opacity-50";
                } else if (selectedOption === idx) {
                  stateClass = "border-[#FF6600] bg-orange-50";
                }
                return (
                  <button key={idx} disabled={showResult} onClick={() => handleAnswer(idx)} className={cn("w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between", stateClass)}>
                    <span>{opt}</span>
                    {showResult && idx === QUIZ_QUESTIONS[currentQuiz].correct && <CheckCircle size={20} className="text-green-600" />}
                    {showResult && idx === selectedOption && idx !== QUIZ_QUESTIONS[currentQuiz].correct && <XCircle size={20} className="text-red-600" />}
                  </button>
                );
              })}
            </div>
            {showResult && (<div className="mt-6 flex justify-end"><button onClick={nextQuestion} className="bg-[#FF6600] text-white px-6 py-2 rounded-full font-medium hover:bg-[#E65C00] transition-colors">{currentQuiz < QUIZ_QUESTIONS.length - 1 ? '下一题' : '查看结果'}</button></div>)}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600"><Trophy size={40} /></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">测试完成!</h3>
            <p className="text-gray-600 mb-6">您的得分是: <span className="text-[#FF6600] font-bold text-xl">{score}</span> / {QUIZ_QUESTIONS.length * 10}</p>
            <button onClick={() => { setQuizFinished(false); setCurrentQuiz(0); setScore(0); setShowResult(false); setSelectedOption(null); }} className="text-[#FF6600] hover:underline">重新测试</button>
          </div>
        )}
      </section>
    </div>
  );
};
export default DataAnalysis;