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
        'jwt',
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
          bh = await this.sd_hrLmeHRW20yZab5M(bh, parentSpanInst);
          //appendnew_next_sd_UsrIeL9gkEhOCoa6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UsrIeL9gkEhOCoa6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'jwt',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_users_api_HttpIn
  }
  //   service flows_get_users_api

  //appendnew_flow_get_users_api_start

  async sd_hrLmeHRW20yZab5M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hrLmeHRW20yZab5M',
      parentSpanInst
    );
    try {
      console.log(bh.input.query, 'gotteamid');
      bh.local.team = {
        team_id: parseInt(bh.input.query.team_id),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fE8rH8kJ1IBlKYvC(bh, parentSpanInst);
      //appendnew_next_sd_hrLmeHRW20yZab5M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hrLmeHRW20yZab5M',
        spanInst,
        'sd_hrLmeHRW20yZab5M'
      );
    }
  }

  async sd_fE8rH8kJ1IBlKYvC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fE8rH8kJ1IBlKYvC',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_EQ0uxl70E3kjCZ8g');
      bh.local.result = await dmUtilsInst.find(
        '_EN_ihm2p9b723',
        bh.local.team,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oYfU929AZdMhkAsi(bh, parentSpanInst);
      //appendnew_next_sd_fE8rH8kJ1IBlKYvC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fE8rH8kJ1IBlKYvC',
        spanInst,
        'sd_fE8rH8kJ1IBlKYvC'
      );
    }
  }

  async sd_oYfU929AZdMhkAsi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oYfU929AZdMhkAsi',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        response: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SgRmDrSWKaADm4WW(bh, parentSpanInst);
      //appendnew_next_sd_oYfU929AZdMhkAsi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oYfU929AZdMhkAsi',
        spanInst,
        'sd_oYfU929AZdMhkAsi'
      );
    }
  }

  async sd_SgRmDrSWKaADm4WW(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SgRmDrSWKaADm4WW');
    }
  }

  async sd_Gk0ajy3Y8KNCYzvu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gk0ajy3Y8KNCYzvu',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        error: bh.errors?.message,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_SgRmDrSWKaADm4WW(bh, parentSpanInst);
      //appendnew_next_sd_Gk0ajy3Y8KNCYzvu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gk0ajy3Y8KNCYzvu',
        spanInst,
        'sd_Gk0ajy3Y8KNCYzvu'
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
      (await this.sd_T8l4l68lgdNo7GaX(bh, parentSpanInst))
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
  async sd_T8l4l68lgdNo7GaX(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_Gk0ajy3Y8KNCYzvu', 'sd_SgRmDrSWKaADm4WW'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_Gk0ajy3Y8KNCYzvu(bh, parentSpanInst);
    //appendnew_next_sd_T8l4l68lgdNo7GaX
    return true;
  }
  //appendnew_flow_get_users_api_Catch
}
