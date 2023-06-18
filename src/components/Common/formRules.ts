export const formRules = {
  number: {
    pattern: /^[0-9]*$/,
    message: '只能输入数字',
  },
  letter: {
    pattern: /^[a-zA-Z]*$/,
    message: '只能输入字母',
  },

  chinese: {
    pattern: /^[\u4e00-\u9fa5]*$/,
    message: '只能输入中文',
  },
  email: {
    pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,
    message: '邮箱格式不正确',
  },
  phone: {
    pattern: /^1[3456789]\d{9}$/,
    message: '手机号格式不正确',
  },
  idCard: {
    pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    message: '身份证格式不正确',
  },
  xss: {
    pattern: /<script.*?>.*?<\/script>/,
    message: '请勿输入非法字符',
  },
  password: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
    message:
      '密码必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-16之间',
  },
};
