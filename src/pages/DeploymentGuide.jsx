import React, { useState } from 'react';
import { Download, Github, Globe, AlertCircle, CheckCircle2, Copy, Terminal, MousePointer2 } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { getProjectFiles } from '../lib/projectFiles';

const MockScreen = ({ title, children, color = "bg-gray-800" }) => (
  <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md my-4">
    <div className={`${color} px-3 py-2 flex items-center gap-2`}>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
      </div>
      <span className="text-xs text-white/80 font-mono ml-2">{title}</span>
    </div>
    <div className="bg-gray-50 p-4 text-sm font-sans">{children}</div>
  </div>
);

const DeploymentGuide = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const zip = new JSZip();
      const files = getProjectFiles();
      Object.entries(files).forEach(([path, content]) => { zip.file(path, content); });
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "taobao-sop-system.zip");
    } catch (error) {
      console.error("Download failed:", error);
      alert("打包下载失败，请重试");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-4 flex items-center gap-3"><Download className="text-[#FF6600]" /> 系统部署指南</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">已修复 Vercel 部署路径报错问题。下载最新源码包，只需三步，即可拥有团队专属的在线知识库。</p>
          <button onClick={handleDownload} disabled={isDownloading} className="bg-[#FF6600] hover:bg-[#E65C00] text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed hover:scale-105 active:scale-95">
            {isDownloading ? (<>正在打包最新代码...</>) : (<><Download size={20} /> 下载完整源码包 (.zip)</>)}
          </button>
          <p className="text-xs text-gray-400 mt-3">* 包含修复后的 App.jsx 及完整 React 源代码</p>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#FF6600]/10 to-transparent pointer-events-none"></div>
        <Terminal className="absolute right-8 bottom-8 text-white/5 w-32 h-32 rotate-12" />
      </div>

      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-4 mb-6"><div className="w-10 h-10 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border border-gray-200">1</div><h2 className="text-xl font-bold text-gray-800">创建 GitHub 仓库</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-sm text-gray-600">
            <p>1. 登录 <a href="https://github.com" target="_blank" className="text-blue-500 hover:underline">GitHub</a>，点击右上角 <span className="inline-block px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 font-mono">+</span> 号，选择 <strong>New repository</strong>。</p>
            <p>2. 填写仓库信息（如下图所示）：</p>
            <ul className="list-disc list-inside pl-2 space-y-1"><li>Repository name: <code>taobao-sop</code></li><li>选择 <strong>Public</strong> (公开)</li><li>勾选 <strong>Add a README file</strong> (可选)</li></ul>
            <p>3. 点击底部的 <strong>Create repository</strong> 按钮。</p>
          </div>
          <div>
            <MockScreen title="Create a new repository">
              <div className="space-y-3">
                <div><label className="block text-xs font-bold text-gray-700 mb-1">Repository name <span className="text-red-500">*</span></label><div className="border border-gray-300 rounded px-2 py-1.5 bg-white w-3/4 text-gray-800">taobao-sop</div></div>
                <div className="space-y-2"><div className="flex items-start gap-2"><div className="w-4 h-4 rounded-full border-[5px] border-blue-500 mt-0.5"></div><div><div className="font-bold text-gray-800">Public</div><div className="text-xs text-gray-500">Anyone on the internet can see this repository</div></div></div></div>
                <div className="pt-2"><button className="bg-green-600 text-white px-3 py-1.5 rounded text-xs font-bold">Create repository</button></div>
              </div>
            </MockScreen>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-4 mb-6"><div className="w-10 h-10 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border border-gray-200">2</div><h2 className="text-xl font-bold text-gray-800">上传代码文件</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-sm text-gray-600">
            <p>1. 解压您下载的 <code>taobao-sop-system.zip</code> 文件。</p>
            <p>2. 在刚创建的 GitHub 仓库页面，点击 <strong>Add file</strong> -{'>'} <strong>Upload files</strong>。</p>
            <p>3. 将解压出来的<strong>所有文件和文件夹</strong>（包括 src, public, package.json 等）直接拖入上传区域。</p>
            <p>4. 等待进度条走完，在底部 "Commit changes" 处点击绿色按钮提交。</p>
          </div>
          <div>
            <MockScreen title="Upload files">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-gray-500 bg-gray-50">
                <div className="mb-2 text-gray-400"><Copy size={32} /></div>
                <p className="text-center">Drag files here to add them to your repository</p>
                <p className="text-xs text-gray-400 mt-2">Or choose your files</p>
              </div>
              <div className="mt-4 border-t border-gray-200 pt-3"><button className="bg-green-600 text-white px-3 py-1.5 rounded text-xs font-bold">Commit changes</button></div>
            </MockScreen>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-[#FF6600]">
        <div className="flex items-center gap-4 mb-6"><div className="w-10 h-10 bg-[#FF6600] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">3</div><h2 className="text-xl font-bold text-gray-800">一键部署 (推荐 Vercel)</h2></div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 text-sm text-blue-800 flex gap-3"><AlertCircle className="shrink-0 mt-0.5" size={18} /><div><strong>为什么推荐 Vercel？</strong><p className="mt-1 opacity-90">GitHub Pages 配置 React 项目较复杂（需设置 Actions）。Vercel 是 React 官方推荐的部署平台，完全免费且自动化，能自动识别本项目结构。</p></div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-sm text-gray-600">
            <p>1. 打开 <a href="https://vercel.com" target="_blank" className="text-blue-500 hover:underline">Vercel.com</a>，使用 <strong>GitHub 账号登录</strong>。</p>
            <p>2. 点击 <strong>Add New...</strong> -{'>'} <strong>Project</strong>。</p>
            <p>3. 在列表中找到 <code>taobao-sop</code> 仓库，点击 <strong>Import</strong>。</p>
            <p>4. 在配置页面直接点击 <strong>Deploy</strong>（无需修改任何设置）。</p>
            <p>5. 等待约 1 分钟，烟花绽放后，您将获得一个永久访问链接！</p>
          </div>
          <div>
            <MockScreen title="Import Project" color="bg-black">
              <div className="flex items-center justify-between mb-4 border border-gray-200 rounded p-3 bg-white">
                <div className="flex items-center gap-3"><Github size={20} /><span className="font-bold text-gray-800">taobao-sop</span></div>
                <button className="bg-black text-white px-3 py-1 rounded text-xs font-bold">Import</button>
              </div>
              <div className="bg-white border border-gray-200 rounded p-4">
                <div className="text-xs font-bold text-gray-500 mb-2 uppercase">Framework Preset</div>
                <div className="border border-gray-300 rounded px-2 py-1.5 text-gray-800 text-xs mb-4 bg-gray-50">Vite</div>
                <button className="w-full bg-black text-white py-2 rounded text-sm font-bold">Deploy</button>
              </div>
            </MockScreen>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Terminal size={18} /> 求助开发团队消息模板</h3>
        <div className="bg-white p-4 rounded border border-gray-200 relative group shadow-sm">
          <pre className="text-sm text-gray-600 whitespace-pre-wrap font-sans leading-relaxed">
{`你好！
我这边准备把咱们做的淘宝售后 SOP 系统部署上线，方便团队日常使用。
为了能自己完成部署，麻烦你帮忙提供一下完整的网页文件包（包含 index.html 和相关资源文件，打包成 .zip 格式即可）。
这个系统不需要后端或数据库，纯静态网页，我打算用 GitHub Pages 免费托管，部署后大家都能通过一个链接直接访问使用。
如果方便的话，也请确认下是否已经有一个现成的在线预览链接？如果没有，我就按上面方式自己部署啦！
非常感谢，辛苦啦 😊`}
          </pre>
          <button className="absolute top-4 right-4 text-gray-400 hover:text-[#FF6600] transition-colors p-2 hover:bg-orange-50 rounded" onClick={() => navigator.clipboard.writeText(`你好！\n我这边准备把咱们做的淘宝售后 SOP 系统部署上线...`)} title="复制模板"><Copy size={18} /></button>
        </div>
      </section>
    </div>
  );
};
export default DeploymentGuide;