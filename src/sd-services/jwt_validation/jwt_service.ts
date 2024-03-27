// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Middleware } from '../../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class jwt_service {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'jwt_service';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new jwt_service(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_jwt_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: jwt_service');
    let mw_jwt_validation: Middleware = new Middleware(
      this.serviceName,
      'jwt_validation',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_1X0yS9aaVUnsLWVb(bh, parentSpanInst);
          //appendnew_next_sd_2BR4fH85kTnHQl2T
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2BR4fH85kTnHQl2T');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['jwt_validation'] =
      mw_jwt_validation;
    //appendnew_flow_jwt_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: jwt_service');
    //appendnew_flow_jwt_service_HttpIn
  }
  //   service flows_jwt_service

  //appendnew_flow_jwt_service_start

  async sd_1X0yS9aaVUnsLWVb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1X0yS9aaVUnsLWVb',
      parentSpanInst
    );
    try {
      const jwt = require('jsonwebtoken');
      console.log(bh.input.headers);
      const token = bh.input.headers?.bearer;
      // verify a token symmetric
      jwt.verify(token, 'shhhhh', function (err, decoded) {
        if (err) {
          throw new Error('Token Expired');
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uypTO6yqEetTohHi(bh, parentSpanInst);
      //appendnew_next_sd_1X0yS9aaVUnsLWVb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1X0yS9aaVUnsLWVb',
        spanInst,
        'sd_1X0yS9aaVUnsLWVb'
      );
    }
  }

  async sd_uypTO6yqEetTohHi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uypTO6yqEetTohHi',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uypTO6yqEetTohHi',
        spanInst,
        'sd_uypTO6yqEetTohHi'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_jwt_service_Catch
}
