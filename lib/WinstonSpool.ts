import { Spool } from '@fabrix/fabrix/dist/common'
import * as winston from 'winston'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class WinstonSpool extends Spool {
  public logger

  bindEvents() {
    this.app.removeAllListeners('fabrix:log')
    this.app.on('fabrix:log', (level, msg = []) => this.logger.log(level, ...msg))
  }

  /**
   * Logging is a system function, and we thus initialize the logger in the
   * constructor phase, before the Fabrix app has started.
   */
  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    app.once('fabrix:constructed', () => {
      this.logger = winston.createLogger(this.app.config.get('log'))
      this.bindEvents()
    })
  }
}

