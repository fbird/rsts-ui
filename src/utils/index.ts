import { ref } from "vue"


/**
 * @description: 防抖函数-定时器版
 * @param {Function} fn
 * @param {Number} wait
 * @param {Boolean} immediate
 * @return {*}
 * @example:
 */
export const debounce = (fn: Function, wait: number = 300, immediate: boolean = true): any => {
  let timer: number | null, result: any

  const debounced = function (this: any) {
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments

    if (timer) clearTimeout(timer)
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timer
      timer = setTimeout(function () {
        timer = null
      }, wait)
      if (callNow) result = fn.apply(context, args)
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, wait)
    }

    return result
  }

  return debounced
}

/**
 * @description: 节流函数
 * @param {Function} fn
 * @param {Number} delay
 * @return {*}
 * @example:
 */
export const throttle = (fn: Function, delay: number = 300): any => {
  let last = 0,
    timer: number | null = null

  return function (this: any) {
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    const now = +new Date()

    clearTimeout(timer as number)
    if (now - last < delay) {
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, delay)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

/**
 *
 * @param min 生成随机数
 * @param max
 * @returns
 */
export const generateRandomBytes = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 使用 Promise 包装 setTimeout
export const wait = async (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

// 查找数组元素
export const findLast = (arr: any, callback: any, thisArg: any) => {
  for (let index = arr.length - 1; index >= 0; index--) {
    const value = arr[index]
    if (callback.call(thisArg, value, index, arr)) {
      return value
    }
  }
  return undefined
}


/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export const handleTree = (data: any, id: any, parentId: any, children: any) => {
  let config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children'
  };

  var childrenListMap: { [key: string]: any } = {};
  var nodeIds: { [key: string]: any } = {};
  var tree = [];

  for (let d of data) {
    let parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (let d of data) {
    let parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (let t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o: any) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (let c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
}


/**
 * 提取嵌套数组中所有对象的直接子节点，并将它们平铺到一个新的数组中
 * @param {*} data handleTree() 返回的数据
 * @returns 平铺后的子节点数组
 */
export const extractChildNodes = (data: any[]): any[] => {
  const result: any[] = []
  data.forEach(item => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  return result
}

export const userTypeConverter = (userType: any) => {
  switch (userType) {
    case 0:
      return '系统用户'
    case 1:
      return '活动用户'
    case 2:
      return '访客'
    default:
      return '其他'
  }
}

export const formatDate = (dateStr: any) => {
  const d = new Date(dateStr);

  // en-US 会返回 Sep, 而不是 Sept
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(d);
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}