import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { AlertTriangle, Globe, Gift, ChevronDown } from 'lucide-react';

const SpecialCase = () => {
  const cases = [
    { id: 'c1', title: '不小心确认收货', icon: AlertTriangle, desc: '买家误操作点击了确认收货，但实际未收到货或需要退货。', steps: ['安抚买家：告知即使确认收货，15天内仍可申请售后。', '引导入口：订单详情页 -> 申请售后 -> 选择对应类型。', '注意：若超过15天，需引导买家提供支付宝账号进行线下打款（需主管审批）。'] },
    { id: 'c2', title: '海外订单退货', icon: Globe, desc: '港澳台及海外集运订单的售后处理。', steps: ['首选方案：建议买家在当地自行处理，我方提供一定金额补偿（如退款30%）。', '次选方案：若必须退货，需买家自行寄回国内仓，运费通常由买家承担（除非质量问题）。', '集运仓拒收：若货物还在集运仓，联系集运商拦截退回。'] },
    { id: 'c3', title: '定制/生鲜/虚拟商品', icon: Gift, desc: '不支持7天无理由退货的特殊品类。', steps: ['原则：除非质量问题，否则不支持退换。', '生鲜：签收后24小时内反馈有效，需提供坏果与快递面单合照。', '定制：生产前可退，生产中扣除材料费，发货后不退。'] }
  ];
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><AlertTriangle className="text-yellow-500" /> 特殊情况处理机制</h1>
      <Accordion.Root type="multiple" className="space-y-4">
        {cases.map((c) => (
          <Accordion.Item key={c.id} value={c.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <Accordion.Header className="flex"><Accordion.Trigger className="flex-1 p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"><div className="flex items-center gap-3"><div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg group-hover:bg-yellow-100 transition-colors"><c.icon size={20} /></div><div className="text-left"><h3 className="font-bold text-gray-800">{c.title}</h3><p className="text-xs text-gray-500 mt-0.5">{c.desc}</p></div></div><ChevronDown className="text-gray-400 group-data-[state=open]:rotate-180 transition-transform" /></Accordion.Trigger></Accordion.Header>
            <Accordion.Content className="AccordionContent bg-gray-50 px-4 pb-4"><div className="pt-2 pl-12 border-l-2 border-gray-200 ml-6 space-y-3">{c.steps.map((step, idx) => (<div key={idx} className="relative"><div className="absolute -left-[25px] top-1.5 w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></div><p className="text-sm text-gray-700">{step}</p></div>))}</div></Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};
export default SpecialCase;