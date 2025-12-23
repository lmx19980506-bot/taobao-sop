import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Home, FileText, Tags, GitMerge, AlertTriangle, ShieldCheck, BarChart2, Download } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_ITEMS = [
  { path: '/', label: '首页', icon: Home },
  { path: '/work-order', label: '工单创建', icon: FileText },
  { path: '/classification', label: '问题分类', icon: Tags },
  { path: '/process', label: '标准流程', icon: GitMerge },
  { path: '/special', label: '特殊情况', icon: AlertTriangle },
  { path: '/risk', label: '风控合规', icon: ShieldCheck },
  { path: '/data', label: '数据复盘', icon: BarChart2 },
  { path: '/deploy', label: '部署指南', icon: Download },
];

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const getBreadcrumb = () => {
    const item = NAV_ITEMS.find(i => i.path === currentPath);
    return item ? `首页 > ${item.label}` : '首页';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6600] rounded-md flex items-center justify-center text-white font-bold">淘</div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">售后 SOP 系统</span>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className={cn("px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2", currentPath === item.path ? "text-[#FF6600] bg-[#FFF0E6]" : "text-gray-600 hover:text-[#FF6600] hover:bg-gray-50")}>
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="relative w-48 sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input type="text" placeholder="搜索流程、话术..." className="w-full pl-9 pr-4 py-1.5 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-[#FF6600] focus:bg-white transition-all outline-none" />
        </div>
      </header>
      <div className="px-4 py-3 text-xs text-gray-500 bg-[#FAFAFA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto">{getBreadcrumb()}</div>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-lg">导航菜单</span>
              <button onClick={() => setIsSidebarOpen(false)}><X size={20} /></button>
            </div>
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsSidebarOpen(false)} className={cn("px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-3", currentPath === item.path ? "text-white bg-[#FF6600]" : "text-gray-600 hover:bg-gray-100")}>
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
          </aside>
        </div>
      )}
      <main className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full">{children}</main>
    </div>
  );
};
export default Layout;