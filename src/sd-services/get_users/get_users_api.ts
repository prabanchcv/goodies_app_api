// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class get_users_api {
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
    this.serviceName = 'get_users_api';
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
      instance = new get_users_api(
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
    //appendnew_flow_get_users_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_users_api');
    //appendnew_flow_get_users_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_users_api');

    this.app['get'](
      `${this.serviceBasePath}/users`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_UNNk2I8v7FlpBlKb(bh, parentSpanInst);
          //appendnew_next_sd_FYx965UNpDDGIlBN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FYx965UNpDDGIlBN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_users_api_HttpIn
  }
  //   service flows_get_users_api

  //appendnew_flow_get_users_api_start

  async sd_UNNk2I8v7FlpBlKb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UNNk2I8v7FlpBlKb',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_EQ0uxl70E3kjCZ8g');
      bh.local.response = await dmUtilsInst.find(
        '_EN_ihm2p9b723',
        {},
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lqmIV8xcsaoRklMB(bh, parentSpanInst);
      //appendnew_next_sd_UNNk2I8v7FlpBlKb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UNNk2I8v7FlpBlKb',
        spanInst,
        'sd_UNNk2I8v7FlpBlKb'
      );
    }
  }

  async sd_lqmIV8xcsaoRklMB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lqmIV8xcsaoRklMB',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        response: bh.local?.response,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CpN3JAOKlNjiCU0L(bh, parentSpanInst);
      //appendnew_next_sd_lqmIV8xcsaoRklMB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lqmIV8xcsaoRklMB',
        spanInst,
        'sd_lqmIV8xcsaoRklMB'
      );
    }
  }

  async sd_CpN3JAOKlNjiCU0L(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CpN3JAOKlNjiCU0L');
    }
  }

  async sd_0wGpGmwSTEn8lfNg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0wGpGmwSTEn8lfNg',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.errors?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CpN3JAOKlNjiCU0L(bh, parentSpanInst);
      //appendnew_next_sd_0wGpGmwSTEn8lfNg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0wGpGmwSTEn8lfNg',
        spanInst,
        'sd_0wGpGmwSTEn8lfNg'
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
    if (
      false ||
      (await this.sd_78II90eiHNrVWWDl(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_78II90eiHNrVWWDl(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_0wGpGmwSTEn8lfNg', 'sd_CpN3JAOKlNjiCU0L'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_0wGpGmwSTEn8lfNg(bh, parentSpanInst);
    //appendnew_next_sd_78II90eiHNrVWWDl
    return true;
  }
  //appendnew_flow_get_users_api_Catch
}
