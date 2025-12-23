export const PRIORITY_MATRIX = [
  { type: '高', color: 'bg-red-100 border-red-500 text-red-700', desc: '情绪激动 / 高价值(≥1000) / 批量(≥5)', action: '立即处理' },
  { type: '中', color: 'bg-orange-100 border-orange-500 text-orange-700', desc: '一次催促 / 中价值(200-999) / 2-4单', action: '4小时内' },
  { type: '低', color: 'bg-blue-100 border-blue-500 text-blue-700', desc: '无催促 / 低价值(<200) / 单件', action: '24小时内' },
  { type: '批量', color: 'bg-gray-100 border-gray-500 text-gray-700', desc: '同一SKU多单异常', action: '上报主管' },
];

export const PROBLEM_TYPES = [
  {
    id: 'quality',
    label: '商品质量问题',
    examples: ['破损', '裂痕', '功能故障'],
    standard: '图片显示明显裂痕/故障视频',
    script: '亲，根据您提供的照片，我们确认为运输破损，将为您免费换新并承担运费。'
  },
  {
    id: 'logistics',
    label: '物流问题',
    examples: ['延迟', '丢件', '虚假签收'],
    standard: '物流停滞>72小时',
    script: '亲，包裹已超时，我们已催促物流并为您申请5元延迟补偿券。'
  },
  {
    id: 'experience',
    label: '主观体验',
    examples: ['尺寸不合', '不喜欢', '色差'],
    standard: '商品支持7天无理由',
    script: '亲，商品支持7天无理由退货，请保持吊牌完好，寄回后为您极速退款。'
  }
];

export const QUIZ_QUESTIONS = [
  { id: 1, question: "7天无理由退货需满足什么条件？", options: ["商品完好", "吊牌完好", "商品完好且吊牌完好"], correct: 2 },
  { id: 2, question: "客户情绪激动且商品价值高，优先级为？", options: ["低", "中", "高"], correct: 2 },
  { id: 3, question: "发现商家售假，第一步应？", options: ["退款", "冻结保证金并上报", "协商换货"], correct: 1 }
];

export const CHART_DATA = [
  { name: '屏幕划痕', value: 120 },
  { name: '尺码偏大', value: 98 },
  { name: '快递延误', value: 86 },
  { name: '发错颜色', value: 75 },
  { name: '包装破损', value: 65 },
];