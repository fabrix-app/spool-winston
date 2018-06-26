const assert = require('assert')

describe('Trailspool', () => {
  let spool
  before(() => {
    spool = global.app.spools.winston
  })
  it('should be loaded into the app.spools collection', () => {
    assert(spool)
  })
  it('should create a logger once fabrix is configured', () => {
    assert(spool.logger)
  })
  describe('#initialize', () => {
    const oldWrite = process.stdout.write.bind(process.stdout)
    afterEach(() => {
      //process.stdout.write = oldWrite
    })
    it('app.log.silly', () => {
      global.app.log.silly('123')
    })
    it('app.log.debug', () => {
      global.app.log.debug('234')
    })
    it('app.log.info', () => {
      global.app.log.info('345')
    })
    it('app.log.warn', () => {
      global.app.log.debug('456')
    })
    it('app.log.error', () => {
      global.app.log.error('567')
    })
  })
})
