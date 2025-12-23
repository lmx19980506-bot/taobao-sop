import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Clock, Copy, AlertTriangle } from 'lucide-react';
import { PRIORITY_MATRIX, PROBLEM_TYPES } from '../data/mockData';
import { cn } from '../lib/utils';

const Classification = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2"><span className="w-1 h-6 bg-[#FF6600] rounded-full"></span>问题分类速查</h2>
        <Tabs.Root defaultValue="quality">
          <Tabs.List className="flex border-b border-gray-200 mb-6">
            {PROBLEM_TYPES.map(type => (
              <Tabs.Trigger key={type.id} value={type.id} className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-[#FF6600] border-b-2 border-transparent data-[state=active]:border-[#FF6600] data-[state=active]:text-[#FF6600] transition-all">{type.label}</Tabs.Trigger>
            ))}
          </Tabs.List>
          {PROBLEM_TYPES.map(type => (
            <Tabs.Content key={type.id} value={type.id} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">典型场景</h4>
                  <div className="flex flex-wrap gap-2">{type.examples.map(ex => <span key={ex} className="px-2 py-1 bg-white text-gray-600 text-xs rounded border border-gray-200">{ex}</span>)}</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2">判定标准</h4>
                  <p className="text-sm text-orange-700">{type.standard}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 relative group">
                  <h4 className="font-bold text-blue-800 mb-2">标准话术</h4>
                  <p className="text-sm text-blue-700 pr-8">{type.script}</p>
                  <button className="absolute top-4 right-4 text-blue-400 hover:text-blue-600" title="复制话术" onClick={() => navigator.clipboard.writeText(type.script)}><Copy size={16} /></button>
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </section>
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2"><span className="w-1 h-6 bg-red-500 rounded-full"></span>优先级判定模型 (四象限)</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"><Clock size={14} /><span>响应时效倒计时演示: <span className="font-mono text-red-500 font-bold">03:59:59</span></span></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
          {PRIORITY_MATRIX.map((item) => (
            <div key={item.type} className={cn("relative p-6 rounded-xl border-2 flex flex-col justify-between transition-all hover:scale-[1.01] cursor-pointer", item.color)}>
              <div>
                <div className="flex items-center justify-between mb-2"><h3 className="text-2xl font-bold">{item.type}优先级</h3>{item.type === '高' && <AlertTriangle className="animate-pulse" />}</div>
                <p className="font-medium opacity-90">{item.desc}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-black/10 flex justify-between items-center"><span className="text-sm font-bold opacity-75">处理时效</span><span className="text-lg font-bold">{item.action}</span></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Classification;