import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Tags, GitMerge, AlertTriangle, ShieldCheck, BarChart2, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { getImageUrl } from '../lib/utils';

const ModuleCard = ({ to, icon: Icon, title, desc, color }) => (
  <Link to={to} className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col h-full">
    <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center justify-between">
      {title}
      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
    </h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </Link>
);

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#FF6600] to-[#FF9933] text-white p-8 sm:p-12">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">淘宝售后标准作业流程系统</h1>
          <p className="text-white/90 text-lg mb-8">专业、高效、合规。为客服团队提供一站式售后解决方案，降低沟通成本，提升客户满意度。</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/work-order" className="bg-white text-[#FF6600] px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-lg">立即开始处理</Link>
            <Link to="/process" className="bg-[#FF6600]/50 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#FF6600]/70 transition-colors">查看标准流程</Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
          <img src={getImageUrl('customer service team', 800, 600)} alt="Background" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-full"><Clock size={20} /></div>
          <div><div className="text-2xl font-bold text-gray-800">36h</div><div className="text-xs text-gray-500">平均处理时长</div></div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-green-50 text-green-600 rounded-full"><CheckCircle2 size={20} /></div>
          <div><div className="text-2xl font-bold text-gray-800">92%</div><div className="text-xs text-gray-500">客户满意度</div></div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-orange-50 text-orange-600 rounded-full"><AlertTriangle size={20} /></div>
          <div><div className="text-2xl font-bold text-gray-800">12</div><div className="text-xs text-gray-500">待处理高优工单</div></div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-[#FF6600] pl-3">核心功能模块</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ModuleCard to="/work-order" icon={FileText} title="工单创建" desc="快速录入售后问题，智能识别必填项，一键生成标准工单。" color="bg-blue-500" />
          <ModuleCard to="/classification" icon={Tags} title="问题分类 & 优先级" desc="四象限优先级判定模型，快速定位问题类型与处理时效。" color="bg-purple-500" />
          <ModuleCard to="/process" icon={GitMerge} title="标准处理流程" desc="验证、决策、执行、闭环。交互式步骤指引，确保操作规范。" color="bg-[#FF6600]" />
          <ModuleCard to="/special" icon={AlertTriangle} title="特殊情况处理" desc="针对海外订单、定制商品等复杂场景的专项处理方案。" color="bg-yellow-500" />
          <ModuleCard to="/risk" icon={ShieldCheck} title="风控与合规" desc="信息脱敏规范、违规责任界定及年度扣分预警。" color="bg-red-500" />
          <ModuleCard to="/data" icon={BarChart2} title="数据复盘 & 培训" desc="售后数据仪表盘展示，话术库查询及业务知识测验。" color="bg-green-500" />
        </div>
      </div>
    </div>
  );
};
export default Home;