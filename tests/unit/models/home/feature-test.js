import { moduleForModel, test } from 'ember-qunit'

moduleForModel('feature', '单元测试 | 数据模型 | feature', {
  // Specify the other units that are required for this test.
  needs: []
})

test('定义正确', function(assert) {
  let model = this.subject()
  // let store = this.store()
  assert.ok(!!model, '数据模型可以正确实例化')
})
