import factory, { Tction } from 'src/index';
import { modelWithEffectsState } from '../factorySamples/states';

export const modelWithEffects = factory({
  namespace: 'socketmodelWithoutEffects',
  state: modelWithEffectsState,
  reducers: {
    testNoArguments: (state) => ({ ...state }),
    testOneArguments: (state, action: Tction<string>) => ({ ...state, name: action.payload })
  },
  effects: {
    async testAsyncNoArguments({ asyncPut }) {
      const res = await asyncPut(modelWithEffects.actions.testAsyncNoArguments);
      // 类型错误
      const str: string = res;
      return 1;
    },
    async testAsyncOneArguments({ asyncPut }, action: Tction<string>) {
      const res = await asyncPut(modelWithEffects.actions.testAsyncOneArguments, '');
      // 类型错误
      const str: number = res.name;
      const res2 = await modelWithEffects.actions.doAjax();
      // 类型错误
      const str2: number = res2.name;
      return { name: 'name' };
    },
    *doAjax(): Iterator<{}, { name: string }, any> {
      yield 1;
      return { name: 'name' };
    }
  }
});

// 测试 TYPES，不应出错
const {
  TYPES: { testNoArguments, testOneArguments, testAsyncNoArguments, testAsyncOneArguments }
} = modelWithEffects;

let StringA: string = testNoArguments;
StringA = testOneArguments;
StringA = testAsyncNoArguments;
StringA = testAsyncOneArguments;