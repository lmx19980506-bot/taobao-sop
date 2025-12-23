import React, { useState } from 'react';
import { MessageSquare, Phone, ShoppingBag, User, UploadCloud, AlertCircle, CheckCircle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../lib/utils';

const ChannelCard = ({ icon: Icon, label, color }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg hover:border-[#FF6600] hover:bg-orange-50 cursor-pointer transition-all group">
    <div className={`p-3 rounded-full ${color} text-white mb-2 group-hover:scale-110 transition-transform`}>
      <Icon size={20} />
    </div>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </div>
);

const WorkOrder = () => {
  const [formData, setFormData] = useState({ customerId: '', orderId: '', type: 'return', desc: '', history: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.customerId) newErrors.customerId = '客户ID不能为空';
    if (!formData.orderId) newErrors.orderId = '订单编号不能为空';
    if (!formData.desc) newErrors.desc = '问题描述不能为空';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setIsSubmitted(true);
  };

  const handleFillDemo = () => {
    setFormData({
      customerId: 'tb_88888888',
      orderId: '202406152200114400',
      type: 'quality',
      desc: '收到的茶壶把手处有明显裂痕，外包装箱也有挤压痕迹。',
      history: '买家6月15日旺旺留言称收到货就这样，要求换货。'
    });
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">售后来源渠道</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ChannelCard icon={MessageSquare} label="千牛/旺旺" color="bg-blue-500" />
          <ChannelCard icon={ShoppingBag} label="淘宝APP" color="bg-[#FF6600]" />
          <ChannelCard icon={Phone} label="电话热线" color="bg-green-500" />
          <ChannelCard icon={User} label="线下/其他" color="bg-gray-500" />
        </div>
      </section>
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2"><FileTextIcon /> 新建售后工单</h2>
          <button onClick={handleFillDemo} className="text-sm text-[#FF6600] hover:underline font-medium">演示：一键填入模拟数据</button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">客户ID <span className="text-red-500">*</span></label>
              <input type="text" value={formData.customerId} onChange={e => setFormData({...formData, customerId: e.target.value})} className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]/20 transition-all", errors.customerId ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#FF6600]")} placeholder="例如: tb_123456" />
              {errors.customerId && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.customerId}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">订单编号 <span className="text-red-500">*</span></label>
              <input type="text" value={formData.orderId} onChange={e => setFormData({...formData, orderId: e.target.value})} className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]/20 transition-all", errors.orderId ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#FF6600]")} placeholder="2024..." />
              {errors.orderId && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.orderId}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1">问题类型 <span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-4">
              {['return', 'exchange', 'refund_only'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="type" checked={formData.type === type} onChange={() => setFormData({...formData, type})} className="w-4 h-4 text-[#FF6600] focus:ring-[#FF6600]" />
                  <span className="text-sm text-gray-700">{type === 'return' ? '退货退款' : type === 'exchange' ? '换货' : '仅退款'}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1">问题描述 <span className="text-red-500">*</span></label>
            <textarea value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} rows={4} className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]/20 transition-all resize-none", errors.desc ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#FF6600]")} placeholder="请详细描述客户遇到的问题..." />
            {errors.desc && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.desc}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">凭证上传</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:border-[#FF6600] hover:bg-orange-50 transition-colors cursor-pointer">
              <UploadCloud size={32} className="mb-2" />
              <span className="text-xs">点击或拖拽上传图片/视频 (支持jpg, png, mp4)</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">历史沟通记录</label>
            <textarea value={formData.history} onChange={e => setFormData({...formData, history: e.target.value})} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]/20 focus:border-[#FF6600] transition-all resize-none" placeholder="粘贴关键沟通记录..." />
          </div>
          <div className="pt-4 flex justify-end">
            <button type="submit" className="bg-[#FF6600] text-white px-8 py-2.5 rounded-md font-medium hover:bg-[#E65C00] transition-colors shadow-md active:scale-95 transform">生成工单</button>
          </div>
        </form>
      </section>
      <Dialog.Root open={isSubmitted} onOpenChange={setIsSubmitted}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 animate-fade-in" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-6 w-[90vw] max-w-md z-50 animate-scale-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600"><CheckCircle size={32} /></div>
              <Dialog.Title className="text-xl font-bold text-gray-900 mb-2">工单创建成功</Dialog.Title>
              <Dialog.Description className="text-gray-500 mb-6">工单号: WO-{Math.floor(Math.random() * 1000000)}<br/>系统已自动分派至相应处理队列。</Dialog.Description>
              <div className="w-full bg-gray-50 p-4 rounded-lg text-left text-sm text-gray-600 mb-6">
                <p><span className="font-bold">客户:</span> {formData.customerId}</p>
                <p><span className="font-bold">类型:</span> {formData.type === 'return' ? '退货退款' : '其他'}</p>
                <p className="truncate"><span className="font-bold">描述:</span> {formData.desc}</p>
              </div>
              <button onClick={() => { setIsSubmitted(false); setFormData({ customerId: '', orderId: '', type: 'return', desc: '', history: '' }); }} className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-md font-medium hover:bg-gray-200 transition-colors">继续创建</button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
const FileTextIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>);
export default WorkOrder;