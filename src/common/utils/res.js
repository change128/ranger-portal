// 对话应答 输入一个字符串，匹配指定规则，返回一个字符串
const talk = (str) => {
  let res = '';
  if (!str) return res;
  // 匹配多条规则
  const rules = [
    {
      reg: /你好/,
      res: '你好呀',
    },
    {
      reg: /今天几号/,
      res: `今天是${new Date().getDate()}号`,
    },
    {
      reg: /今天星期几/,
      res: `今天是星期${
        ['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]
      }`,
    },
    {
      reg: /现在几点/,
      res: `现在是${new Date().getHours()}点`,
    },
    {
      reg: /现在几分/,
      res: `现在是${new Date().getMinutes()}分`,
    },
  ];
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    if (str.match(rule.reg)) res += rule.res;
  }
  return res;
};

console.log(talk('今天几号今天星期几现在几点现在几分'));
