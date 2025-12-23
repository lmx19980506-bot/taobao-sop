import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Search, Scale, Package, Banknote, ChevronDown, Copy, MapPin, Truck } from 'lucide-react';
import { cn } from '../lib/utils';

const StepHeader = ({ icon: Icon, title, step, isOpen }) => (
  <div className="flex items-center gap-4 w-full">
    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors", isOpen ? "bg-[#FF6600] text-white" : "bg-gray-200 text-gray-500")}>{step}</div>
    <div className="flex items-center gap-3">
      <div className={cn("p-2 rounded-lg transition-colors", isOpen ? "bg-orange-100 text-[#FF6600]" : "bg-gray-100 text-gray-500")}><Icon size={20} /></div>
      <span className={cn("text-lg font-bold transition-colors", isOpen ? "text-gray-900" : "text-gray-500")}>{title}</span>
    </div>
    <ChevronDown className={cn("ml-auto text-gray-400 transition-transform duration-300", isOpen && "rotate-180 text-[#FF6600]")} />
  </div>
);

const Process = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8"><h1 className="text-2xl font-bold text-gray-800 mb-2">标准售后处理流程</h1><p className="text-gray-500">请严格按照以下步骤执行，确保每个环节都有据可查。</p></div>
      <Accordion.Root type="single" defaultValue="item-1" collapsible className="space-y-4">
        <Accordion.Item value="item-1" className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-[#FF6600]/20 data-[state=open]:border-[#FF6600]">
          <Accordion.Header className="flex"><Accordion.Trigger className="flex-1 p-4 hover:bg-gray-50 transition-all outline-none group"><StepHeader icon={Search} title="信息验证" step="1" isOpen={true} /></Accordion.Trigger></Accordion.Header>
          <Accordion.Content className="AccordionContent bg-gray-50/50">
            <div className="p-6 pt-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{['核对订单信息', '验证物流状态', '审核凭证真实性'].map((task, i) => (<div key={i} className="bg-white p-3 rounded border border-gray-200 flex items-center justify-between"><span className="text-sm font-medium text-gray-700">{task}</span><input type="checkbox" className="accent-[#FF6600] w-4 h-4" /></div>))}</div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex justify-between items-center"><p className="text-sm text-blue-800"><span className="font-bold">话术提示:</span> "亲，这边正在为您核实订单详情，请稍等片刻..."</p><button className="text-blue-600 hover:bg-blue-100 p-2 rounded"><Copy size={16}/></button></div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-[#FF6600]/20 data-[state=open]:border-[#FF6600]">
          <Accordion.Header className="flex"><Accordion.Trigger className="flex-1 p-4 hover:bg-gray-50 transition-all outline-none group"><StepHeader icon={Scale} title="方案决策" step="2" /></Accordion.Trigger></Accordion.Header>
          <Accordion.Content className="AccordionContent bg-gray-50/50">
            <div className="p-6 pt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer"><h4 className="font-bold text-green-800 mb-2">7天无理由</h4><p className="text-xs text-green-700 mb-3">商品完好，吊牌未摘</p><button className="w-full py-1.5 bg-green-600 text-white text-xs rounded hover:bg-green-700">同意退货</button></div>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer"><h4 className="font-bold text-yellow-800 mb-2">质量问题</h4><p className="text-xs text-yellow-700 mb-3">破损/污渍/功能故障</p><button className="w-full py-1.5 bg-yellow-600 text-white text-xs rounded hover:bg-yellow-700">换货/退款+运费</button></div>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer"><h4 className="font-bold text-red-800 mb-2">卖家责任</h4><p className="text-xs text-red-700 mb-3">发错货/漏发/描述不符</p><button className="w-full py-1.5 bg-red-600 text-white text-xs rounded hover:bg-red-700">补发+补偿</button></div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3" className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-[#FF6600]/20 data-[state=open]:border-[#FF6600]">
          <Accordion.Header className="flex"><Accordion.Trigger className="flex-1 p-4 hover:bg-gray-50 transition-all outline-none group"><StepHeader icon={Package} title="执行操作" step="3" /></Accordion.Trigger></Accordion.Header>
          <Accordion.Content className="AccordionContent bg-gray-50/50">
            <div className="p-6 pt-2 space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-start gap-3"><MapPin className="text-[#FF6600] mt-1" size={20} /><div><h4 className="font-bold text-gray-800">华东退货仓</h4><p className="text-sm text-gray-600 mt-1">浙江省杭州市余杭区文一西路969号淘宝城1号楼</p><p className="text-sm text-gray-500">收件人: 淘宝售后组 0571-12345678</p></div></div>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium flex items-center gap-2"><Copy size={14} /> 复制地址</button>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-center gap-4"><div className="bg-white p-2 rounded border border-orange-200"><Truck className="text-[#FF6600]" size={24} /></div><div><h4 className="font-bold text-orange-800">推荐使用菜鸟裹裹</h4><p className="text-sm text-orange-700">上门取件，运费险直接抵扣，无需垫付。</p></div></div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-4" className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-[#FF6600]/20 data-[state=open]:border-[#FF6600]">
          <Accordion.Header className="flex"><Accordion.Trigger className="flex-1 p-4 hover:bg-gray-50 transition-all outline-none group"><StepHeader icon={Banknote} title="退款与闭环" step="4" /></Accordion.Trigger></Accordion.Header>
          <Accordion.Content className="AccordionContent bg-gray-50/50">
            <div className="p-6 pt-2">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"></div>
                {[{ label: '仓库签收', status: 'done' }, { label: '确认完好', status: 'active' }, { label: '财务打款', status: 'pending' }, { label: '工单完成', status: 'pending' }].map((s, i) => (
                  <div key={i} className="flex flex-col items-center bg-gray-50 px-2">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 mb-2", s.status === 'done' ? "bg-green-500 border-green-500 text-white" : s.status === 'active' ? "bg-white border-[#FF6600] text-[#FF6600]" : "bg-white border-gray-300 text-gray-400")}>{i + 1}</div>
                    <span className={cn("text-xs font-medium", s.status === 'active' ? "text-[#FF6600]" : "text-gray-600")}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end gap-3"><button className="px-4 py-2 text-red-500 hover:bg-red-50 rounded text-sm font-medium">异常上报</button><button className="px-4 py-2 bg-[#FF6600] text-white rounded hover:bg-[#E65C00] text-sm font-medium shadow-sm">确认退款</button></div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};
export default Process;