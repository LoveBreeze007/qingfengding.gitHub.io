import React from 'react';

const ChineseProfile: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
                 <h2 className="text-2xl font-bold mb-4">个人简介</h2>
                <ul className="space-y-4 text-base leading-relaxed text-gray-800 list-none">
                    <li>
                    <span className="font-bold">丁庆锋</span>，应用经济学博士研究生。
                    </li>
                    <li>
                    <span className="font-bold">单位：</span>中南大学 (2021–2026)
                    </li>
                    <li>
                    <span className="font-bold">研究领域：</span>行为金融、公司金融、数字经济、环境经济学、家庭金融、人工智能
                    </li>
                    <li>
                    <span className="font-bold">邮箱：</span> qingfeng.ding@163.com
                    </li>
                </ul>
                
                <h3 className="text-xl font-bold mt-8 mb-4 border-b pb-2">科研经历 (部分)</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>2025-2028: 国家自然科学基金面上项目，有限关注视角下生成式人工智能对金融市场的影响研究，参与。</li>
                    <li>2020-2024: 国家自然科学基金重点国际（地区）合作研究项目，互联网环境下基于行为的消费信贷问题研究，参与。</li>
                </ul>
            </div>
             <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                <div className="relative">
                    <img 
                    src="https://picsum.photos/300/400" 
                    alt="Qingfeng Ding" 
                    className="shadow-lg object-cover w-[200px] h-[260px] bg-gray-100"
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ChineseProfile;
