import React from 'react';
import { ShieldAlert, Lock, AlertOctagon } from 'lucide-react';

const RiskControl = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Lock className="text-blue-500" /> 信息脱敏规范</h2>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
            <p className="text-sm text-blue-800 mb-2 font-bold">严禁在截图或外部沟通中泄露客户隐私！</p>
            <div className="space-y-2 text-sm text-blue-700">
              <div className="flex justify-between bg-white p-2 rounded border border-blue-200"><span>手机号</span><span className="font-mono">138****1234</span></div>
              <div className="flex justify-between bg-white p-2 rounded border border-blue-200"><span>姓名</span><span className="font-mono">张*三</span></div>
              <div className="flex justify-between bg-white p-2 rounded border border-blue-200"><span>地址</span><span className="font-mono">浙江省杭州市****小区</span></div>
            </div>
          </div>
        </section>
        <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><ShieldAlert className="text-red-500" /> 严重违规处理流程</h2>
          <div className="flex items-center justify-between text-center">
            <div className="flex-1"><div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 text-red-600"><AlertOctagon /></div><p className="text-xs font-bold">发现售假/欺诈</p></div>
            <div className="h-0.5 bg-gray-300 w-8"></div>
            <div className="flex-1"><div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-600"><Lock /></div><p className="text-xs font-bold">冻结保证金</p></div>
            <div className="h-0.5 bg-gray-300 w-8"></div>
            <div className="flex-1"><div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-600"><ShieldAlert /></div><p className="text-xs font-bold">上报平台</p></div>
          </div>
          <div className="mt-6 p-3 bg-red-50 text-red-700 text-xs rounded border border-red-100">注意：涉及法律风险的违规行为，客服无权私下协商，必须立即上报风控组。</div>
        </section>
      </div>
      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-4">年度扣分日历 (2024)</h2>
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`p-2 rounded border text-center ${i === 5 ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-100'}`}>
              <div className="text-xs text-gray-500 mb-1">{i + 1}月</div>
              <div className={`text-lg font-bold ${i === 5 ? 'text-red-600' : 'text-gray-400'}`}>{i === 5 ? '-12' : '0'}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2 text-right">* 6月份因大促期间响应超时扣分严重</p>
      </section>
    </div>
  );
};
export default RiskControl;